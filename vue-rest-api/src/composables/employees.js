import {ref}from "vue";
import axios from "axios";
import { useRouter} from "vue-router";


axios.defaults.baseURL="http://localhost:8000/ api/V1/";
export default function useEmployees(){

    const employees=ref([]);
    const employee=ref([]);
    const errors=ref({});
    const router=useRouter();

    const getEmployees = async()=>{
        const response = await axios.get("employees");
        employees.value = response.data.data;
    };

    const getEmployee =async (id) => {
       const response= await axios.get("employees/" +id );
       company.value=response.data.data;
    };

    const storeEmployee =async (data) => {
        try {
            await axios.post("employees", data);
            await router.push({name:"EmployeeIndex"});
        } catch (error){
            if(error.response.status === 422){
                errors.value= error.response.data.errors;
            }
        }
    };

    const updateEmployee = async (id) =>{
        try {
            await axios.put("employees/"+ id,company.value);
            await router.push({name:"EmployeeIndex"});
        }catch (error){
            if(error.response.status ===422){
                errors.value=error.response.data.errors; 
            }
        }
    };

    const destoryEmployee =async (id)=>{
        if(!window.confirm("Are you Sure?")){
            return;
        }
        await axios.delete("employees/" + id);
        await getEmployees();
    }
    return {
        employee,
        employees,
        getEmployees,
        getEmployee,
        storeEmployee,
        updateEmployee,
        destoryEmployee,
        errors,
    };
}