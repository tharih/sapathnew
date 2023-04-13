import { client } from "../client";


const query =`
*[_type == "category"]`;
 

export const fetchCategory = async() => {
    const category = await client.fetch(query);
    return category
    
}

