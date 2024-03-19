const {createApp } = Vue;

createApp({
  data(){
    return{

    }
  },


  methods:{

  },


  mounted(){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((risposta) =>{
      console.log(risposta);
    })

  }
}).mount('#app')