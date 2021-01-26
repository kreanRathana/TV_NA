<template>
<div>
    <v-parallax :src="require('../assets/Register.png')" class="bg" height="1000"></v-parallax>
    
    <div class="register">
    <h1  class="head">JoinUs</h1>
      <p class="firstname">FirstName</p>
      <v-input type="text" class="input_f_name">
        <v-text-field type="text" placeholder="Enter your first name"></v-text-field>
      </v-input>
    
    
    
    <p class="lastname">LastName</p>
    <v-input type="text" class="input_l_name" >
      <v-text-field type="text"  placeholder="Enter your last name"></v-text-field>
    </v-input>
    
    <p class="email">Email</p>
    <v-input type="email"  class="input_email">
      <v-text-field type="email" placeholder="**********@gmail.com"></v-text-field>
    </v-input>

    <p class="password">Password</p>
    <v-input class="input_password">
      <v-text-field type="password" placeholder="password"></v-text-field>
    </v-input>

     <button class="button_create"><p> create Account </p></button>

      <button class="google">
          <p>Countinue with Google</p>
          <v-img class="icon" src="https://s3-alpha-sig.figma.com/img/197a/7e4d/9af128e66ac7d6d0e573cad6385214d3?Expires=1602460800&Signature=N7y-0xu-u00Ohdt2K~vU6y9PT1-JJrlBnMQJ7hkAzo607zKZ3cjc~MDNbItLZ7nRaPL0WPBdID-6CkYD2B3hrSPQmwDFRnBKWkJUruIV99L6blIIdWVbm3rmFMmpaCRjKK~Rp7CrXfOluKY8I8ytUDJmIzVh~N21LFcJgGE4ZwBRwQ5K7Cqy8DFggHBFZnoZt7uoaoGlzNa7OtygcBlXy76VjTFUgjaEloGGbqVce77XImu8YJhN-bN-r-dNOQtH1L3zTwmefNE5mkYBobokFy6HACgqrBkTFc~HAuoufSbg18kChaaFrqETOCWM3pWzKjWl~DlCftzLwBrYBUPUig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">

          </v-img>
      </button>
    
      <v-card-text class="footer">By signing up, you agree to our Terms of Use and Privacy Policy.</v-card-text>


    </div>
    
</div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.head{
  position: absolute;
width: 102px;
height: 35px;
left: 74.72%;
right: 10.97%;
top: 9%;
z-index: 1;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 35px;
color: white;
}
.input_f_name
{

position: absolute;
left: 64.72%;
right: 10.97%;
top: 19.53%;
bottom: 75.59%;
z-index: 1;
border: 1px solid #E8E8E8;
box-sizing: border-box;
border-radius: 5px;
}

.firstname{
  position: absolute;
left: 64.72%;
right: 29.79%;
top: 16.6%;
bottom: 81.54%;
z-index: 1;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: white;
}
.lastname{
  position: absolute;
left: 64.72%;
right: 29.86%;
top: 25.88%;
bottom: 72.27%;
z-index: 1;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: white;
}
.input_l_name{
  position: absolute;
left: 64.72%;
right: 10.97%;
top: 28.81%;
bottom: 66.31%;
z-index: 1;
border: 1px solid #E8E8E8;
box-sizing: border-box;
border-radius: 5px;
}
.email{
  position: absolute;
left: 64.72%;
right: 88.57%;
top: 35%;
bottom: 91.16%;
z-index: 1;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: white;
}
.input_email{
  position: absolute;
left: 64.72%;
right: 10.97%;
top: 38%;
bottom: 57%;
z-index: 1;
border: 1px solid #E8E8E8;
box-sizing: border-box;
border-radius: 5px;
}

.password{
position: absolute;
left: 64.72%;
right: 79.71%;
top: 44.33%;
bottom: 48.84%;
z-index: 1;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: white;
}

.input_password{
position: absolute;
left: 64.72%;
right: 10.97%;
top: 47%;
bottom: 47.90%;
z-index: 1;
border: 1px solid #E8E8E8;
box-sizing: border-box;
border-radius: 5px;  
}

.button_create{
position: absolute;
width: 25%;
height: 5%;

left: 64.72%;
right: 10.97%;
top: 59%;
bottom: 0%;
z-index: 1;
background: #04C45C;
border-radius: 5px;

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.google{
  position: absolute;
  width: 25%;
height: 5%;
left: 64.72%;
right: 10.97%;
top: 65%;
z-index: 1;
bottom: 0%;


background: #2D3748;
border-radius: 5px;
}
.background{
  position: absolute;
left: 0%;
right: 10.97%;
top: 19.53%;
bottom: 75.59%;
z-index: 1;
}
p{
  font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
position: relative;
top: 50%;
z-index: 1;
color: #FFFFFF;
}

.footer{
  position: absolute;
width: 30%;
height: 5%;
left: 65%;
top: 80%;
z-index: 1;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 13px;

color: white;

}

.icon{
  position: absolute;
left: 24.77%;
right: 70.47%;
top: 30%;
bottom: 30%;
z-index: 1;
}


#img{
  position: absolute;
width: 795px;
height: 1024px;
left: 0px;
top: 0px;
z-index: 1;
}

.bg{
  /* filter: blur(1px);
  -webkit-filter: blur(2px); */
  background-color:rgb(120, 120, 120);
  z-index: 1;
}


</style>
