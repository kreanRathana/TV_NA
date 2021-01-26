<template>
  <div>
    <div class="container">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input type="file" @change="uploadFile" multiple>
            </div>
          
        <!-- <img :src="imgPath" width="100" height="100"/> -->
      
            <div class="form-group">
                <button class="btn btn-success btn-block btn-lg">Upload</button>
            </div>
        </form>
    </div>
    <!-- <h1>{{myDate}}</h1>
    <h1>{{myDate.users}}</h1> -->
    <!-- <div class="container" v-for="item in myDate" :key="item._id">
      <h3>{{item}}</h3>
      
      </div>    -->
      <!-- {{myDate}} -->
      <div class="container" v-for="i in myDate" :key="i._id">
        <img :src="i.files[0]" width="100" height="100"/>
        {{i.files[0]}}
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
      return {
        myInfor:{name:'daro',age:'43'},
        imgPath:'http://localhost:4000/public/daro.jpg',
        myDate:[],
        files: null
      };
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
          axios.post('http://localhost:4000/api/file-upload', formData, {}).then((res) => {
            console.log(res)
          })
        }  
    },
    mounted(){
      axios.get('http://localhost:4000/api')
      .then((res)=>{
        this.myDate = res.data
        console.log(this.myDate)
        this.myDate = this.myDate.users
      })
      .catch((err)=>{
        console.log(err)
      })
      }

}
</script>

<style scoped lang="scss">
.container {
  max-width: 600px;
}
</style>