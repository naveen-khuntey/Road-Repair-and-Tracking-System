const model = require("./model");

const find1 = async() => {
    const labour = await model.find();
    return labour;
}
const find = async(appID) => {
    const labour = await model.findById(appID);
    return labour;
}
 
const create = async (labour) => {
    const {type, name, expertise, phone,accountno} = labour;
 
    const newLabour = await model.create({
        type,
        name,
        expertise,
        phone,
        accountno,
    });

    return newLabour;
}

module.exports = {
    create,
    find,
    find1
}