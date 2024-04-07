const model = require("./model");

const find1 = async() => {
    const Material = await model.find();
    return Material;
}
const find = async(appID) => {
    const Material = await model.findById(appID);
    return Material;
}
 
const create = async (Material) => {
    const {type, name, quantity} = Material;
 
    const newMaterial = await model.create({
        type,
        name,
        quantity,
    });

    return newMaterial;
}

module.exports = {
    create,
    find,
    find1
}