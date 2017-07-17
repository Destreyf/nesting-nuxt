<template>
  <section>
    <button class="button" @click="activeTab = 1">Set Music</button>
    <b-tabs v-model="activeTab">
      <b-tab-item label="Pictures">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum dui vel molestie egestas. Nulla vulputate elementum diam quis consectetur.
      </b-tab-item>
  
      <b-tab-item label="Music">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum dui vel molestie egestas. Nulla vulputate elementum diam quis consectetur. Integer pulvinar laoreet nibh non faucibus. Suspendisse ut cursus lectus. Donec consectetur turpis at leo ultricies rhoncus. Cras consequat aliquet eros nec porta. Nullam sit amet mollis turpis. Aenean vitae tortor et velit sodales faucibus.
      </b-tab-item>
  
      <b-tab-item label="Videos">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vestibulum dui vel molestie egestas. Nulla vulputate elementum diam quis consectetur. Integer pulvinar laoreet nibh non faucibus.
      </b-tab-item>
    </b-tabs>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeTab: 0
    }
  }
}
</script>
