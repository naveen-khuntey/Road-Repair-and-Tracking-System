import axios from "axios";

const baseurl = process.env.machine_url || "http://localhost:8000";

const getAllComplaint = (setComplaint) => {
    axios.get(`${baseurl}/complaint`)
    .then(({data})=>{
        console.log(data);
        setComplaint(data);
    })
    .catch((err)=>console.log(err));
}
const addComplaint = (data,setData,setComplaint) => {
    // console.log("machine.js",data);
    axios.post(`${baseurl}/complaint`,data,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((ele)=>{
        console.log(ele);
        setData("")
        getAllComplaint(setComplaint)
        return true;
    })
    .catch((err)=> {console.log(err);return false})
}

const deleteComplaint = (id,setComplaint) =>{
    axios.delete(`${baseurl}/complaint/${id}`)
    .then(() => {
        getAllComplaint(setComplaint);
    })
    .catch((err) => console.log(err));
}

export {
    getAllComplaint,
    addComplaint,
    deleteComplaint
}