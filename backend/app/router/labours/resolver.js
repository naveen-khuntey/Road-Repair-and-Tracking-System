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
        const labour = await datasources.find(appId);
        res.json(labour);
    } catch (error) {
        res.end('Internal server error');
    }
});

router.post('/', async (req, res) => {
    const labour = req.body;
    try {
        const createlabour = await datasources.create(labour);
        console.log(createlabour);
        res.json(createlabour);
    } catch (error) {
        res.json(error);
    }
})
module.exports = router;