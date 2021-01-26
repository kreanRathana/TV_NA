<template>
  <v-app>
    <h1>Hello </h1>
    <!-- <CategoryPlace/>
    <Navbar/>
    <ImageSlide/>
    <FooterWeb/>
  </v-app>
</template>

<script>
import FooterWeb from './components/WebFooter'
import Footer from './components/Footer'
import ImageSlide from './components/ImageSlider';
import Navbar from './components/Navbar'
import CategoryPlace from './components/CategoriesPlace'
import contentLayout from './components/contentLayout'
export default {
  name: 'App',

  components: {
    FooterWeb,
    ImageSlide,
    Navbar,
    Footer,
    CategoryPlace,
    contentLayout
  },

  data: () => ({
    //
  }),
};
</script>
