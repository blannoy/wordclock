// Serving files from SPIFFS inspired by https://tttapa.github.io/ESP8266/Chap11%20-%20SPIFFS.html

#include <ESP8266WebServer.h>
#include <FS.h>
#include <IPAddress.h>

ESP8266WebServer webserver(80);
StaticJsonBuffer<10000> jsonBuffer;

//ESP8266HTTPUpdateServer flashUpdateServer(true, U_FLASH);
//ESP8266HTTPUpdateServer spiffsUpdateServer(true, U_SPIFFS);
ESP8266HTTPUpdateServer flashUpdateServer;
ESP8266HTTPUpdateServer spiffsUpdateServer;

void webserverSetup() {
  SPIFFS.begin();

  webserver.on("/api/status", apiStatus);
  webserver.on("/api/wifi/networks", apiWifiNetworks);
  webserver.on("/api/wifi/disconnect", apiWifiDisconnect);
  webserver.on("/api/wifi/connect", apiWifiConnect);
  webserver.on("/api/led/test", apiShowTestColor);
  webserver.on("/api/led/testall", apiShowAllLeds);
  webserver.on("/api/led/testWord", apiShowTestColorForWord);
  webserver.on("/api/led/wordColors", apiSetWordColors);
  webserver.on("/api/led/mode", apiSetLedMode);
  webserver.on("/api/led/singleColor", apiSetSingleColor);
  webserver.on("/api/led/hourlyColors", apiSetHourlyColors);
  webserver.on("/api/led/brightness", apiSetBrightness);
  webserver.on("/api/resetSettings", apiResetSettings);
  webserver.on("/api/hostname", apiHostname);
  
  webserver.onNotFound([]() {
    if (webserverHandleCaptivePortal()) return;
    
    if (!webserverServeFileFromSPIFFS(webserver.uri()))
      webserver.send(404, "text/plain", "404: Not Found");
  });

  flashUpdateServer.setup(&webserver, String("/api/update/flash"));
  spiffsUpdateServer.setup(&webserver, String("/api/update/spiffs"));
  webserver.begin();   
}

boolean webserverIsIp(String str) {
  for (size_t i = 0; i < str.length(); i++) {
    int c = str.charAt(i);
    if (c != '.' && (c < '0' || c > '9')) {
      return false;
    }
  }
  return true;
}

bool webserverHandleCaptivePortal() {
  if (!webserverIsIp(webserver.hostHeader()) ) {
    Serial.println("Redirecting to captive portal");
    
    webserver.sendHeader("Location", String("http://") + WiFi.softAPIP().toString(), true);
    webserver.send (302, "text/plain", ""); 
    webserver.client().stop(); 
    return true;
  }

  return false;
}

void webserverLoop() {
  webserver.handleClient();
}

String webserverGetContentType(String filename) { 
  if(filename.endsWith(".htm")) return "text/html";
  else if(filename.endsWith(".html")) return "text/html";
  else if(filename.endsWith(".css")) return "text/css";
  else if(filename.endsWith(".js")) return "application/javascript";
  else if(filename.endsWith(".svg")) return "image/svg+xml";
  else if(filename.endsWith(".png")) return "image/png";
  else if(filename.endsWith(".gif")) return "image/gif";
  else if(filename.endsWith(".jpg")) return "image/jpeg";
  else if(filename.endsWith(".ico")) return "image/x-icon";
  else if(filename.endsWith(".xml")) return "text/xml";
  else if(filename.endsWith(".pdf")) return "application/x-pdf";
  else if(filename.endsWith(".zip")) return "application/x-zip";
  else if(filename.endsWith(".gz")) return "application/x-gzip";
  return "text/html";
}

bool webserverServeFileFromSPIFFS(String path) { 
  Serial.println("handleFileRead: " + path);
  if(path.endsWith("/")) path += "index.html";
  String content_type = webserverGetContentType(path);
  String compressed_path = path + ".gz";
  if(SPIFFS.exists(compressed_path) || SPIFFS.exists(path)) {
    if(SPIFFS.exists(compressed_path)) path += ".gz";
    File file = SPIFFS.open(path, "r"); 
    size_t sent = webserver.streamFile(file, content_type);
    file.close();
    Serial.println(String("\tSent file: ") + path);
    return true;
  }
  Serial.println(String("\tFile Not Found: ") + path);
  return false;
}

void apiSendJSON(int status, JsonObject *object) {
  String json;
  object->printTo(json);
  webserver.send(status, "application/json", json); 
  jsonBuffer.clear();
}

