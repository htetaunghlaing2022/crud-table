<script setup>
    import {reactive} from 'vue';
    import useCompanies from '../../composables/companies';

    const {storeCompany, errors }=useCompanies();
    const form=reactive({
        Name:"",
        email:"",
        logo:"",
        website:""
    })
</script>

<script setup>
</script>

<template>
    <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeCompany(from)">
            <div class="space-y-6">
                <div class="mb-6">
    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Name</label>
    <input type="text" id="Name" v-model="form.Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.Name">
    <span class="text-sm text-red-400">{{ errors.Name[0] }}</span></div>
            </div>
                <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Email</label>
    <input type="text" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.email">
    <span class="text-sm text-red-400">{{ errors.email[0] }}</span></div>
            </div>
            <div class="mb-6">
    <label for="logo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
    <input type="text" id="logo" v-model="form.logo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-b lue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.logo">
    <span class="text-sm text-red-400">{{ errors.logo[0] }}</span></div>
            </div>
            <div class="mb-6">
    <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
    <input type="text" id="website" v-model="form.website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.we">
    <span class="text-sm text-red-400">{{ errors.we[0] }}</span></div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800">Store</button>
            </div>
            </div> 
        </form>
    </div>
</template>