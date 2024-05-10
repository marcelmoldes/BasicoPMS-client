<template>
  <div>
    <HeaderComponent />
  </div>
  <router-view />
</template>

<style></style>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>
