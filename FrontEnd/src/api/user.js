import {BASE_API} from "../utils/constants";

export async function loginApi(formValue){
    try {
        const url = `${BASE_API}/`//Aqui va la ruta que se usa para el login
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(formValue),
        };

        const response = await fetch(url,params);

        if(response.status !== 200){
            throw new Error("Usuario o contraseña incorrectos")
        }

        const result = await response.json();
        return result;

    } catch (error) {
        throw error
    }
}