<script setup>
import useCompanies from '../../composables/companies';
import { onMounted } from 'vue';

const {company, getCompany, updateCompany, errors}=useCompanies();

const props = defineProps({
    id:{
        required: true,
        type: String
    }
})

onMounted(()=> getCompany(props.id))
</script>

<template>
     <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="updateCompany($route.params.id)">
            <div class="space-y-6">
                <div class="mb-6">
    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Email</label>
    <input type="text" id="Name" v-model="company.Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.Name">
    <span class="text-sm text-red-400">{{ errors.Name[0] }}</span></div>
            </div>
                <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Email</label>
    <input type="text" id="email" v-model="company.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.email">
    <span class="text-sm text-red-400">{{ errors.email[0] }}</span></div>
            </div>
            <div class="mb-6">
    <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
    <input type="image" id="logo" v-model="company.logo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-b lue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.logo">
    <span class="text-sm text-red-400">{{ errors.logo[0] }}</span></div>
            </div>
            <div class="mb-6">
    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
    <input type="text" id="website" v-model="company.website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.website">
    <span class="text-sm text-red-400">{{ errors.website[0] }}</span></div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800">Update</button>
            </div>
            </div> 
        </form>
    </div>
</template>