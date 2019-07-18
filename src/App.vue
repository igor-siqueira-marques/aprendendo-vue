<template>
  <v-app>
    <v-content>
      <div class="container-menu">
        <div>
          <navigation></navigation>
        </div>
        <div class="header">
          <custom-header @toogleMenu="openMenu = !openMenu"></custom-header>
          <v-container>
            <router-view></router-view>
          </v-container>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import customHeader from "@/components/header/Header.vue";
export default {
  components: { Navigation, customHeader },
  data() {
    return {
      openMenu: false
    };
  },
  created() {
    this.$store.dispatch("initStock");
  }
};
</script>

<style scoped>
.container-menu {
  display: flex;
  height: 100%;
}
.container {
  margin: 20px;
}
.header {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 64px;
}
</style>

