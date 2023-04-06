<template>
  <div>
    <h2>Login</h2>
    <hr />
    <div class="alert alert-success" v-if="isSuccess">
      Post Created Successfully
    </div>
    <form @submit.prevent="onCreatePost">
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="student.email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
         <input type="password" class="form-control" v-model="student.password" />
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
      check: '',
      mail: "",
      result: {},
      student: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
   
    onCreatePost() {
      axios
        .post("http://127.0.0.1:8000/api/login", this.student)
        .then(({ data }) => {
          console.log(data);
          try {
               
           this.mail= this.student.email;
           console.log(this.mail);
            this.ongetmail();
           console.log("sdfghjhgfds");
           console.log(this.role);
              this.check=data.status;
           
          
          } catch (err) {
            alert("Error, please try again");
          }
        //   this.showLoading(false);
            
        });
    },

     ongetmail()
    {
             axios
                .post(`http://127.0.0.1:8000/api/loginmail`, {
                    email: this.mail,
                })
                .then((response) => {
                   // this.isSuccess = true;
                   // console.log(response);
                  //  console.log(response['data']['users']['0']['role_id']);
                 this.role= response['data']['users']['0']['role_id'];
                    console.log(this.role);
                  // response['data']['users'];
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
                });
       

    },
   
  },
};
</script>