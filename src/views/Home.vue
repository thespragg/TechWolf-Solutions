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
    <div id="blog">
      <div class="coming-soon">Blog coming soon.</div>
    </div>
    <div id="more">
      <div class="more-container">
        <div class="more-header">Public work and case studies</div>
        <div id="gallery">
          <div class="gallery-items">
            <figure class="gallery-item">
              <div class="hovereffect">
                <img class="gallery-img" src="@/assets/healthtool.png" />
                <div class="overlay">
                  <h2>Wherenow consulting business health tool</h2>
                  <p class="info">
                    Built using:<br />
                    <br />
                    C# <br />
                    Javascript (vue.js)<br />
                    Mongodb<br />

                    <br /><br />
                    This was a contracted piece of work for WhereNow Consulting.
                    The application takes an algorithmic approach to determining
                    the successes or shortcomings of a business based on the
                    collective answers of its management team.
                  </p>
                </div>
              </div>
            </figure>
            <figure class="gallery-item web">
              <div class="hovereffect">
                <img class="gallery-img" src="@/assets/boilerplate.png" />
                <div class="overlay">
                  <h2>Full stack boilerplate</h2>
                  <p class="info"></p>
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div style="margin-top: 50px" class="more-header">
          Who I've worked with
        </div>
        <ul id="hexGrid">
          <li class="hex">
            <div class="hexIn">
              <div class="hexLink" style="background-color: #303030"></div>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <div class="hexLink">
                <img src="@/assets/wherenow.png" alt="" />
              </div>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <div class="hexLink" style="background-color: #aaaaaa"></div>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <div class="hexLink" style="background-color: #303030"></div>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <div class="hexLink">
                <img style="height: 50%" src="@/assets/inside-out.png" alt="" />
              </div>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <div class="hexLink" style="background-color: #aaaaaa"></div>
            </div>
          </li>
          <li class="hex">
            <div class="hexIn">
              <div class="hexLink">
                <img style="height: 40%" src="@/assets/2ndhnd.png" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div id="contact">
      <div class="footer"></div>
    </div>
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
  min-height: 100vh;
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
  display: flex;
  align-items: center;
  justify-content: center;

  .coming-soon {
    margin-top: 10px;
    width: 80%;
    height: 80vh;
    background-color: rgb(192, 192, 192);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: #303030;
  }
}

