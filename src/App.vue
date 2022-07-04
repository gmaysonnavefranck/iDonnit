<template>
  <v-app>
    <Navbar />
    <div class="app">
      <Sidebar />
      <v-main>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-main>
    </div>
  </v-app>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
    Navbar
  }
};
</script>
<style lang="scss">
html {
  overflow-y: auto;
}
:root {
  --primary: #602234;
  --primary-alt: #862f48;
  --gold: #d2ba83;
  --dark: #454b40;
  --dark-alt: #334155;
  --light: #f0ece2;
  --sidebar-width: 230px;
  --navbar-height: 75px;
}
.v-application {
  background-color: var(--light) !important;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira sans", sans-serif;
}
body {
  background: var(--light);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
