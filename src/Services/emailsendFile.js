import { customAxios } from "./helper";

export  async function sendEmailfile(emailData){
     
    try {
        const response = await customAxios.post('/email/send-with-file', emailData);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }

}