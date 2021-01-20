<template>
  <div class="container">
    <Header />
    <div id="home"></div>
    <div id="about"></div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      homeHeight: 0,
      headerHeight: 0,
      navLinks: [],
      logo: {},
      logoBackground: {},
      navBackground: {},
      mobileNav: {}
    };
  },
  mounted() {
    this.setData();
    this.changeColours();
    var self = this;
    addEventListener("scroll", function () {
      self.changeColours();
    });
  },
  computed: {
    minimizedScreen() {
      return this.$mq === "md" || this.$mq === "sm";
    },
  },
  methods: {
    setData() {
      this.homeHeight = document.querySelector("#home").clientHeight;
      this.header = document.querySelector(".header");
      this.navLinks = document.querySelectorAll(".nav-link");
      this.logo = document.querySelector(".logo");
      this.logoBackground = document.querySelector(".logo-container");
      this.navBackground = document.querySelector(".nav-container");
    },
    changeColours() {
      if (!this.minimizedScreen) {
        this.changeBgColour(this.logoBackground);
        this.changeBgColour(this.navBackground);
        if (this.isPastHome()) {
          this.changeTextColour("rgb(48, 48, 48)");
        } else {
          this.changeTextColour("white");
        }
      }
    },
    isPastHome() {
      return (
        document.documentElement.scrollTop >
        this.homeHeight - this.header.clientHeight / 2
      );
    },
    checkIfFullyPastHome(el) {
      return (
        document.documentElement.scrollTop >
        this.homeHeight - this.header.clientHeight / 2 + el.clientHeight / 2
      );
    },
    shouldChangeBgColour(el) {
      return (
        document.documentElement.scrollTop >
          this.homeHeight - this.header.clientHeight / 2 - el.clientHeight / 2 &&
        document.documentElement.scrollTop <
          this.homeHeight - this.header.clientHeight / 2 + el.clientHeight / 2
      );
    },
    changeBgColour(el) {
      if (this.shouldChangeBgColour(el)) {
        el.style.backgroundColor = "transparent";
      } else if (this.checkIfFullyPastHome(el)) {
        el.style.backgroundColor = "white";
      } else {
        el.style.backgroundColor = "rgb(48,48,48)";
      }
    },
    changeTextColour(color) {
      this.logo.style.color = color;
      for (let i = 0; i < this.navLinks.length; i++) {
        this.navLinks[i].style.color = color;
      }
    },
  },
};
</script>

<style lang="scss">
#home {
  height: 100vh;
  width: 100vw;
  background-color: #303030;
  position: relative;
}

#about {
  height: 100vh;
  width: 100vw;
  background-color: white;
}
</style>
