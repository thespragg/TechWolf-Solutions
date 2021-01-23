<template>
  <div
    class="header"
    :class="minimizedScreen && openMenu ? 'override-header' : ''"
    ref="header"
  >
    <div class="container">
      <div class="menu">
        <svg
          @click="openMenu = !openMenu"
          class="icon"
          height="32px"
          id="Layer_1"
          style="enable-background: new 0 0 32 32"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
        >
          <path
            d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
          />
        </svg>
        <div class="logo-container">
          <div class="logo">TechWolf<span class="blue">.</span></div>
        </div>
      </div>
      <span v-if="!minimizedScreen"></span>
      <div class="nav-container">
        <transition name="expand">
          <div class="nav expand" v-if="!minimizedScreen || openMenu">
            <a class="nav-link" href="#home" ref="home">home</a>
            <span class="blue nav-break" v-if="!minimizedScreen">.</span>
            <a class="nav-link" href="#about" ref="about">about</a>
            <span class="blue nav-break" v-if="!minimizedScreen">.</span>
            <a class="nav-link" href="#blog" ref="blog">blog</a>
            <span class="blue nav-break" v-if="!minimizedScreen">.</span>
            <a class="nav-link" href="#more" ref="more">more</a>
            <span class="blue nav-break" v-if="!minimizedScreen">.</span>
            <a class="nav-link" href="#contact" ref="contact">contact</a>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageHeader",
  data() {
    return {
      openMenu: false,
      regions: ["home", "about", "blog", "more", "contact"],
      elHeights: [],
      current: -1,
    };
  },
  computed: {
    minimizedScreen() {
      return this.$mq === "md" || this.$mq === "sm";
    },
  },
  mounted() {
    this.getElements();
    this.getRegion();

    var self = this;
    addEventListener("scroll", () => self.getRegion());
  },
  methods: {
    getElements() {
      for (let i = 0; i < this.regions.length; i++) {
        this.elHeights.push(
          document.getElementById(this.regions[i]).clientHeight
        );
      }
    },
    getRegion() {
      if (!this.minimizedScreen) {
        var height = this.elHeights[0];
        var index = 0;

        while (
          document.documentElement.scrollTop >=
          height - this.$refs.header.clientHeight / 2
        ) {
          index += 1;
          height += this.elHeights[index];
        }

        if (this.current != index) {
          this.current = index;
          for (let i = 0; i < this.regions.length; i++) {
            this.$refs[this.regions[i]].style.fontWeight = 300;
          }
          this.$refs[this.regions[index]].style.fontWeight = 700;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #303030;
  position: fixed;
  width: 100%;
  z-index: 10;

  .container {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 10px auto;
    flex-direction: column;

    .menu {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .logo {
    font-size: 1.5em;
    font-weight: 700;
    color: white;
  }

  .nav-container {
    background-color: #303030;
    width: 100%;

    .nav {
      display: flex;
      flex-direction: column;

      .nav-link {
        text-decoration: none;
        color: white;
        padding: 10px 0;
        font-size: 1.2em;
      }
    }
  }
}
@media screen and (max-width: 850px) {
  .expand {
    animation: slideDown 0.5s linear;
    overflow: hidden;
  }

  .expand-leave-active.expand-leave-to {
    transition: height 0.5s ease;
    height: 0;
  }

  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: 200px;
    }
  }
}

@media screen and (min-width: 850px) {
  .header {
    background-color: transparent;

    .container {
      margin: 0 10%;
      width: 80%;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;

      .menu {
        width: 100%;

        svg {
          display: none;
        }
      }
    }

    .logo-container {
      margin: 30px 0;
      background-color: #303030;
      padding: 20px;

      .logo {
        font-size: 2.1em;
      }
    }

    .span {
      flex-grow: 1;
    }

    .nav-container {
      background-color: #303030;
      padding: 20px;
      width: 350px;

      .nav {
        color: white;
        justify-content: space-between;
        flex-direction: row;

        p {
          padding: 5px;
        }

        .nav-break {
          font-size: 1.2em;
          font-weight: 700;
        }

        .nav-link {
          padding: 5px;
        }
      }
    }
  }
}

.override-header {
  background-color: #303030 !important;
  .menu {
    .icon {
      fill: white !important;
    }

    .logo-container {
      .logo {
        color: white !important;
      }
    }
  }
}
</style>

