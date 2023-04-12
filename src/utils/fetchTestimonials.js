import { client } from "../client";


const query =`
*[_type == "testimonials"]`;
 

export const fetchTestimonials = async() => {
    const testimonials = await client.fetch(query);
    return testimonials
    
}

