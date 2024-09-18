<template>
  <div class="hello">
    <header class="encabezado">
      <h1>POKEMON</h1>
    </header>



    <main class="contenido">

      <div v-for="CajaPokemon in Pokemon" v-bind:key="CajaPokemon" class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img  :src="CajaPokemon.imagen" :alt="CajaPokemon.id">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">{{ CajaPokemon.nombre }}</p>
        <div class="borderColor" :style="{backgroundColor: CajaPokemon.type_color }">
        <h3>{{ CajaPokemon.type_name }}</h3>
        </div>
      </div>
    </div>
  </div>
</div>

    </main>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data: function(){
    return{
      Pokemon:[]
    }
  },
  methods:{
    Pokemones(){
      axios
      .get("https://cobuses.com.co/APIV2/model/pokemon.php?dato=getallpokemon")
      .then((Respuesta)=>{
        this.Pokemon = Respuesta.data
        console.log(Respuesta)
      })
      .catch((errorapi)=>{
        alert("LO SENTIMOS API ESTA EN MANTENIMIENTO"+errorapi)
      })
    }
  },
mounted(){
  this.Pokemones();
}
  
}

</script>

<style scoped>
.encabezado{
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: black;
   height: 80px;
   color: yellow;
   font-size: 40px;
   margin-bottom: 20px;
}
.contenido{
  display: grid;
  grid-template-columns: repeat(4,1fr); 
}
.card{
width: 300px;
border-radius: 10px;
}
.borderColor{
  color: white;
  font-size: 20px;
  border-radius: 10px;
}
</style>
