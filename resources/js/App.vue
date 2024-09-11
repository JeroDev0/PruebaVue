<template>
    <div>
      <nav>
        <router-link to="/">Planes</router-link> | 
        <router-link to="/contador">Contador</router-link>
      </nav>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  