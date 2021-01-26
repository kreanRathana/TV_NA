<template>
    <v-app>
    <v-img src="../assets/Login.png"
        max-width="100%"
        max-height="100%">
        <v-container class="d-flex flex-row-reverse" id="container">
             <v-card shaped color="#B1DADB" width="45%" height="auto" outlined max-height="auto" >
            <v-form class="px-3">
            <h4 class="text-center" id="welcome">Welcome Back</h4>
          
            <h2 class="text-center" id="login">Login to your account</h2>
          
            <label class="text-left">Email</label>
          
            <v-text-field id="input" v-model="email" label="Email" solo clearable></v-text-field>
          
            <label class="text-left">Password</label>

            <v-text-field v-model="password" label="Password" solo  required clearable></v-text-field>
            
            <v-checkbox v-model="checkbox" :label="`Remember Me`"></v-checkbox>
            
            <div class="text-right">
                <v-btn  depressed small color="error">Forgot Password?</v-btn>
            </div>
            <div class="text-center">
                <v-btn rounded dark x-large color="success" id="loginbtn" > Login </v-btn>
                <v-btn rounded dark x-large color="dark" id="loginbtn" > Continue with Google </v-btn>
            </div>

            <v-sheet color="transparent"  height="170"  ></v-sheet>
            
            <p class="text-center">Don't have an account? Join free today</p> 
      </v-form>
  </v-card>
</v-container>
    </v-img>
</v-app>
</template>
<script>

</script>
<style>
#input{
    width: 60%;
    padding: 10px;
}
#welcome{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 19px;
    color: #2D3748;
    margin-top: 20px;

}
#container{
    margin-top: 20px;
    margin-right: 150px;
}
#login{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: #1A202C;
    margin: 20px;
}
#loginbtn{
    width: 60%;
    margin: 20px;
}
#label{
    margin: 10px;
}
</style>
