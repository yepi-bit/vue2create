<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/rightAnimation">RightAnimation</router-link> |
      <router-link to="/openData2">openData2</router-link> |
      <router-link to="/openData3">openData3</router-link> |
      <router-link to="/leftRight">leftRight</router-link> |
      <router-link to="/leftRight2">leftRight2</router-link> |
      <router-link to="/hoverData">hoverData</router-link> |
      <router-link to="/selectData">selectData</router-link> |
      <router-link to="/buyCount">buyCount</router-link> |
      <router-link to="/optionValue">optionValue</router-link> |
      <router-link to="/uploadImg">uploadImg</router-link> |
      <router-link to="/cityName">cityName</router-link> |
      <router-link to="/vertical">vertical</router-link> |
      <router-link to="/vertical2">vertical2</router-link> |
      <router-link to="/vertical3">vertical3</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
