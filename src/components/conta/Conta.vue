<template>
  <div>
    <h1>Conta</h1>
    <v-flex xs12 md6 lg4>
      <v-container fill-height class="container-conta">
        <v-text-field
          color="purple darken-3"
          label="Digite seu CPF"
          type="text"
          min="00"
          step="1"
          mask="###.###.###-##"
          v-model="cpf"
          class="ml-2"
        ></v-text-field>
        <v-btn
          small
          :disabled="loadingData"
          class="purple darken-3 white--text mb-0 ml-2"
          @click="obterUsuario"
        >Consultar</v-btn>
        <v-progress-circular
          v-if="loadingData"
          :size="27"
          class="mt-2 ml-4"
          indeterminate
          color="purple darken-3"
        ></v-progress-circular>
      </v-container>
    </v-flex>
    <v-container v-if="showDataUser">
      <p>
        <strong>Número:</strong>
        {{formaterNumberLine}}
      </p>
      <p>
        <strong>Sistema de origem:</strong>
        {{formaterSystemOrigin}}
      </p>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    formaterNumberLine() {
      let num = this.dataClient.numeroLinha;
      let ddd = num.substr(0, 2);
      let firstFiveNumbers = num.substr(2, 5);
      let lastFourNumbers = num.substr(7, 10);

      return "(" + ddd + ") " + firstFiveNumbers + "-" + lastFourNumbers;
    },
    formaterSystemOrigin() {
      if (this.dataClient.sistemaOrigem.sigla.toUpperCase() === "AMDOCS") {
        return "Amdocs";
      } else if (this.dataClient.sistemaOrigem.sigla.toUpperCase() === "ATY") {
        return "Atlys";
      }
      return this.dataClient.sistemaOrigem.sigla;
    }
  },
  data() {
    return {
      cpf: null,
      dataClient: {},
      showDataUser: false,
      mask: "credit-card",
      loadingData: false
    };
  },
  methods: {
    obterUsuario() {
      let cpf = "43442814898";
      this.loadingData = true;
      this.$http.get(cpf).then(res => {
        this.dataClient = res.data;
        this.showDataUser = true;
        this.loadingData = false;
      });
    }
  }
};
</script>

<style scoped>
.container-conta {
  flex-wrap: wrap;
}
</style>
