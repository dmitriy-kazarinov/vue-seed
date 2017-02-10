<style src="./about.css"></style>
<script src="./about.js"></script>
<template>
  <div>
    <!-- testing init component -->
    <component is="welcome" :custom-text="text"></component>
    {{count}}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
