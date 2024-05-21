import { Router } from "express";
import { getUsers } from "../controller/user.controller.js";

const router =  Router()

router.get('/users', getUsers)
router.post('/users', (req, res)=>res.send('creando un user'))
router.put('/users', (req, res)=>res.send('actualizando un user'))
router.delete('/users', (req, res)=>res.send('borrando un user'))

export default router