<style src="./home.css"></style>
<script src="./home.js"></script>
<template>
  <div>
    <welcome :custom-text="text"></welcome>
    <div>
      <p>Test routing links</p>
      <router-link
        :to="{name: 'about'}">
        Go to about page
      </router-link>
      <router-link
        :to="{name: 'projects'}">
        Go to projects page
      </router-link>
    </div>
    <div>
      <p>Test behavior</p>
      <button type="button" name="button" @click="messageHome">Page alert</button>
      <button type="button" name="button" @click="show = !show">Page info</button>
    </div>
    <transition name="fade">
      <p v-if="show">{{customMessage}}</p>
    </transition>
  </div>
</template>