void apiSendJSONArray(int status, JsonArray *object) {
  String json;
  object->printTo(json);
  webserver.send(status, "application/json", json); 
  jsonBuffer.clear();
}

void apiSendError(String message) {
  JsonObject &root = jsonBuffer.createObject();
  root["error"] = message;
  apiSendJSON(400, &root);
}

void apiSendOK() {
  JsonObject &root = jsonBuffer.createObject();
  root["status"] = "ok";

  apiSendJSON(200, &root);
}

void apiStatus() {
  JsonObject &root = jsonBuffer.createObject();
  root["version"] = version;
  root["hostname"] = config.hostname;

  JsonObject& leds = root.createNestedObject("leds");
  
  switch(config.ledMode) {
    case single: leds["mode"] = "single"; break;
    case words: leds["mode"] = "words"; break;
    case hourly: leds["mode"] = "hourly"; break;
    case rainbow: leds["mode"] = "rainbow"; break;
  }
  leds["singleHue"] = config.singleColorHue;

  JsonArray &hourlyHues = leds.createNestedArray("hourlyHues");
  for(int i = 0; i < sizeof(config.hourlyColors); i++) {
    hourlyHues.add(config.hourlyColors[i]);
  }

  JsonArray &wordHues = leds.createNestedArray("wordHues");
  for(int i = 0; i < sizeof(config.wordColors); i++) {
    wordHues.add(config.wordColors[i]);
  }

  JsonObject &brightness = leds.createNestedObject("brightness");
  switch(config.brightnessMode) {
    case fixedBrightness: brightness["mode"] = "fixed"; break;
    case ldrBrightness: brightness["mode"] = "ldr"; break;
    case timeBrightness: brightness["mode"] = "time"; break;
  }
  brightness["min"] = config.minBrightness;
  brightness["max"] = config.maxBrightness;
  brightness["startHour"] = config.brightnessStartHour;
  brightness["endHour"] = config.brightnessEndHour;
  brightness["hasLDR"] = ledHasLDR;

  JsonObject &wifi = root.createNestedObject("wifi");
  wifi["accessPoint"] = wifiIsAccessPointActive() ? "active": "inactive";
  
  switch(WiFi.status()) {
    case WL_IDLE_STATUS: wifi["status"] = "idle"; break;
    case WL_NO_SSID_AVAIL: wifi["status"] = "ssid_unavailable"; break;
    case WL_CONNECTED: wifi["status"] = "connected"; break;
    case WL_CONNECT_FAILED: wifi["status"] = "connect_failed"; break;
    case WL_DISCONNECTED: wifi["status"] = "disconnected"; break;
  }

  if (WiFi.status() == WL_CONNECTED) {
    wifi["ip"] = WiFi.localIP().toString();
    wifi["mask"] = WiFi.subnetMask().toString();
    wifi["gateway"] = WiFi.gatewayIP().toString();
    wifi["dns"] = WiFi.dnsIP().toString();
    wifi["ssid"] = WiFi.SSID();
  }

  apiSendJSON(200, &root);
}

void apiWifiNetworks() {
  WifiNetwork *wifiNetworks = knownWifiNetworks();
  JsonArray& networks = jsonBuffer.createArray();

  for(int i = 0; i < totalKnownWifiNetworks(); i++) {
    JsonObject& network = networks.createNestedObject();
    network["ssid"] = wifiNetworks[i].ssid;
    network["rssi"] = wifiNetworks[i].RSSI;
    network["channel"] = wifiNetworks[i].channel;
    switch(wifiNetworks[i].encryptionType) {
      case ENC_TYPE_WEP: network["encryption"] = "WEP"; break;
      case ENC_TYPE_TKIP: network["encryption"] = "WPA/PSK"; break;
      case ENC_TYPE_CCMP: network["encryption"] = "WPA2/PSK"; break;
      case ENC_TYPE_NONE: break;
      case ENC_TYPE_AUTO: network["encryption"] = "WPA/WPA2/PSK"; break;
      default: network["encryption"] = "WPA2 Enterprise`"; break;
    }
  }

  apiSendJSONArray(200, &networks);
}

void apiWifiDisconnect() {
  JsonObject &root = jsonBuffer.createObject();
  root["status"] = "ok";

  apiSendJSON(200, &root);
  wifiDisconnect();
}

void apiWifiConnect() {
  String ssid = webserver.arg("ssid");
  String password = webserver.arg("password");

  wifiConnect(ssid, password);

  JsonObject &root = jsonBuffer.createObject();
  root["status"] = "connecting";

  apiSendJSON(200, &root);
}

