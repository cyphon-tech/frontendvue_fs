<template>
  <div>
    <h2>login user</h2>
    <hr />
    <div class="alert alert-success" v-if="isSuccess">
      Post Created Successfully
    </div>
    <form @submit.prevent="onCreatePost">
      <div class="form-group">
        <label>email</label>
        <input type="text" class="form-control" v-model="student.email" />
      </div>
      <div class="form-group">
        <label>password</label>
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
            if (data.role_id === '1' ) {
               alert("Login Successfully as Customer");
              this.$router.push('/registerpage');
            }
              else if (data.role_id === '2' ) {
               alert("Login Successfully as Admin");
              this.$router.push('/admin');
            }
            else if (data.role_id === '3' ) {
               alert("Login Successfully as Hotel");
              this.$router.push('/yourhotel`');
            }
             
           else if (data.status === true) {
              alert("Login Successfully");
              this.$router.push('/');
            
            }
           
             else {
              alert("Login failed");
            }
          } catch (err) {
            alert("Error, please try again");
          }
           this.showLoading(false);
            
        });
    },
  },
};
</script>