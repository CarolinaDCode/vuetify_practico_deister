<template>
  <v-app>
    <v-app-bar
      app
      color="warning"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="">
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="white--text mt-3 headline">Edison Flores</p>
        </v-flex>
      </v-layout> 
      <v-layout column>
        <v-flex mx-3>
          <v-btn color="success" block :to="{name: 'home'}">Home</v-btn><br>
          <v-btn color="success" block :to="{name: 'tareas-crud'}">Lista de tareas</v-btn>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
      <!-- <HelloWorld/> -->
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  data() {
    return {
      drawer: true
    }
  },
  components: {
    
    // HelloWorld,
  }
};
</script>
