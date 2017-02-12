<style src="./projectsList.css"></style>
<script src="./projectsList.js"></script>
<template>
  <table class="table">
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="project in projects"
        :class="{'completed': project.completed}">
        <td>{{project.title}}</td>
        <td>{{project.completed ? 'Yes' : 'No'}}</td>
      </tr>
    </tbody>
  </table>
</template>
