<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav>
        <RouterLink class="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/">Home</RouterLink>
        <RouterLink class="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/companies">Companies</RouterLink>
        <RouterLink class="px-4 py-2 bg-indigo-600 hover:bg-indigo-800 rounded text-white" to="/employees">Employees</RouterLink>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView/>
  </main>
</template>

