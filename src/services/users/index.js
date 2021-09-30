import express from "express"
import db from "../../dp/models/index.js"
import s from "sequelize"

const { Op } = s

const usersRouter = express.Router()
const {user} = db
usersRouter
 .route("/")
 .get(async (req, res, next) => {
     try {
         const users = await user.findAll({

         })
         res.send(users)
     } catch (error) {
        console.log(error);
        next(error); 
     }
 })
 .post(async (req, res, next) => {
     try {
         const users =await user.create(req.body)
         res.send(users)
     } catch (error) {
        console.log(error);
        next(error); 
     }
 })

 export default usersRouter