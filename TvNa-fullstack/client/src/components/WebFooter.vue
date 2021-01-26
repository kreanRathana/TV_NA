<template>
  <v-footer class="green lighten-1 white--text" padless>
    <v-row class="pt-1" no-gutters>
      <v-col class="pl-10" cols="12" sm="4">
        <a href="#"
          ><img
            src="../assets/nvna_logo.jpg"
            style="border-radius: 50%"
            width="70"
            height="70"
            alt="Project Logo"
        /></a>
        <h3 style="padding: 10px">Contact</h3>
        <p>+855 123 456 789<br />tvna19@kit.edu.kh</p>
      </v-col>
      <v-col cols="12" sm="4">
        <h3 style="padding: 10px">Information</h3>
        <ul>
          <li><a href="#!">About</a></li>
          <li><a href="#!">FAQ</a></li>
          <li>
            <a href="#!">Term&Condition</a>
          </li>
          <li>
            <a href="#!">Privacy Policy</a>
          </li>
        </ul>
      </v-col>
      <v-col class="pr-10" cols="12" sm="4">
        <h4 style="padding-top: 15px">Subscribe For More Information</h4>
        <v-text-field
          class="pt-5"
          label="Email"
          placeholder="Enter Your Email"
          outlined
        ></v-text-field>
        <v-btn rounded color="primary white--text pa-5"> Subscribe </v-btn>
        <p></p>
      </v-col>
      <v-col class="green py-4 text-center white--text" cols="12">
        {{ "CopyRight@"+ new Date().getFullYear() }} — <strong>TvNa.com.kh</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {};
</script>
<style scoped>
ul li {
  list-style: none;
  padding-bottom: 10px;
}
ul li a {
  text-decoration: none;
  color: white;
}
</style>