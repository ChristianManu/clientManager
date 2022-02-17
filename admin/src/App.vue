<template>


  <v-main>
    <router-view></router-view>
  </v-main>
 
</template>

<script>

export default {
    name: 'App',
    methods: {},

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
    background-image: url(../assets/bg-gradient.jpeg) ;
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


</style>
