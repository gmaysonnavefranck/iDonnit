<template>
  <aside :class="{ 'is-expanded': isMenuExpanded }">
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="toggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <span class="material-icons">home</span>
        <span class="text">Home</span>
      </router-link>
      <router-link class="button" to="/diary">
        <span class="material-icons-outlined">history_edu</span>
        <span class="text">Diário</span>
      </router-link>
      <router-link class="button" to="/memo">
        <span class="material-icons-outlined">push_pin</span>
        <span class="text">Memos</span>
      </router-link>
      <router-link class="button" to="/finance">
        <span class="material-icons-outlined">monetization_on</span>
        <span class="text">Financeiro</span>
      </router-link>
      <router-link class="button" to="/task">
        <span class="material-icons-outlined">task</span>
        <span class="text">Tarefas</span>
      </router-link>
      <router-link class="button" to="/programming">
        <span class="material-icons">add_task</span>
        <span class="text">Programação</span>
      </router-link>
      <router-link class="button" to="/list">
        <span class="material-icons">list</span>
        <span class="text">Listas</span>
      </router-link>
    </div>
    <div class="flex"></div>
    <div class="menu">
      <router-link class="button" to="/settings">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isMenuExpanded: false
    };
  },
  mounted() {
    this.isMenuExpanded = localStorage.isMenuExpanded;
  },
  methods: {
    toggleMenu() {
      this.isMenuExpanded = !this.isMenuExpanded;
    }
  }
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: calc(100vh - var(--navbar-height));
  padding: 1rem;

  background-color: var(--primary);
  color: var(--gold);

  transition: 0.2s ease-out;

  .flex {
    flex: 1 1 0;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;

    position: relative;
    top: 0;
    transition: 0.2s ease-out;

    .menu-toggle {
      transition: 0.2s ease-out;
      .material-icons,
      .material-icons-outlined {
        font-size: 2rem;
        color: var(--gold);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons,
        .material-icons-outlined {
          color: var(--primary-alt);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: 0.3s ease-out;
  }

  h3 {
    color: var(--gold);
    text-transform: uppercase;
    height: 0px;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;

      padding: 0.5rem 1rem;
      transition: 0.2s ease-out;

      .material-icons,
      .material-icons-outlined {
        font-size: 2rem;
        color: var(--gold);
        transition: 0.2s ease-out;
      }

      .text {
        color: var(--gold);
        transition: 0.2s ease-out;
      }

      &:hover,
      &.router-link-exact-active {
        background-color: var(--primary-alt);

        .material-icons,
        .material-icons-outlined,
        .text {
          color: var(--gold);
        }
      }

      &.router-link-exact-active {
        border-right: 5px solid var(--primary-alt);
      }
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    h3 {
      color: var(--gold);
      font-size: 0.875rem;
      height: 1rem;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .button {
      .material-icons,
      .material-icons-outlined {
        margin-right: 1rem;
      }
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      transition: 0.2s ease-out;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    z-index: 99;
  }
}
</style>
