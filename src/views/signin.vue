<template>
<div class="container">
    <div class="signin-form">
        {{ credentials.state }}
        <div class="form-group">
            <label for="exampleInputusername">Username</label>
            <input type="text" v-model="credentials.username" class="form-control" id="exampleInputusername" aria-describedby="emailHelp">
            <!-- <small id="emailHelp" class="form-text text-muted">special characters are not allowed in the username</small> -->
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="credentials.password" class="form-control" id="exampleInputPassword1">
        </div>

        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">keep me signed in</label>
        </div>

        <button type="submit" v-on:click="sign_in()" class="btn btn-dark">Sign In</button>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            credentials: {
                state: []
            },
        }
    },
    methods: {
        sign_in () {
            this.$store.dispatch('authenticate', this.credentials)
        }
    }
}
</script>

<style scoped>
.signin-form {
    width: 40% ;
    margin: 0 auto;
    padding-top: 10%;
}
</style>