void apiShowTestColor() {
  String hue = webserver.arg("hue");

  ledTestTime = millis() + 10000;
  ledTestHue = hue.toInt();
  ledTestWord = -1;

  apiSendOK();

}

void apiShowAllLeds() {
    String hue = webserver.arg("hue");
    ledTestTime = millis() + 30000;
  ledTestHue = hue.toInt();
  ledTestWord = -2;

  apiSendOK();
}

void apiShowTestColorForWord() { 
  if (!webserver.hasArg("hue")) {
    apiSendError("Missing hue parameter");
    return;
  }

  if (!webserver.hasArg("word")) {
    apiSendError("Missing word parameter");
    return;
  }

  String hue = webserver.arg("hue");
  String wordArg = webserver.arg("word");

  ledTestTime = millis() + 10000;
  ledTestHue = hue.toInt();
  ledTestWord = wordArg.toInt();

  apiSendOK();
  
}

void apiSetWordColors() {
  String argNames[] = { "w0", "w1", "w2", "w3", "w4", "w5", "w6", "w7", "w8", "w9", "w10",
                        "w11", "w12", "w13", "w14", "w15", "w16", "w17", "w18", "w19",
                        "w20", "w21", "w22", "w23", "w24" };
  for(int i = 0; i < 25; i++) {
    if (webserver.hasArg(argNames[i])) {
      String arg = webserver.arg(argNames[i]);
      config.wordColors[i] = arg.toInt(); 
    }
  }
  saveConfiguration();
  apiSendOK();
}

void apiSetHourlyColors() {
  String argNames[] = { "h0", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10",
                        "h11", "h12", "h13", "h14", "h15", "h16", "h17", "h18", "h19",
                        "h20", "h21", "h22", "h23" };
  for(int i = 0; i < 24; i++) {
    if (webserver.hasArg(argNames[i])) {
      String arg = webserver.arg(argNames[i]);
      config.hourlyColors[i] = arg.toInt(); 
    }
  }
  saveConfiguration();
  apiSendOK();  
}

void apiSetLedMode() {
  if (!webserver.hasArg("mode")) {
    apiSendError("Missing mode parameter");
    return;
  }

  String arg = webserver.arg("mode");
  if(arg == "single") {
    config.ledMode = single;
  } else if (arg == "words") {
    config.ledMode = words;
  } else if (arg == "hourly") {
    config.ledMode = hourly;
  } else if (arg == "rainbow") {
    config.ledMode = rainbow;
  } else {
    apiSendError("Unknown mode, valid options: 'single', 'hourly', 'rainbow', 'words'");
    return;
  }

  saveConfiguration();
  apiSendOK();
}

void apiSetSingleColor() {
  if (!webserver.hasArg("hue")) {
    apiSendError("Missing hue parameter");
    return;
  }

  config.singleColorHue = webserver.arg("hue").toInt();
  saveConfiguration();
  apiSendOK();
}

void apiSetBrightness() {
  if (webserver.hasArg("type")) {
    String arg = webserver.arg("type");
    if(arg == "fixed") {
      config.brightnessMode = fixedBrightness;
    } else if (arg == "ldr") {
      config.brightnessMode = ldrBrightness;
    } else if (arg == "time") {
      config.brightnessMode = timeBrightness;
    } else {
      apiSendError("Unknown type, valid options: 'fixed', 'ldr', 'time'");
      return;
    }
  }

  if (webserver.hasArg("min")) {
    config.minBrightness = webserver.arg("min").toInt();
  }

  if (webserver.hasArg("max")) {
    config.maxBrightness = webserver.arg("max").toInt();
  }

  if (webserver.hasArg("startHour")) {
    config.brightnessStartHour = webserver.arg("startHour").toInt();
  }

  if (webserver.hasArg("endHour")) {
    config.brightnessEndHour = webserver.arg("endHour").toInt();
  }

  saveConfiguration();
  apiSendOK();  
}

void apiResetSettings() {
  loadDefaultConfiguration();
  saveConfiguration();
  apiSendOK();
}

void apiHostname() {
  if (!webserver.hasArg("hostname")) {
    apiSendError("Missing hostname parameter");
    return;
  }

  String hostname = webserver.arg("hostname");
  if (hostname.length() >= (HOSTNAME_MAX - 1)) {
    apiSendError("Hostname too long");
  }

  Serial.print("Updating mDNS hostname to ");
  Serial.println(hostname);
  
  memcpy(config.hostname, hostname.c_str(), hostname.length() + 1);
  saveConfiguration();

  apiSendOK();
  ESP.restart();
}
