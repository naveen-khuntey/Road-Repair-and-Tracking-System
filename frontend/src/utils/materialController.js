import axios from "axios";

const baseurl = process.env.machine_url || "http://localhost:8000/resource/material";

const getAllMaterial = (setLabours) => {
    axios.get(baseurl)
    .then(({data})=>{
        console.log(data);
        setLabours(data);
    })
    .catch((err)=>console.log(err));
}

export {
    getAllMaterial,
}