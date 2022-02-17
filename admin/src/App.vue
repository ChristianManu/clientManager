<template>

<v-app>
    <v-app-bar
      app
      color="white"
      light
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">Menu</v-app-bar-nav-icon>
      </div>
        <v-spacer></v-spacer>
       <h1>Web Design Squad Client Manager</h1>
    </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <router-link to='/'>Home</router-link>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <!-- <router-link to='/about'>About</router-link> -->
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>



  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script>

export default {
    name: 'App',
    methods: {},
    data (){
      return {
        drawer: false,
      }
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
