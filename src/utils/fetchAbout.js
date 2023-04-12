import { client } from "../client";


const query =`
*[_type == "about"]`;
 

export const fetchAbout = async() => {
    const about = await client.fetch(query);
    return about
    
}

