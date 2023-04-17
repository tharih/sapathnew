import { client } from "../client";


const query =`
*[_type == "photography"]`;
 

export const fetchImage = async() => {
    const image = await client.fetch(query);
    return image
    
}

