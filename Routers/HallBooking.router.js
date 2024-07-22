import express from 'express';
import { bookedcustomers, bookedrooms, bookroom, createroom, customerbookinghistory, getrooms } from '../Controllers/HallBooking.controller.js';


const router = express.Router();


router.get('/allrooms', getrooms)
router.post('/createroom', createroom)
router.post('/bookroom', bookroom)
router.get('/bookeddata', bookedrooms)
router.get('/Cusdata', bookedcustomers)
router.get('/details' , customerbookinghistory)





export default router;