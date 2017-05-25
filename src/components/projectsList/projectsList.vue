<style src="./projectsList.css"></style>
<script src="./projectsList.js"></script>
<template>
  <div>
    <h2>Projects table</h2>
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
          :class="[project.completed ? 'completed' : 'uncompleted', 'project-row']"
          @click="goToProject(project.id)">
          <td>{{project.title}}</td>
          <td>{{project.completed ? 'Yes' : 'No'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
