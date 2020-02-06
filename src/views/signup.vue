<template>
<div class="container">
    <div class="signup-form">
        <div class="alert alert-danger" v-if="errors">
            <div v-for="e in errors" v-bind:key="e"> 
                {{ e }}
            </div>
        </div>


        <div class="form-group">
            <div class="form-row">
                <div class="col">
                    <label for="first_name">First name</label>
                    <input type="text"  v-model="name.first" id="first_name" class="form-control" placeholder="First name">
                </div>
                <div class="col">
                    <label for="middle_name">Middle name</label>
                    <input type="text"  v-model="name.middle" id="middle_name" class="form-control" placeholder="Middle name">
                </div>
                <div class="col">
                    <label for="last_name">Last name</label>
                    <input type="text"  v-model="name.last" id="last_name" class="form-control" placeholder="Last name">
                </div>
            </div>
        </div>

        <br>

        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
            <label for="exampleInputusername">Username</label>
            <input type="text" v-model="username" class="form-control" id="exampleInputusername" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted">special characters are not allowed in the username</small>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
        </div>


        <div class="form-group">
            <label for="exampleInputconfirmpassword">Confirm Password</label>
            <input type="password" v-model="password_confirmation" class="form-control" id="exampleInputconfirmpassword">
        </div>

        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Agree to the terms and conditions</label>
        </div>

        <button type="submit" v-on:click="submit()" class="btn btn-dark">Sign Up</button>

        <br> <br>
    </div>
</div>
</template>
<script>
export default {
    name: 'signup',
    data () {
        return {
            email: '',
            username: '',
            name: {
                first: '',
                middle: '',
                last: ''
            },
            password: '',
            password_confirmation: '',
            result: []
        }
    },
    computed: {
        errors () {
            return this.result.errors
        }
    },
    methods: {
        submit () {
            fetch("http://localhost:3000/auth/users", {
                "method": "POST",
                "body": {
                    "username": this.username,
                    "email": this.email,
                    "password": this.password,
                    "full_name": {
                        "first": this.name.first,
                        "middle": this.name.middle,
                        "last": this.name.last,

                    }
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                this.result = jsonResponse
            })
            .catch((errors) => { 
                this.errors = errors
            });

        },
    }
}
</script>
<style scoped>
.signup-form {
    width: 50% ;
    margin: 0 auto;
    padding-top: 10%;
}
</style>