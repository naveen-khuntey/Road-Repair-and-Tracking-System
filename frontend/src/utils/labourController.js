import axios from "axios";

const baseurl = process.env.machine_url || "http://localhost:8000/resource/labour";

const getAllDetails = (setLabours) => {
    axios.get(baseurl)
    .then(({data})=>{
        console.log(data);
        setLabours(data);
    })
    .catch((err)=>console.log(err));
}
const deleteLabour = (appId,setLabours) => {
    axios.delete(`${baseurl}/${appId}`)
    .then(({data})=>{
        console.log(data);
        setLabours(data);
    })
    .catch((err)=>console.log(err));
}
const updateLabour = (appId,data,setLabours) => {
    axios.patch(`${baseurl}/${appId}`,data)
    .then(({data1})=>{
        console.log(data1);
        setLabours(data1);
    })
    .catch((err)=>console.log(err));
}
export {
    getAllDetails,
    deleteLabour,
    updateLabour
}