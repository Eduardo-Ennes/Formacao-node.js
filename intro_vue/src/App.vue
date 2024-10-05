<template>

  <div id="App">
    <h3>Cadastro: </h3>
    <small v-if="errorField">Error! algum dado digitado incorretamente.</small><br>
    <input type="text" placeholder="Pais" v-model="paisField">
    <input type="text" placeholder="Cidade" v-model="cidadeField">
    <input type="number" placeholder="Valor da passagem" v-model="valorField">
    <button @click="cadastrarUsuario()">Cadastrar</button>
    <hr>
    <div v-for="(des, index) in destino" :key="des.id">
      <h4>{{ index + 1 }}</h4>  
      <input type="text" v-model="des.pais">  
      <input type="text" v-model="des.cidade"> 
      <input type="number" v-model="des.valor"> 
      <Cliente :destino="des" @meDelete="deletarDestino($event)"/>
    </div>
  </div>
  <hr>
</template>

<script>

import Cliente from './components/Cliente.vue'
export default {
  name: 'App',
  data(){
    return{
      paisField: "",
      cidadeField: "", 
      valorField: 0,
      errorField: false,
      destino: [
        {
          id: 1,
          pais: 'Austria',
          cidade: 'Viena', 
          valor: 1600
        },
        {
          id: 2,
          pais: 'Espanha',
          cidade: 'Sevilla', 
          valor: 1700
        },
        {
          id: 3,
          pais: 'Alemanha',
          cidade: 'Berlim', 
          valor: 1600
        },
        {
          id: 4,
          pais: 'Polonia',
          cidade: 'Varsofia', 
          valor: 1000
        },
        {
          id: 5,
          pais: 'Portugal',
          cidade: 'Algarve', 
          valor: 3000
        },
      ]
    }
  },
  components: {
    Cliente,
  },
  methods: {
    cadastrarUsuario: function(){
      if(this.paisField == "" || this.paisField == " " || this.paisField.length < 1 || this.cidadeField == "" || this.cidadeField == " " || this.cidadeField.length < 1 || this.valorField < 0){
        this.errorField = true
      }
      else{
        this.destino.push({
            pais: this.paisField,
            cidade: this.cidadeField,
            valor: this.valorField
          })
          this.paisField = ""
          this.cidadeField = ""
          this.valorField = 0
      }
    },

    deletarDestino: function($event){
      var destino = this.destino.find(des => des.id == $event.destino.id)
      this.destino.splice(destino, 1)
    }
  },
};
</script>

<style>

</style>
