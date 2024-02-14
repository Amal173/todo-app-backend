const express=require('express')
const router=express.Router()
const { getTasks, createTasks}=require('../controller/task')

router.route('/').get(getTasks)
router.route('/').post(createTasks)

module.exports=router
