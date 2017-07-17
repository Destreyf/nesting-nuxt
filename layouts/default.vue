<template>
  <section class="container">
  
    <nav class="navbar ">
      <div class="navbar-brand">
        <a class="navbar-item" target="_blank" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navMenuExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenuExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/">
            Index
          </nuxt-link>
          <nuxt-link class="navbar-item  is-active" to="/inspire">
            Inspiration
          </nuxt-link>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/AngelMunoz/nesting-nuxt" target="_blank">
            Github
          </a>
        </div>
      </div>
    </nav>
    <nuxt/>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Buefy.js'
    }
  }
}
</script>