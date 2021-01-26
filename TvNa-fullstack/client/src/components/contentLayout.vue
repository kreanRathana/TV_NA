<template>
    <v-container class="mt-10" width="1200">
        <!-- For image and contents -->
        <v-row no-gutters>
            <!-- First Image -->
            <v-col sm="3" class="mr-3" justify='space-around'>
                <v-img src="../assets/bayon.jpg" height="350px" width="350px" ></v-img>
            </v-col>
            <!-- First contents -->
            <v-col>
                <v-card elevation="0" >
                    <v-card-title style="font-size: 30px; margin-bottom: 20px">{{title}}</v-card-title>
                    <v-card-subtitle style="font-size: 15px;" class="font-italic">{{location}}</v-card-subtitle>
                    <v-card-text style="font-size: 15px; text-align: justify;" class="mt-3">{{texts}}{{texts}}</v-card-text>
                </v-card>
            </v-col>
        </v-row>


        <!-- For the Image at the center of the page -->
        <v-row class="mt-5">
            <v-col md="4">
                <v-img src="../assets/bayon.jpg" class="image-size"></v-img>
            </v-col>
            <v-col md="4">
                <v-img src="../assets/bayon.jpg" class="image-size"></v-img>
            </v-col>
            <v-col md="4">
                <v-img src="../assets/bayon.jpg" class="image-size"></v-img>
            </v-col>
        </v-row>

        <!-- The second centent -->
        <v-row ><p class="ml-2 mr-2" style="text-align: justify;">{{texts}}{{texts}}</p></v-row>
        <div class="mt-3 mb-7">
            <h4>Reviews</h4>
            <hr style="width: 60px">
        </div>

        <!-- Review section -->
        <v-row no-gutters width="80%" v-for="review in reviews" :key="review.id" class="mt-3">

            <!-- User Image -->
            <v-col cols="1">
                <v-avatar size="75"><v-img src="../assets/user.jpg" width="100" height="100"></v-img></v-avatar>
            </v-col>

            <!-- User name and rating -->
            <v-col cols="10" class="ml-4">
                <v-row><span class="mr-4">{{review.userName}}</span> <v-rating
                    :value="review.rateStar"
                    color="amber"
                    dense
                    half-increments
                    size="19"
            ></v-rating></v-row>

            <!-- user review text -->
                <v-row><span><p>{{review.reviewText}}</p></span></v-row>
            </v-col>
            
            
        </v-row>
    </v-container>
    
</template>

<script>
  export default {
    name: 'contentLayout',
    data(){
        return{
            title: 'Bayon Temple',
            location: 'Phnom Sruoch District, Kampong Speu Province',
            texts: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus.',
            reviews: [
                {
                    id: 1,
                    userName: 'Random Person1',
                    userPic: '../assets/user.jpg',
                    rateStar: '4.5',
                    reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',

                },
                {
                    id: 2,
                    userName: 'Random Person2',
                    userPic: '../assets/user.jpg',
                    rateStar: '4.5',
                    reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    
                },
                {
                    id: 3,
                    userName: 'Random Person3',
                    userPic: '../assets/user.jpg',
                    rateStar: '4.5',
                    reviewText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                    
                }
            ]
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-size{
    height: 350px;
    width: 400px;
}

</style>
