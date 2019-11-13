var express = require('express')
var router = express.Router()
const Animal = require('./Animal');


router.use(function print(req, res, next) {
    console.log('Time: ' + Date.now());
    next();
})

//SHOW
router.get('/', async (req, res) => {
    const animals = await Animal.find();
    res.send(animals)
})

router.get('/:id', async (req,res) =>{
    const animal = await Animal.findById({_id:req.params.id});
    res.send(animal)
})

router.get('/ranas/rana', async (req,res) => {
    const animals = await Animal.find({tipo:"rana"});
    res.send(animals);
})

//CREATE
router.post('/', async (req, res) => {
    const animal = new Animal(req.body);
    await animal.save();
    res.send(animal)
})
//modificar
router.put('/:id',async (req,res) =>{
    const animal = await Animal.findByIdAndUpdate({_id:req.params.id},req.body);
    res.send(animal)
})
//eliminar

router.delete('/:id',async (req,res) =>{
    try{
        const animal = await Animal.findByIdAndDelete({_id:req.params.id});
        res.send({status: "ok"});
    }catch (error){
        res.send(error);
    }
})

router.get('/about', (req, res) => {
    res.send('About animals')
})

module.exports = router




















// findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true});
//findByIdAndDelete(req.params.id);
//findById(req.params.id);
//.concat({token})