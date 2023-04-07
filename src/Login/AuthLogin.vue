<template>
  <div>
    <h2>Login</h2>
    <hr />
    <div class="alert alert-success" v-if="isSuccess">
      Post Created Successfully
    </div>
    <form @submit.prevent="onLogin">
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model.trim="student.email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
         <input type="password" class="form-control" v-model.trim="student.password" />
      </div>
      <div class="mt-3">
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>
  <script>
import axios from "axios";
export default {
  data() {
    return {
      role: '',
      mail: "",
      result: {},
      student: {
        email: "",
        password: "",
        user_id:"",
      },
    };
  },
  methods: {
   
    onLogin() {
      axios
        .post("http://127.0.0.1:8000/api/login", this.student)
        .then(({ data }) => {
          try {
               
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
    },
   
   
  },
};
 
</script>