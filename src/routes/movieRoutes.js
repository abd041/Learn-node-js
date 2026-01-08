import express from "express";

const router = express.Router()


router.get("/" , (req , res)=>{
    res.json({"message" : "Hello world"})
})

router.post("/" , (req , res)=>{
    res.json({"message" : "Hello world"})
})


router.put("/" , (req , res)=>{
    res.json({"message" : "Hello world"})
})


router.delete("/" , (req , res)=>{
    res.json({"message" : "Hello world"})
})


export default router