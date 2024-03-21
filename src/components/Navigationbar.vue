<!-- eslint-disable vue/no-parsing-error -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
<div>
  <a class="navbar-brand" href="/">
    &#x1F4BB; <!-- Computer Emoji -->
    👨‍💻
</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
</div>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div class="navbar-nav">
    <ul class="navbar-nav">
      <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
      </li>
    </ul>
    <a class="nav-link" href="/Login">Login</a>
    <a class="nav-link" href="/Registration">Registration</a>
  </div>
</div>
</nav>
</template>

<script>
export default {
  name: 'NavigationbarForm',
};
</script>