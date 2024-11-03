<template>
    <div :class="{'info': !isPremium, 'info-premium': isPremium}">
        <p>Pais: {{ destino.pais }}</p>
        <p>Cidade: {{ destino.cidade }}</p>
        <p v-if="destino.valor <= 1500">Valor da passagem: R${{ destino.valor }}</p>
        <p v-else>Valor da passagm: R${{ destino.valor }} / Passagem está CARA!</p>
        <button @click="mudarcor()">Mudar de cor</button>
        <button @click="deletar">Deletar</button>
        <h4>IdEspecial: {{ idEspecial }}</h4>
    </div>
</template>

<script>
export default{
    data(){
        return {
            isPremium: false
        }
    },
    props: {
        pais: String,
        cidade: String,
        valor: Number,
        destino: Object
    },
    methods: {
        mudarcor: function(){
        this.isPremium = !this.isPremium
        },

        deletar: function(){
            this.$emit("meDelete", {destino: this.destino})
        }
    }
}
</script>

<style scoped>
  .info{
    background-color: rgb(212, 211, 211);
    padding: 1rem;
    margin-bottom: 0.5rem;
  }

  .info-premium{
    background-color: rgb(146, 145, 145);
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
</style>