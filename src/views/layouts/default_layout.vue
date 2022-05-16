<script setup>
import HeaderComponent from "./header_component.vue";
import FooterComponent from "./footer_component.vue";
</script>

<template>
  <div>
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>
