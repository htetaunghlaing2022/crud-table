<script setup>
import useCompanies from "../../composables/companies";
import { onMounted } from "vue";

const {companies, getCompanies, destoryCompany}= useCompanies();

onMounted(()=> getCompanies());
</script>
 
<template>
   <div class="mt-12">
        <div class="flex justify-end m-2 p-2">
            <RouterLink  :to="{name:'CompanyCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">New Company</RouterLink>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            logo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Website
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="company in companies" :key="company.id"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">               
                        <td class="px-6 py-4">
                            {{ company.Name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ company.email }}
                        </td>
                        <td class="px-6 py-4">
                            {{ company.logo }}
                        </td>
                        <td class="px-6 py-4">
                            {{ company.website }}
                        </td>
                        <td class="px-6 py-4 space-x-2">
                            <RouterLink :to="{name: 'CompanyEdit',params: {id:company.id}}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Edit</RouterLink>
                            <button @click="destoryCompany" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
            </div>
</template>