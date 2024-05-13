<template>
  <div>
    <login-form-component
      @userLoggedIn="$emit('userLoggedIn')"
    ></login-form-component>
  </div>
</template>

<script>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import LoginFormComponent from "@/views/Login/components/LoginFormComponent.vue";

export default {
  components: {
    LoginFormComponent,
  },
  data() {
    return {};
  },
  async mounted() {
    if (this.$route.query.action === "expired") {
      Toastify({
        text: "Your session has expired, please log in again.",
        position: "center",
        duration: 3000,
      }).showToast();
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
