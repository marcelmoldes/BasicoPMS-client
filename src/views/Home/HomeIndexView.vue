<template>
  <div class="text-center">
    <home-description-card></home-description-card>
    <home-get-started-card></home-get-started-card>
    <home-faq-card></home-faq-card>
  </div>
</template>
<script>
import HomeDescriptionCard from "@/views/Home/components/HomeDescriptionCard.vue";
import HomeFaqCard from "@/views/Home/components/HomeFaqCard.vue";
import HomeGetStartedCard from "@/views/Home/components/HomeGetStartedCard.vue";

export default {
  components: { HomeGetStartedCard, HomeFaqCard, HomeDescriptionCard },
  data() {
    return {};
  },
};
</script>
<style>
template {
  color: white;
}
</style>
