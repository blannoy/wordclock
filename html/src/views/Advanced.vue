<template>
  <div class="about">
    <h1>Geavanceerde instellingen</h1>
    <h3>Laat alle LEDs 30s branden</h3>
    <div class="advancedGroup" id="allLeds">
      <button class="btn btn-primary" v-on:click="turnOnAllLeds">Aan</button>
    </div>
    <h3>Lichtsterkte</h3>
    <div class="advancedGroup">
         <div class="form-check">
        <input class="form-check-input" type="radio" id="fixed" value="fixed" v-model="brightnessType">
        <label class="form-check-label" for="fixed">Vaste lichtsterkte</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="ldr" value="ldr" v-model="brightnessType">
        <label class="form-check-label" for="ldr">Op basis van lichtsensor</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="time" value="time" v-model="brightnessType">
        <label class="form-check-label" for="time">Op tijd</label>
      </div>

      <br />

      <div class="form-group row" v-if="brightnessType === 'fixed'">
        <label for="fixedBrightness" class="col-sm-2 col-form-label">Lichtsterkte</label>
        <input type="range" class="col-sm-10 form-control" min="0" max="255" id="fixedBrightness" v-model="max">
      </div>

      <div class="form-row" v-if="(brightnessType === 'time')">
        <div class="form-group col-md-6">
          <label for="startTime">Starttijd (naar maximum)</label>
          <input type="number" min="0" max="23" class="form-control" id="startTime" v-model="startHour">
        </div>
        <div class="form-group col-md-6">
          <label for="endTime">Eindtijd (naar minimum)</label>
          <input type="number" min="0" max="23" class="form-control" id="endTime" v-model="endHour">
        </div>
      </div>

      <div class="form-group row" v-if="(brightnessType === 'ldr') || (brightnessType === 'time')">
        <label for="minBrightness" class="col-sm-2 col-form-label">Minimum (donker)</label>
        <input type="range" class="col-sm-10 form-control" min="0" max="255" id="minBrightness" v-model="min">
      </div>
      <div class="form-group row" v-if="(brightnessType === 'ldr') || (brightnessType === 'time')">
        <label for="maxBrightness" class="col-sm-2 col-form-label">Maximum (licht)</label>
        <input type="range" class="col-sm-10 form-control" min="0" max="255" id="maxBrightness" v-model="max">
      </div>

      <button type="submit" class="btn btn-primary" v-on:click="saveBrightness">Opslaan</button>
    </div>
    <br><br>
    <h3>Software updates</h3>

    <p>De software voor de woordklok bestaat uit twee delen, namelijk de firmware voor de klok zelf en de gebruikers interface. Deze moeten als afzonderlijke bestanden worden geupload.</p>

    <b-alert variant="warning" show>
    Volg altijd de bij de software geleverde instructies, anders is er een kans dat je woordklok niet meer werkt. Mocht dit gebeuren dan kan je altijd via de Arduino IDE nieuwe software uploaden, of langskomen bij Bitlair.</b-alert>

    <div class="advancedGroup">
      <h5>Firmware</h5>
      <form method="post" action="/api/update/flash" enctype="multipart/form-data">
        <div class="custom-file">
          <input type="file" accept=".bin,.bin.gz" name="firmware" class="custom-file-input" id="flashfile" required>
          <label class="custom-file-label" for="flashfile">Kies bestand</label>
        </div>
        <br /><br />
        <button type="submit" class="btn btn-primary">Uploaden</button>
      </form>
      <br /><br />
      <h5>Gebruikersinterface</h5>
      <form method="post" action="/api/update/spiffs" enctype="multipart/form-data">
        <div class="custom-file">
          <input type="file" accept=".bin,.bin.gz" name="filesystem" class="custom-file-input" id="flashfile" required>
          <label class="custom-file-label" for="flashfile">Kies bestand</label>
        </div>
        <br /><br />
        <button type="submit" class="btn btn-primary">Uploaden</button>
      </form>
    </div>
  </div>
</template>

<style>
.advancedGroup {
  padding: 30px;
  border: 1px solid #f7f7f9;
}
</style>

<script>
export default {
  name: 'Advanced',
  computed: {
    "brightnessType": {
      get() {
        return this.$store.state.leds.brightness.mode;
      },
      set(value) {
        this.$store.commit('brightnessType', value)
      }
    },
    "min": {
      get() {
        return this.$store.state.leds.brightness.min;
      },
      set(value) {
        this.$store.commit('minBrightness', value)
      }
    },
    "max": {
      get() {
        return this.$store.state.leds.brightness.max;
      },
      set(value) {
        this.$store.commit('maxBrightness', value)
      }
    },
    "startHour": {
      get() {
        return this.$store.state.leds.brightness.startHour;
      },
      set(value) {
        this.$store.commit('brightnessStartHour', value)
      }
    },
    "endHour": {
      get() {
        return this.$store.state.leds.brightness.endHour;
      },
      set(value) {
        this.$store.commit('brightnessEndHour', value)
      }
    },
    "hostname": {
      get() {
        return this.$store.state.hostname;
      },
      set(value) {
        this.$store.commit('hostname', value)
      }
    }    
  }, 
  methods: {
    saveBrightness() {
      this.axios.get('/api/led/brightness', { params: {
        "type": this.$store.state.leds.brightness.mode,
        "min": this.$store.state.leds.brightness.min,
        "max": this.$store.state.leds.brightness.max,
        "startHour": this.$store.state.leds.brightness.startHour,
        "endHour": this.$store.state.leds.brightness.endHour
      }})
    },
    turnOnAllLeds() {
      this.axios.get('/api/led/testall', { params: { 
        hue: 0 
      }})
    },
    setHostname() {
      this.axios.get('/api/hostname', { params: {
        "hostname": this.$store.state.hostname,
      }})    
    }
  }
}
</script>
