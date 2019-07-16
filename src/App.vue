<template>
  <v-app>
    <v-content>
		<div class="container-menu">
      <navigation></navigation>
      <v-container>
        <router-view></router-view>
      </v-container>
		</div>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
export default {
  components: { Navigation }
};
</script>

<style>
.container-menu{
	display: flex;
	height: 100%;
}
</style>

