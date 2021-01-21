<template>
  <router-view/>
</template>

<style lang="scss">
html{
  scroll-behavior: smooth;
  height: -webkit-fill-available;
}

body{
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x:hidden;

}

.blue{
  color: #77EAFF !important;
}
</style>
