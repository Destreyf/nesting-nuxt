<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <nuxt-logo/>
        <buefy-logo/>
        <h1 class="title">Welcome to
          <b>Nuxt</b> +
          <b>Buefy</b> +
          <b>Nest</b>
        </h1>
        <h2 class="subtitle">
          That's a bunch of stuff which I'm still learning, it, looks Ugly I know :)
          <small>(yet I don't care)</small>
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import BuefyLogo from './BuefyLogo.vue'
import NuxtLogo from './NuxtLogo.vue'
export default {
  components: {
    BuefyLogo,
    NuxtLogo
  }
}
</script>