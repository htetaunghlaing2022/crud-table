<script setup>
    import {reactive} from 'vue';
    import useEmployees from '../../composables/employees';

    const {storeEmployee, errors }=useEmployees();
    const form=reactive({
        Fullname:"",
        CompanyID:"",
        email:"",
        phone:""
    })
</script>

<template>
     <div class="mt-12">
        <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" @submit.prevent="storeEmployee(from)">
            <div class="space-y-6">
                <div class="mb-6">
    <label for="Fullname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Fullname</label>
    <input type="text" id="Name" v-model="form.Fullname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.Fullname">
    <span class="text-sm text-red-400">{{ errors.Fullname[0] }}</span></div>
            </div>
                <div class="mb-6">
    <label for="CompanyID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >CompanyID</label>
    <input type="text" id="CompanyID" v-model="form.CompanyID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.ComopanyID">
    <span class="text-sm text-red-400">{{ errors.ComopanyID[0] }}</span></div>
            </div>
            <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="text" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-b lue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.email">
    <span class="text-sm text-red-400">{{ errors.email[0] }}</span></div>
            </div>
            <div class="mb-6">
    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input type="text" id="phone" v-model="form.phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.phone">
    <span class="text-sm text-red-400">{{ errors.we[0] }}</span></div>
            </div>
            <div class="mt-4">
                <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-800">Store</button>
            </div>
            </div> 
        </form>
    </div>
</template>