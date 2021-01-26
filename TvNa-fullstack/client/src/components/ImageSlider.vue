<template>
  <div>     
      <v-carousel
      class="image-slider"
    cycle
    height="700"
    hide-delimiter-background
    show-arrows-on-hover
  >
     <v-carousel-item
    >
      <v-img
        :src="require('../assets/Kirirom.png')"
        height="700"
        class="grey darken-4 ">
      </v-img>
    </v-carousel-item>
     <v-carousel-item
    >
      <v-img
        :src="require('../assets/Koh Ker.png')"
        height="700"
        class="grey darken-4 ">
      </v-img>
    </v-carousel-item>
     <v-carousel-item
    >

      <v-img
        :src="require('../assets/Angkor Wat.png')"
        height="700"
        class="grey darken-4">
      </v-img>
    </v-carousel-item>
     <v-carousel-item
    >

      <v-img
        :src="require('../assets/Keb Crab.png')"
        height="700"
        class="grey darken-4">
      </v-img>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>
<script>
// import Navbar from './Navbar'
  export default {
    components:{
       
    },
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>

<style scoped>
.image-slider{
    background-color:rgb(214, 236, 126);
    margin-top: 85px;
}
.col{
    background-color: red;
}
</style>