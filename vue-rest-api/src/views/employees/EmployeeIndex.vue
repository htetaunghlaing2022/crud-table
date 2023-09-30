<script setup>
import useEmployees from "../../composables/employees";
import { onMounted } from "vue";

const {employees, getEmployees, destoryEmployee}= useEmployees();

onMounted(()=> getEmployees());
</script>
 
<template>
   <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink  :to="{name:'EmployeeCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">New Employee</RouterLink>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Fullname
                        </th>
                        <th scope="col" class="px-6 py-3">
                            CompanyID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="employee in employees" :key="employee.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">               
                        <td class="px-6 py-4">
                            {{ employee.Fullname }}
                        </td>
                        <td class="px-6 py-4">
                            {{ employee.CompanyID }}
                        </td>
                        <td class="px-6 py-4">
                            {{ employee.email }}
                        </td>
                        <td class="px-6 py-4">
                            {{ employee.phone }}
                        </td>
                        <td class="px-6 py-4 space-x-2">
                            <RouterLink :to="{name: 'EmployeeEdit',params: {id:employee.id}}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Edit</RouterLink>
                            <button @click="destoryEmployee" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
            </div>
</template>