import React from "react";
import { customAxios } from "./helper";

export  async function sendEmail(emailData){
     
    try {
        const response = await customAxios.post('/email/send', emailData);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }

}

