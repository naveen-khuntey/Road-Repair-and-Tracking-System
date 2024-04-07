const model = require("./model");

const find1 = async() => {
    const complaints = await model.find();
    return complaints;
}
const find = async(appID) => {
    const complaint = await model.findById(appID);
    return complaint;
}

const create = async (complaint) => {
    const {location, type, comment,email} = complaint; 
    const newComplaint = await model.create({
        location,
        type,
        comment,
        email
    });

    return newComplaint;
}

module.exports = {
    create,
    find,
    find1
}