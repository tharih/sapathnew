import { client } from "../client";


const query =`
*[_type == "category"] | order(title asc)`;
 

export const fetchCategory = async() => {
    const category = await client.fetch(query);
    return category
    
}

