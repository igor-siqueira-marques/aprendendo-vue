<template>
  <v-navigation-drawer
    class="purple darken-3"
    v-model="drawer"
    :mini-variant.sync="mini"
    hide-overlay
    dark
    stateless
    fixed
    app
    disable-resize-watcher
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="@/assets/img/logo-vivo.jpg" alt />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Projeto Igor</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile
        color="custom-color"
        v-for="item in items"
        :key="item.title"
        :to="'/' + item.path"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard", path: "home" },
        { title: "Portifólio", icon: "question_answer", path: "portifolio" },
        { title: "Ações", icon: "present_to_all", path: "stocks" },
        { title: "Intenção", icon: "widgets", path: "intention" }
      ],
      mini: true,
      right: null
    };
  }
};
</script>

<style>
.menu {
  position: fixed;
}
.v-list {
  margin-top: 20px;
}
</style>
