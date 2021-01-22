<template>
  <div class="container">
    <Header />
    <div id="home">
      <div class="bg-logo-container">
        <img class="half-logo" src="@/assets/half-logo.png" />
      </div>
      <div class="top-triangle-container">
        <div class="triangle-light"></div>
        <div class="triangle-dark"></div>
      </div>
      <div class="bottom-triangle-container">
        <div class="triangle-light"></div>
        <div class="triangle-dark"></div>
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
      <div class="about-container">
        <div class="about-top">
          <div class="headshot-container">
            <img class="headshot-img" src="@/assets/headshot.jpg" />
          </div>
          <div class="about-header">
            <p class="about-text-top">
              I'm a full stack developer with an affinity for problem solving
              and building anything from simple web pages, to complex business
              applications.
            </p>
            <hr style="width: 80%" />
            <p class="about-text-bottom">
              I pride myself on providing an outstanding customer experience,
              with a focus on providing a stress free and painless service to
              create whatever you or your business needs.
            </p>
          </div>
        </div>
        <div class="about-bottom">
          <div class="feature-item">
            <font-awesome-icon
              class="feature-icon"
              :icon="['far', 'lightbulb']"
            />
            <p>
              Identifying and solving bottlenecks in your pipeline is vital but
              hard to do effectively. My experience in a variety of different
              software ecosystems gives me the insight to identify issues at
              their source and come up with innovative solutions.
            </p>
          </div>
          <div class="feature-item">
            <font-awesome-icon
              class="feature-icon"
              :icon="['fas', 'user-tie']"
            />
            <p>
              Tailored solutions for any size of business, from internal
              Infrastructure advice to building bespoke software solutions,
              whatever your company needs, I can provide.
            </p>
          </div>
          <div class="feature-item">
            <font-awesome-icon
              class="feature-icon"
              :icon="['far', 'chart-bar']"
            />
            <p>
              Making your IT systems work for you is the first step to
              increasing both productivity and profits. Any pain point can hurt
              your business growth and stop future scaling, whether this is a
              misconfiguration of existing software, or the requirement for more
              bespoke solutions.
            </p>
          </div>
        </div>
      </div>
      <div class="about-triangle-container">
        <div class="triangle-light"></div>
        <div class="triangle-dark"></div>
      </div>
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

    svg {
      animation: bounce 3s ease-in-out infinite;
    }
  }

  .top-triangle-container {
    position: absolute;
    transform: rotate(-90deg) translatex(-5%) translateY(-20%);
    display: flex;
    align-items: center;
    top: 0;
    z-index: 1;
  }

  .bottom-triangle-container {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(-25deg) translateX(5%) translateY(90%);
    display: flex;
    align-items: center;
    z-index: 2;
  }

  .tagline {
    color: white;
    font-size: 2em;
    width: 40%;
  }
}

.triangle-light {
  width: 0;
  height: 0;
  z-index: 1;
  transform: translateX(90%);
  border-left: 170px solid transparent;
  border-right: 170px solid transparent;
  border-bottom: 170px solid #75eaff;
}

.triangle-dark {
  width: 0;
  height: 0;
  z-index: 0;
  transform: translateY(10%);
  border-left: 170px solid transparent;
  border-right: 170px solid transparent;
  border-bottom: 170px solid #417d88;
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
  padding-top: 100px;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: white;
  position: relative;

  .about-triangle-container {
    position: absolute;
    bottom: 0;
    transform: translateX(-72%) rotate(17deg);
    display: flex;
    align-items: center;
    z-index: 1;
  }

  .about-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    .about-top {
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      display: flex;
      width: 100%;
      margin-bottom: 12%;

      .about-header {
        width: 75%;

        .about-text-top {
          font-weight: bold;
        }
      }

      .headshot-container {
        width: 30%;
        z-index: 2;
        margin-bottom: 20px;

        .headshot-img {
          width: 100%;
          border-radius: 50%;
        }
      }
    }

    .about-bottom {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-wrap: wrap;
      position: relative;
      z-index: 3;

      .feature-item {
        display: flex;
        flex-direction: column;
        width: 30%;
        min-width: 250px;
        align-items: center;
        margin: 20px 0;

        .feature-icon {
          font-size: 5em;
          color: #303030;
          margin-bottom: 20px;
        }
      }
    }
  }
}

#blog {
  min-height: 100vh;
  width: 100vw;
  background-color: white;
}

#more {
  min-height: 100vh;
  width: 100vw;
  background-color: white;
}

#contact {
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
  }

  #about {
    padding-top: 200px;

    .about-container {
      .about-top {
        flex-direction: row;

        .about-text-top {
          font-size: 1.5em;
          margin-bottom: 30px;
        }

        .about-text-bottom {
          margin-top: 30px;
          font-size: 1.3em;
        }

        .headshot-container {
          width: 20%;
          min-width: 200px;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