#more {
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:100px;

  .more-container {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .more-header {
      font-weight: 700;
      align-self: flex-start;
      font-size: 1.4em;
      color:#303030;
    }

    #gallery {
      width: 100%;
      display: flex;
      flex-direction: column;

      .gallery-img {
        max-width: 100%;
        display: block;
        grid-row: 1 / -1;
        grid-column: 1;
      }

      .gallery-item {
        margin: 0;
        display: grid;
        grid-template-rows: 1fr auto;
        margin-bottom: 10px !important;
        break-inside: avoid;

        .hovereffect:hover img {
          -webkit-filter: grayscale(100%) blur(3px);
          filter: grayscale(100%) blur(3px);
        }

        .hovereffect:hover .overlay {
          opacity: 1;
          filter: alpha(opacity=100);
          -webkit-transition-delay: 0s;
          transition-delay: 0s;
          -webkit-transform: translate(0px, 0px);
          -ms-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
        }

        .hovereffect:hover h2 {
          -webkit-transform: translateY(0px);
          -ms-transform: translateY(0px);
          transform: translateY(0px);
          -webkit-transition-delay: 0.5s;
          transition-delay: 0.5s;
        }

        .hovereffect:hover a.info {
          -webkit-transform: translateY(0px);
          -ms-transform: translateY(0px);
          transform: translateY(0px);
          -webkit-transition-delay: 0.3s;
          transition-delay: 0.3s;
        }

        .hovereffect {
          width: 100%;
          height: 100%;
          float: left;
          overflow: hidden;
          position: relative;
          text-align: center;
          cursor: default;

          .overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            overflow: hidden;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.6);
            opacity: 0;
            filter: alpha(opacity=0);
            opacity: 0;
            transition: opacity 1s;
            -webkit-transition: opacity 1s;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          img {
            display: block;
            position: relative;
            -webkit-transition: all 0.2s ease-in;
            transition: all 0.2s ease-in;
            -webkit-filter: grayscale(0) blur(0);
            filter: grayscale(0) blur(0);
            -webkit-transition: 0.3s ease-in-out;
            transition: 0.3s ease-in-out;
          }

          h2 {
            text-transform: uppercase;
            color: #fff;
            text-align: center;
            position: relative;
            font-size: 17px;
            padding: 10px;
            background: rgba(0, 0, 0, 0.6);
          }

          p.info {
            display: inline-block;
            text-decoration: none;
            text-align: justify;
            padding: 7px 14px;
            color: #fff;
            background-color: transparent;
          }
        }
      }

      .gallery-item a {
        color: black;
        text-decoration: none;
      }

      .gallery-items {
        column-count: 4;
        column-gap: 10px;
        margin-top: 50px;
      }

      @media only screen and (max-width: 1500px) {
        .gallery-items {
          column-count: 3;
        }
      }

      @media only screen and (max-width: 1200px) {
        .gallery-items {
          column-count: 2;
        }
      }

      @media only screen and (max-width: 750px) {
        .gallery-items {
          column-count: 2;
        }

        .hovereffect {
          display: flex;
          justify-content: center;
        }
      }
    }

    #hexGrid {
      display: flex;
      flex-wrap: wrap;
      width: 60%;
      margin: 0 auto;
      overflow: hidden;
      font-family: "Raleway", sans-serif;
      font-size: 15px;
      list-style-type: none;
      margin-top: 50px;
    }

    .hex {
      position: relative;
      visibility: hidden;
      outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
    }

    .hex::after {
      content: "";
      display: block;
      padding-bottom: 86.602%; /* =  100 / tan(60) * 1.5 */
    }

    .hexIn {
      position: absolute;
      width: 96%;
      padding-bottom: 110.851%; /* =  width / sin(60) */
      margin: 0 2%;
      overflow: hidden;
      visibility: hidden;
      outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
      -webkit-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
      -ms-transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
      transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
    }

    .hexIn * {
      position: absolute;
      visibility: visible;
      outline: 1px solid transparent; /* fix for jagged edges in FF on hover transition */
    }
    .hexLink {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-align: center;
      color: #fff;
      overflow: hidden;
      -webkit-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
      -ms-transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
      transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
    }

    /*** HEX CONTENT **********************************************************************/
    .hex img {
      left: -100%;
      right: -100%;
      width: auto;
      height: 100%;
      margin: 0 auto;
      -webkit-transform: rotate3d(0, 0, 0, 0deg);
      -ms-transform: rotate3d(0, 0, 0, 0deg);
      transform: rotate3d(0, 0, 0, 0deg);
    }

    .hex h1,
    .hex p {
      width: 100%;
      padding: 5%;
      box-sizing: border-box;
      background-color: rgba(0, 128, 128, 0.8);
      font-weight: 300;
      -webkit-transition: -webkit-transform 0.2s ease-out, opacity 0.3s ease-out;
      transition: transform 0.2s ease-out, opacity 0.3s ease-out;
    }
    .hex h1 {
      bottom: 50%;
      padding-top: 50%;
      font-size: 1.5em;
      z-index: 1;
      -webkit-transform: translate3d(0, -100%, 0);
      -ms-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    .hex h1::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 45%;
      width: 10%;
      text-align: center;
      border-bottom: 1px solid #fff;
    }
    .hex p {
      top: 50%;
      padding-bottom: 50%;
      -webkit-transform: translate3d(0, 100%, 0);
      -ms-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    /*** HOVER EFFECT  **********************************************************************/
    .hexLink:hover h1,
    .hexLink:focus h1,
    .hexLink:hover p,
    .hexLink:focus p {
      -webkit-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    /*** HEXAGON SIZING AND EVEN ROW INDENTATION *****************************************************************/
    @media (min-width: 1201px) {
      /* <- 5-4  hexagons per row */
      #hexGrid {
        padding-bottom: 4.4%;
      }
      .hex {
        width: 20%; /* = 100 / 5 */
      }
      .hex:nth-child(9n + 6) {
        /* first hexagon of even rows */
        margin-left: 10%; /* = width of .hex / 2  to indent even rows */
      }
    }

    @media (max-width: 1200px) and (min-width: 901px) {
      /* <- 4-3  hexagons per row */
      #hexGrid {
        padding-bottom: 5.5%;
      }
      .hex {
        width: 25%; /* = 100 / 4 */
      }
      .hex:nth-child(7n + 5) {
        /* first hexagon of even rows */
        margin-left: 12.5%; /* = width of .hex / 2  to indent even rows */
      }
    }

    @media (max-width: 900px) and (min-width: 601px) {
      /* <- 3-2  hexagons per row */
      #hexGrid {
        padding-bottom: 7.4%;
      }
      .hex {
        width: 33.333%; /* = 100 / 3 */
      }
      .hex:nth-child(5n + 4) {
        /* first hexagon of even rows */
        margin-left: 16.666%; /* = width of .hex / 2  to indent even rows */
      }
    }

    @media (max-width: 600px) {
      /* <- 2-1  hexagons per row */
      #hexGrid {
        padding-bottom: 11.2%;
      }
      .hex {
        width: 50%; /* = 100 / 3 */
      }
      .hex:nth-child(3n + 3) {
        /* first hexagon of even rows */
        margin-left: 25%; /* = width of .hex / 2  to indent even rows */
      }
    }

    @media (max-width: 400px) {
      #hexGrid {
        font-size: 13px;
      }
    }
  }
}

#contact {
  min-height: 100vh;
  width: 100vw;
  position:relative;

  .footer{
    position:absolute;
    width:100%;
    bottom:0;
    height:50px;
    background-color: #75eaff;
  }
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
