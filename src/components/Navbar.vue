<template>
  <nav>
    <div class="logo">
      <router-link class="button" to="/">
        <img src="../assets/logo.png" alt="Vue" />
      </router-link>
    </div>
    <div class="waifu-photo">
      <img src="../assets/waifu.jpg" alt="Waifu" />
    </div>
    <div class="menu">
      Olá Mestre Gustavo, aqui está suas tarefas de hoje:
      <v-btn class="button" icon>
        <v-icon class="material-icons"> today </v-icon>
      </v-btn>
      e algumas sugestões para o seu dia
      <v-btn class="button" icon>
        <v-icon class="material-icons"> emoji_objects </v-icon>
      </v-btn>
    </div>
    <v-spacer />
    <div class="quick-add">
      <v-btn class="button">
        <v-icon class="material-icons-outlined"> task </v-icon>
      </v-btn>
      <v-btn class="button">
        <v-icon class="material-icons-outlined">history_edu</v-icon>
      </v-btn>
      <v-btn class="button">
        <v-icon class="material-icons-outlined">push_pin</v-icon>
      </v-btn>
      <v-btn class="button">
        <v-icon class="material-icons-outlined">monetization_on</v-icon>
      </v-btn>
    </div>
    <div class="user-photo">
      <img src="../assets/waifu.jpg" alt="Waifu" />
    </div>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  display: flex;
  flex-direction: row;
  min-width: 100vw;
  height: var(--navbar-height);
  background-color: var(--primary);

  .logo {
    padding-left: 1rem;
    padding-top: 4px;
    margin-right: 1rem;
  }

  .waifu-photo {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }

  .user-photo {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 4rem;
    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  }

  .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--gold);
    .button {
      .material-icons,
      .material-icons-outlined {
        font-size: 2rem;
        color: var(--gold);
      }
    }
  }

  .quick-add {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
    .button {
      display: flex;
      width: 60px;
      height: 60px;
      top: 50%;
      background: var(--primary);
      border-radius: 50%;
      border: 5px solid #f0ece2;
      z-index: 1;
      box-shadow: 0;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.15);
      color: var(--gold);
    }
  }
}
</style>
