<template>
    <div class="home">
        <div class="bg-wallpaper">
            <div class="center-screen">
                <v-row>
                </v-row>
                <v-row>
                    <div >
                        <v-card
                            elevation="2"
                            outlined
                            class="v-card"
                         >
                        <v-card-title class="centered">LOGIN</v-card-title>
                            <v-form>
                                 <v-text-field
                                    class="vTextField"
                                    v-model="email"
                                    :rules= "rules.required"
                                    label="E-mail"
                                    required
                                ></v-text-field>

                                <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules= "rules.required"
                                    :type="show1 ? 'text' : 'password'"
                                    label="Password"
                                    required
                                    class="vTextField"
                                    @click:append="show1 = !show1"
                                    
                                ></v-text-field>
                                 <div class="centered mt-4">
                                    <router-link to="/dashboard"> <v-btn href="#" class="mr-4" >Register</v-btn></router-link>
                                 </div>
                            </v-form>
       
                        </v-card>
                    </div>
                </v-row>
                            

            </div>

        </div>
    </div>


</template>

<script>


export default {
    name: 'Home',
    methods: {},
    data (){
      return {
        valid: true,
        password: '',
        email: '',
        rules: {
        required: [value => !!value || 'Required.'],
          
        }
      
      }
    },
    components: {
      
    }

}
</script>


<style scoped>

.main-bkg {
    position: relative
}

.centered {
    display: flex;
    justify-content: center;
    vertical-align: middle;
}

.bg-wallpaper{
    background-color: #76CAFC;
    height: 100vh;
    background-size: cover;
}

.center-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100%;
}

.v-card {
    padding: 100px;
    background: white;
}

.vTextField {
    padding-bottom: 2%
}



</style>
