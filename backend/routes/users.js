import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/userController.js';
import express from 'express'

const router = express.Router();

//CREATE
router.post("/createUser", createUser)
//EDIT
router.put("/:id", updateUser)
//DELETE
router.delete("/:id", deleteUser)
//GET
router.get("/:id",getUser)
//GET ALL
router.get("/",getAllUsers)

export default router
