import { client } from "../client";


const query =`
*[_type == "photo"][0...8] | order(_createdAt asc)`;
 

export const fetchImage = async() => {
    const images = await client.fetch(query);
    return images
    
}

