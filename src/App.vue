<template>
<the-header></the-header>
<router-view> </router-view>
</template>
<script>

import axios from "axios";
//"http://127.0.0.1:8000/api/tokenvalidate"
//register locally beacuse we are using it locally
import TheHeader from './components/layout/TheHeader.vue';
 export default{
    components:{
        TheHeader
    },
     data() {
    return {
      role: '',
      mail: "",
      result: {},
      student: {
        api_token : localStorage.token,
        role_id: localStorage.role_id,
      },
    };
  },
 // auto login code
    created()
    {
    
     if(localStorage.token!='NULL')
    {
     // this.$store.dispatch('tryLogin');//dispatch method of action
      // console.log(this.student);
    axios
        .post("http://127.0.0.1:8000/api/tokenvalidate", this.student)
        .then(({ data }) => {
          try {
        this.role= data;      
       this.mail= this.student.email;
             this.role= data['users']['0']['role_id'];
              this.api_token= data['users']['0']['api_token'];
              this.user_id= data['users']['0']['id'];
              console.log(this.api_token);
              console.log(this.role);
                this.$emit('postcreated');
                  if (this.role === '3' ) {
           alert("Login Successfully as Customer");
          this.$router.push('/hotel');
        }
          else if (this.role === '1' ) {
           alert("Login Successfully as Admin");
          this.$router.push('/admin');
        }
        else if (this.role === '2' ) {
           alert("Login Successfully as Hotel");
          this.$router.push('/yourhotel`');
        }
         
       else if (this.check === true) {
          alert("Login Successfully");
          this.$router.push('/');
        
        }
       
         else {
          alert("Login failed");
        }
  this.$store.dispatch('set',{ tokenId:this.api_token, userId:this.user_id,roleId:this.role}); 
              this.$store.commit('setapp',{ tokenId:this.api_token, userId:this.user_id,roleId:this.role}); 
             this.$store.commit('loginhogya');
         
      
       } catch (err) {
        alert("Error, please try again");
      }
        
    });

     }
 
      }
 }
 //component registration done
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>