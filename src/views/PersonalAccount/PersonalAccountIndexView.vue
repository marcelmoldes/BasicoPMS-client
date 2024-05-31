<template>
  <div>
    <profile-details-form :user="user"></profile-details-form>
  </div>
</template>

<script>
import ProfileDetailsForm from "@/views/PersonalAccount/components/ProfileDetailsForm.vue";

export default {
  props: ["user"],
  components: { ProfileDetailsForm },
};
</script>

<style lang="scss" scoped></style>
