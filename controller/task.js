const task = require('../models/taskModel')
const asyncHandler = require('express-async-handler')


const getTasks = asyncHandler(async (req, res) => {
    try {
        const Task = await task.find()
        if (!Task) {
            res.status(404).json({ error: "tasks is not found" })
        }
        res.status(200).json({ Task })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
})



const createTasks = asyncHandler(async (req, res) => {
   try {
    const { list, pin,taskTitle } = req.body
    console.log(req.body);
    const Task = await task.create({
         list, pin,taskTitle
    })
    res.status(201).json({ Task })
   } catch (error) {
    res.status(500).json({error:error.message})
   }
})



module.exports = { getTasks, createTasks }