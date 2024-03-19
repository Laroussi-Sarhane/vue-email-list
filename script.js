const {createApp } = Vue;

createApp({

  data(){
    return{
      risultato:'',
       randomEm: [],
       apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',

       

    }
  },
  methods: {
    
    randomEmail(){
    for(let i = 1; i<=10; i++){
      axios.get(this.apiUrl)
      .then((risultato)=>{
        const nuovaEmail = risultato.data.response;
        console.log(nuovaEmail);
        console.log(random);
        this.randomEm.push(nuovaEmail);
      });
    };
   },
  },



  
  
   

  
  mounted(){
    this.randomEmail;
  },

}).mount('#app');

