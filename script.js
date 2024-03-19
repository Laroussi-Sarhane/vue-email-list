const {createApp } = Vue;

createApp({
  data(){
    return{
      risultato:'',
      // random: 10 ,

    }
  },


  methods:{

  },


  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((risposta) =>{
      console.log(risposta.data);
      this.risultato = risposta.data.response
    })

  }
}).mount('#app')