<template>
  <div>
    <Navbar/>    
      <v-carousel
      class="image-slider mt-1"
        cycle
        height="800"
        hide-delimiter-background
        show-arrows-on-hover
  >
     <v-carousel-item
    >
      <v-img
        :src="require('../assets/Kirirom.png')"
        height="800"
        class="grey darken-4 ">
      </v-img>
    </v-carousel-item>
     <v-carousel-item
    >
      <v-img
        :src="require('../assets/Koh Ker.png')"
        height="800"
        class="grey darken-4 ">
      </v-img>
    </v-carousel-item>
     <v-carousel-item
    >

      <v-img
        :src="require('../assets/Angkor Wat.png')"
        height="800"
        class="grey darken-4">
      </v-img>
    </v-carousel-item>
     <v-carousel-item
    >

      <v-img
        :src="require('../assets/Keb Crab.png')"
        height="800"
        class="grey darken-4">
      </v-img>
    </v-carousel-item>
  </v-carousel>
  <CategoriesPlace/>
  <Footer/>
  </div>
</template>
<script>
import CategoriesPlace from '../views/CategoriesPlace'
import Navbar from '../components/Navbar'
import Footer from '../components/WebFooter'
  export default {
    components:{
      CategoriesPlace,
       Navbar,
       Footer
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
}
.col{
    background-color: red;
}
</style>