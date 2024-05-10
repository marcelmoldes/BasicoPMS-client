<template>
  <div>
    <HeaderComponent v-if="noLoggedIn" />
    <SecuredHeaderComponent v-if="loggedIn" />
  </div>
  <router-view />
</template>

<style></style>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SecuredHeaderComponent from "@/components/SecureHeaderComponent.vue";
export default {
  components: {
    SecuredHeaderComponent,
    HeaderComponent,
  },
  data() {
    return {
      loggedIn: true,
      noLoggedIn: false,
    };
  },
};
</script>
