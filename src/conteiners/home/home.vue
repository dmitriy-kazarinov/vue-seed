<style src="./home.css"></style>
<script src="./home.js"></script>
<template>
  <div>
    <welcome :custom-text="text"></welcome>
    <div>
      <button type="button" name="button" @click="messageHome">Page alert</button>
      <button type="button" name="button" @click="show = !show">Page info</button>
    </div>
    <transition name="fade">
      <p v-if="show">{{customMessage}}</p>
    </transition>
  </div>
</template>
