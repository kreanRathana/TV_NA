<template>
  <div>
    <v-app-bar app color="#3B506F" dark height="80">
      <div class="d-flex align-center" style="margin-right: 50px">
        <v-avatar class="profile ml-12" color="white" size="80">
          <a href="#">
            <v-img
              alt="Vuetify Logo"
              class="shrink"
              src="../assets/nvna_logo.jpg"
              transition="scale-transition"
              width="100"
            >
            </v-img>
          </a>
        </v-avatar>
      </div>

      <form action="/action_page.php">
        <select
          id="cars"
          name="cars"
          style="
            border-radius: 10px 0px 0px 10px;
            padding: 8px;
            background-color: #5c6788;
            outline: 0px;
          ">
          <option value="cambodia">Cambodia</option>
          <option value="thailand">Thailand</option>
          <option value="indonesia">Indonesia</option>
          <option value="malaysia">Malaysia</option>
        </select>
      </form>
      <v-text-field
        hide-details
        label="Filled"
        placeholder="Search"
        filled
        rounded
        dense
        solo-inverted
        single-line
        append-icon="mdi-magnify"
        class="shrink"
        style="border-radius: 0px 10px 10px 0px"
      >
      </v-text-field>
      <v-btn outlined class="ml-4" style="border-radius: 10px">Search</v-btn>
      <v-spacer></v-spacer>
      <v-btn outlined class="ml-4" style="border-radius: 10px">Sign in</v-btn>
      <v-btn outlined class="ml-4" style="border-radius: 10px">Create Account</v-btn
      >
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<script>
export default {};
</script>