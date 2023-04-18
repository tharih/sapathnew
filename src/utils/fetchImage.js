import { client } from "../client";


const query =`
*[_type == "photography"][0...8] | order(_createdAt asc)`;
 

export const fetchImage = async() => {
    const images = await client.fetch(query);
    return images
    
}

