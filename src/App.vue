<script setup>

import SideNav from './components/SideNav.vue'
</script>

<template>
  <SideNav>

    <main class="mt-12">
      <router-view />
    </main>

  </SideNav>

</template>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

* {
  font-family: 'Roboto';
}

.theme-color {
  background: linear-gradient(89.6deg, #0A244F 0.35%, #C92F02 268.44%)
}

.shadow {
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
}
</style>
