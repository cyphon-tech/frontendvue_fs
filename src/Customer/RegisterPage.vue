<template>
    <div>
        <h2>Register as user</h2>
        <hr />
        <div class="alert alert-success" v-if="isSuccess">
            Regestration Successfull
        </div>
        <form @submit.prevent="onCreatePost">
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="title" />
            </div>
            <div class="form-group">
                <label>email</label>
                <input type="text" class="form-control" v-model="email" />
            </div>
            <div class="form-group">
                <label>password</label>
                <input type="text" class="form-control" v-model="password" />
            </div>
           
           
            <div class="mt-3">
                <button type="submit" class="btn btn-primary">
                    Create acount
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: '',
            password: '',
            email: '',
            role_id:'3',
            isSuccess: false,
        };
    },
    methods: {
        onCreatePost() {
            axios
                .post(`http://127.0.0.1:8000/api/register`, {
                    name: this.title,
                    email: this.email,
                    password: this.password,
                    role_id:this.role_id
                })
                .then((response) => {
                    this.isSuccess = true;
                    console.log(response);
                    this.$emit('postcreated');
                });
        },
    },
};
</script>