import {ref}from "vue";
import axios from "axios";
import { useRouter} from "vue-router";


axios.defaults.baseURL="http://localhost:8000/ api/V1/";
export default function useCompanies(){

    const companies=ref([]);
    const company=ref([]);
    const errors=ref({});
    const router=useRouter();

    const getCompanies = async()=>{
        const response = await axios.get("companies");
        companies.value = response.data.data;
    };

    const getCompany =async (id) => {
       const response= await axios.get("companies/" +id );
       company.value=response.data.data;
    };

    const stroeCompany =async (data) => {
        try {
            await axios.post("companies", data);
            await router.push({name:"CompanyIndex"});
        } catch (error){
            if(error.response.status === 422){
                errors.value= error.response.data.errors;
            }
        }
    };

    const updateCompany = async (id) =>{
        try {
            await axios.put("companies/"+ id,company.value);
            await router.push({name:"CompanyIndex"});
        }catch (error){
            if(error.response.status ===422){
                errors.value=error.response.data.errors; 
            }
        }
    };

    const destoryCompany =async (id)=>{
        if(!window.confirm("Are you Sure?")){
            return;
        }
        await axios.delete("companies/" + id);
        await getCompanies();
    }
    return {
        company,
        companies,
        getCompanies,
        getCompany,
        stroeCompany,
        updateCompany,
        destoryCompany,
        errors,
    };
}