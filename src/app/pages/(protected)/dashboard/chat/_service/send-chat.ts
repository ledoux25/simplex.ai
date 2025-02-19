import { loginUser } from "@/app/pages/auth/[loginSignup]/_service/login";
import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";

export default async function sendChat(prompt : string, name:string) : Promise<{
    data? : {user:string, assistant:string}[],
    error? : string,

}> {
        

    try {
        const reponse = await apiClient.post(`manage_chatbot/chat/${name}`,{"prompt" : prompt},
            
        )
        
        
        return {
            data : reponse.data.conversation,
        }

    } catch (error) {
        if(error instanceof AxiosError){
            return {
                error : "error.response?.data"
            }
        }
    }

    return {
        error:"Unexpected Error Caught"
    }
}