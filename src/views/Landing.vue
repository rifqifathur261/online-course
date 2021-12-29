<template>
  <div>
    <v-row no-gutters>
      <v-col cols="7" class="align-center ps-12">
        <v-img height="90vh" width="75%" src="../assets/landing-page.svg">
        </v-img>
      </v-col>
      <v-col cols="5" style="padding-top: 300px">
        <div class="mb-4">
          <span style="font-size: 38px; font-weight: 700">Sudahi sedihmu,</span>
          <br />
          <span style="font-size: 38px; font-weight: 700"
            >Ambil kelas online bersamaku</span
          >
        </div>
        <v-btn
          color="primary"
          depressed
          rounded
          :to="{
            path: '/home',
          }"
        >
          Get Started
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ListCourse from "../components/ListCourse.vue";

export default {
  name: "Home",

  components: {
    ListCourse,
  },
};
</script>
