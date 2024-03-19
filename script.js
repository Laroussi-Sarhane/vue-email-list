const {createApp } = Vue;

createApp({

  data(){
    return{
      risultato:'',
       emails: [],
       apiUrl:'https://flynn.boolean.careers/exercises/api/random/mail',

       

    }
  },

  methods:{

    getApi(){
      for(let i = 1; i<=10; i++){
        axios.get(this.apiUrl)
        .then((risultato)=>{
          const nuovaEmail = risultato.data.response;
          console.log(nuovaEmail);
          console.log(this.emails);
          this.emails.push(nuovaEmail)
        })
      }
    }
  },

  mounted() {
    console.log(axios);
    this.getApi()
  },
  
  
   

  

}).mount('#app');

