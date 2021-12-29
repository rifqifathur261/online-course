<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/smartclass1.svg')"
          transition="scale-transition"
          width="120"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        icon
        :to="{
          path: '/',
        }"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="secondary">
      <router-view />
    </v-main>
  </div>
</template>
