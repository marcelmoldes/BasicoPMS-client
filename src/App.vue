<template>
  <div>
    <HeaderComponent v-if="!user" />
    <SecuredHeaderComponent @logUserOut="logUserOut" v-if="user" />
  </div>

  <router-view
    :user="user"
    @sessionExpired="logUserOut(true)"
    @userLoggedIn="userAuthentication"
  />
  <footer-component v-if="!user"></footer-component>
</template>

<style>
body {
  @apply bg-gray-50;
}
</style>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import SecuredHeaderComponent from "@/components/SecureHeaderComponent.vue";
import Cookies from "js-cookie";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
    SecuredHeaderComponent,
    HeaderComponent,
  },
  data() {
    return {
      user: false,
    };
  },
  watch: {
    $route() {
      this.userAuthentication();
    },
  },
  methods: {
    userAuthentication() {
      this.user = Cookies.get("user");
      if (this.user) {
        this.user = JSON.parse(this.user);
        if (
          this.$route.path === "/" ||
          this.$route.path === "/register" ||
          this.$route.path === "/login"
        ) {
          this.$router.push("/dashboard");
        }
      }
    },
    logUserOut(expired) {
      Cookies.remove("user");
      this.user = false;
      if (expired) {
        this.$router.push("/?action=expired");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>
