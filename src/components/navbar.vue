<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Pesso</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Company</router-link>
        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>

        </li>
        
        <li class="nav-item">
          <router-link class="nav-link" to="/developers">Developers</router-link>
        </li>

      </ul>

      <ul class="navbar-nav justify-content-end">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Support</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signin">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
      
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .bg-dark {
    background: #1a1c28 !important ;
  }
</style>