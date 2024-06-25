<template>
  <div class="max-w-7xl mx-4 md:mx-auto">
    <h1 class="text-2xl mt-20 font-bold text-indigo-500">Personal Account</h1>
    <profile-details-form :user="user"></profile-details-form>
    <change-password-form :user="user"></change-password-form>
  </div>
</template>

<script>
import ProfileDetailsForm from "@/views/PersonalAccount/components/ProfileDetailsForm.vue";
import ChangePasswordForm from "@/views/PersonalAccount/components/ChangePasswordForm.vue";

export default {
  props: ["user"],
  components: { ChangePasswordForm, ProfileDetailsForm },
};
</script>

<style lang="scss" scoped></style>
