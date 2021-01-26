<template>
  <v-app id="inspire">
      <Navbar/>
      <v-container>
        <v-row v-for="i in myDate" :key="i._id">
          <v-col cols="12">
            <v-card 
              height="300">
                  <v-row no-gutters>
                    <!-- image -->
                     <v-col cols="4">
                        <v-card
                           class="pa-2">
                              <v-img
                                :src="i.files[0]"
                                height="250"
                                width="400"
                                class="grey darken-4">
                            </v-img>
                      </v-card>
                      </v-col>
                <v-col cols="7">
                  <v-container
                    class="pa-2"           
                  >
                    <h3>{{i.place_name}}</h3>
                    <div>
                      <p style="color:gray;font-family: 'Lucida Console', Courier, monospace;">{{i.address}}</p>
                    </div>
                    <span>
                   <p style="text-align: justify;">  {{i.description}} ...<a href=""> <router-link :to="{ name: 'detaillayout',params: { moreDetail: i}}">See all</router-link></a></p>
                      
                      
                      </span>  
                   
                  </v-container>
                </v-col>
                <v-col cols="1">
                    <v-icon
                    large
                    color="teal darken-2"
                  >
                    mdi-folder-heart-outline
                  </v-icon>
                  <h3>2.9K</h3>

                </v-col>
              </v-row>
              
            </v-card>
          </v-col>
         </v-row>
      </v-container>
      <!-- <Footer/> -->
  </v-app>
</template>

<script>
import Navbar from '../components/Navbar'
// import Footer from '../components/WebFooter'
import axios from "axios";
export default {
  data() {
      return {
        myInfor:{name:'daro',age:'43'},
        myDate:[],
        files: null
      };
    },
     components:{
       Navbar,
      //  Footer
    },
    methods: {
        uploadFile (event) {
        this.files = event.target.files
        },
        handleSubmit() {
          const formData = new FormData();
          for (const i of Object.keys(this.files)) {
            formData.append('files', this.files[i])
          }
          axios.post('api/file-upload', formData, {}).then((res) => {
            console.log(res)
          })
        },
        MoreDetail(){
          this.$router.replace('/detaillayout')
        }  
    },
    mounted(){
      axios.get('api')
      .then((res)=>{
        this.myDate = res.data
        console.log(this.myDate)
        this.myDate = this.myDate.users
        this.myDate.filter((x)=>{
          x.full_desc = x.description;
          // console.log(x.full_desc)
          x.description = x.description.slice(0,410)

        })
      })
      .catch((err)=>{
        console.log(err)
      })
      }

}
</script>