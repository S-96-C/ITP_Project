

const express = require('express');
const Rooms = require('../models/Rooms');

const router= express.Router();
const Post=require('../models/Rooms');


//Get all Data
router.get('/',async(req,res)=>
{
    try{
        const rooms = await Rooms.find();
        res.json(rooms);        
    }
    catch(err){
        res.json({message:err})
    }
});

//post data

router.post('/',async(req,res)=>
{
    const rooms = new Rooms({
        category:req.body.category,
        Name:req.body.Name,
        Specification:req.body.Specification,
        Price:req.body.Price
    });

    try{
        const savedRooms = await rooms.save();
        res.json(savedRooms);
    }
    catch(err){
        res.json({message:err});
    }
});

//specific Post

router.get('/:roomsId',async(req,res)=>
{
    try{
        const rooms = await Rooms.findById(req.params.roomsId);
        res.json(rooms);
    }
    catch(err){
        res.json({message:err});
    }
});

//delete post

router.patch('/:roomsId',async(req,res)=>
{
    try{
        const removedRooms= await Rooms.remove({_id:req.params.roomsId});
        res.json(removedRooms);
    }

    catch(err){
        res.json({message:err});
    }
});

//update the Post

router.patch('/:roomsId',async(req,res)=>
{
    try{
        const updatedRooms = await Rooms.updateOne(
            {_id:req.params.roomsId},
            {$set:{category:req.body.category}},
            {$set:{Name:req.body.Name}},
            {$set:{Specification:req.body.Specification}},
            {$set:{Price:req.body.Price}}
        );
        res.json(updatedRooms);
    }

    catch(err){
        res.json({message:err});
    }
});

module.exports = router;