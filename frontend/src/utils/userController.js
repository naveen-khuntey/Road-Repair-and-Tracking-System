import axios from "axios";

const baseurl = process.env.machine_url || "http://localhost:8000";

const getUser = (setUser) => {
    axios.get(`${baseurl}/user`)
    .then(({data})=>{
        // console.log(data);
        setUser(data);
    })
    .catch((err)=>console.log(err));
}

export {
 getUser
}