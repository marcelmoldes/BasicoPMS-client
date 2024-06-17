<template>
  <div class="mx-auto text-center max-w-xl px-4">
    <forgot-password-form :user="user"></forgot-password-form>
  </div>
</template>
<script>
import ForgotPasswordForm from "@/views/Login/components/ForgotPasswordForm.vue";
export default {
  props: ["user"],
  components: {
    ForgotPasswordForm,
  },
};
</script>
