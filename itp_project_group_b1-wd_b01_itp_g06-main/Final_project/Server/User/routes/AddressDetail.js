const express = require('express');
const req = require('express/lib/request');
const router= express.Router();
const Address=require('../models/Address');


//Get all Data
router.get('/',async(req,res)=>
{
    try{
        const address = await Address.find();
        res.json(address);        
    }
    catch(err){
        res.json({message:err})
    }
});

//post data

router.post('/',async(req,res)=>
{
    const address = new Address({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        address:req.body.address,
        streetnumber:req.body.streetnumber,
        streetname:req.body.streetname,
        state:req.body.state,
        province:req.body.province,
        country:req.body.country
    });

    try{
        const savedAddress = await address.save();
        res.json(savedAddress);
    }
    catch(err){
        res.json({message:err});
    }
});

//specific Post

router.get('/:addressId',async(req,res)=>
{
    try{
        const address = await Address.findById(req.params.addressId);
        res.json(address);
    }
    catch(err){
        res.json({message:err});
    }
});

//delete post

router.delete('/:addressId',async(req,res)=>
{
    try{
        const removedAddress= await Address.remove({_id:req.params.addressId});
        res.json(removedAddress);
    }

    catch(err){
        res.json({message:err});
    }
});

//update the Post

router.patch('/:addressId',async(req,res)=>
{
    try{
        const updatedAddress = await Address.updateOne(
            {_id:req.params.addressId},
            {$set:{
                name:req.body.name,
                email:req.body.email,
                number:req.body.number,
                address:req.body.address,
                streetnumber:req.body.streetnumber,
                streetname:req.body.streetname,
                state:req.body.state,
                province:req.body.province,
                country:req.body.country              
            }}  
        );
        res.json(updatedAddress);
    }

    catch(err){
        res.json({message:err});
    }
});

module.exports = router;