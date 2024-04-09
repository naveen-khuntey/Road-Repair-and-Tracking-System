const express = require('express');
const datasources = require('./datasources');

const router = express.Router();

router.get('/',async (req,res)=>{
    const data = await datasources.find1();
    if(data) res.send(data);
    else res.send({none : "ok"});
})
router.get('/:appId', async (req, res) => { 
    const {appId} = req.params;
    try {
        const user = await datasources.find(appId);
        res.json(user);
    } catch (error) {
        res.end('Internal server error');
    }
});

router.post('/', async (req, res) => {
    const user = req.body;
    try {
        const createuser = await datasources.create(user);
        console.log(createuser);
        res.json(createuser);
    } catch (error) {
        res.json(error);
    }
})
module.exports = router;