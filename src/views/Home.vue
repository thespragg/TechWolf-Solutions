<template>
  <div class="container">
    <Header />
    <div id="home">
      <div class="bg-logo-container">
        <img class="half-logo" src="@/assets/half-logo.png" />
      </div>
      <div class="top-triangle-container">
        <div class="triangle"></div>
        <div class="triangle-2"></div>
      </div>
      <div class="bottom-triangle-container">
        <div class="triangle-3"></div>
        <div class="triangle-4"></div>
      </div>
      <span class="space"></span>
      <div class="tagline">
        I'm Alistair Spragg, a 27 year old IT consultant from Scotland. I also
        make stuff, with <span class="blue">code</span>.
      </div>
      <a href="#about" class="see-more-container">
        <p>learn more</p>
        <svg
          class="learn-more-icon"
          width="35"
          height="35"
          viewBox="0 0 56 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.06066"
            y1="1.9394"
            x2="29.0607"
            y2="29.9394"
            stroke="#75EAFF"
            stroke-width="3"
          />
          <line
            x1="26.9393"
            y1="29.9394"
            x2="54.9393"
            y2="1.9394"
            stroke="#75EAFF"
            stroke-width="3"
          />
          <line
            x1="1.06066"
            y1="17.4949"
            x2="29.0607"
            y2="45.4949"
            stroke="#75EAFF"
            stroke-width="3"
          />
          <line
            x1="26.9393"
            y1="45.4949"
            x2="54.9393"
            y2="17.4949"
            stroke="#75EAFF"
            stroke-width="3"
          />
        </svg>
      </a>
    </div>
    <div id="about">
      <div class="about-top">
        <div class="headshot-container">
          <img class="headshot-img" src="@/assets/headshot.jpg" />
        </div>
      </div>
      <div class="about-bottom"></div>
    </div>
    <div id="blog"></div>
    <div id="more"></div>
    <div id="contact"></div>
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
      mobileNav: {},
    };
  },
  mounted() {
    this.setData();
    this.changeColours();
    var self = this;
    addEventListener("scroll", () => self.changeColours());
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
      this.icon = document.querySelector(".icon");
    },
    changeColours() {
      if (!this.minimizedScreen) {
        this.changeBgColour(this.logoBackground);
        this.changeBgColour(this.navBackground);
      } else {
        this.changeBgColour(this.header);
      }
      if (this.isPastHome()) {
        this.changeTextColour("rgb(48, 48, 48)");
        this.icon.style.fill = "rgb(48,48,48)";
      } else {
        this.changeTextColour("white");
        this.icon.style.fill = "white";
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
        document.documentElement.scrollTop >=
          this.homeHeight -
            this.header.clientHeight / 2 -
            el.clientHeight / 2 &&
        document.documentElement.scrollTop <=
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
  height: -webkit-fill-available;
  width: 100vw;
  padding: 20px 0;
  box-sizing: border-box;
  background-color: #303030;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .bg-logo-container {
    position: absolute;
    left: 0;
    height: 100vh;
    display: flex;
    align-items: center;

    .half-logo {
      opacity: 0.15;
    }
  }

  .see-more-container {
    padding: 5px;
    background-color: #303030;
    color: white;
    z-index: 2;
    text-decoration: none;

    p {
      margin-bottom: 10px;
      animation: bounce 3s ease-in-out infinite;
    }

    svg{
      animation: bounce 3s ease-in-out infinite;
    }
  }

  .top-triangle-container {
    position: absolute;
  }

  .bottom-triangle-container {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(-25deg) translateX(5%) translateY(90%);
    display: flex;
    align-items: center;

    .triangle-3 {
      width: 0;
      height: 0;
      z-index: 6;
      transform: translateX(90%);
      border-left: 170px solid transparent;
      border-right: 170px solid transparent;
      border-bottom: 170px solid #75eaff;
    }

    .triangle-4 {
      width: 0;
      height: 0;
      z-index: 5;
      transform: translateY(10%);
      border-left: 170px solid transparent;
      border-right: 170px solid transparent;
      border-bottom: 170px solid #417d88;
    }
  }

  .tagline {
    color: white;
    font-size: 2em;
    width: 40%;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
  }
}

#about {
  min-height: 100vh;
  width: 100vw;
  background-color: white;

.headshot-container{
  width:250px;
  height:250px;
  z-index:2;

  .headshot-img{
    width: 100%;
    border-radius: 50%;
  }
}
}

#blog{
  min-height: 100vh;
  width: 100vw;
  background-color: white;
}

#more{
  min-height: 100vh;
  width: 100vw;
  background-color: white;
}

#contact{
  min-height: 30vh;
  width: 100vw;
  background-color: #75eaff;
}

@media screen and (min-width: 850px) {
  #home {
    .tagline {
      width: 50%;
    }

    .bg-logo-container {
      .half-logo {
        opacity: 1;
      }
    }

    .top-triangle-container {
      position: absolute;
      display: flex;
      align-items: center;
      top: 0;
      z-index:1;

      .triangle {
        width: 0;
        height: 0;
        transform: translateY(-50%);
        z-index: 11;
        border-top: 150px solid transparent;
        border-bottom: 150px solid transparent;
        border-right: 150px solid #75eaff;
      }

      .triangle-2 {
        width: 0;
        height: 0;
        transform: translateX(-90%) translateY(-50%);
        z-index: 10;
        border-top: 150px solid transparent;
        border-bottom: 150px solid transparent;
        border-right: 150px solid #417d88;
      }
    }
  }
}
</style>
