<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="light-green lighten-1 white--text">
      <v-card-title class="headline">
        <strong>
          {{stock.name}}
          <small>(Preço:{{stock.price}} | Qntd: {{ stock.quantity }})</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          color="purple darken-3"
          label="Quantidade"
          type="number"
          min="00"
          step="1"
          v-model.number="quantity"
          
        ></v-text-field>
        <v-btn 
        class="light-green lighten-1 white--text" 
        :disabled="!Number.isInteger(quantity) || quantity <= 0" 
        @click="sellStock">Vender</v-btn>

      </v-container>
    </v-card>
  </v-flex>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  props: {
    stock: Object
  },
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
      ...mapActions({sellStockAction: 'sellStock'}),
      sellStock(){
          /* eslint-disable */
          const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.price,
              quantity: this.quantity
          }
        //   this.$store.dispatch('sellStock', order)
        this.sellStockAction(order)
          this.quantity = 0;
      }
  }
};
</script>   

<style>
</style>
