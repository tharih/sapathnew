import { client } from "../client";


const query =`
*[_type == "project"]{
    ...,
    category->{title}
}`;
 

export const fetchProject = async() => {
    const project = await client.fetch(query);
    return project
    
}

