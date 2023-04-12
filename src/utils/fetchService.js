import { client } from "../client";


const query =`
*[_type == "service"]`;
 

export const fetchService = async() => {
    const service = await client.fetch(query);
    return service
    
}

