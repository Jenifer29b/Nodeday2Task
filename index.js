import express from 'express';
import cors from 'cors';
import createroom from './Routers/HallBooking.router.js'

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.status(200).json({ message : "App is working"})
})

app.use('/api/rooms', createroom)


app.listen(PORT, () => {
    console.log("App is listening in the port" , PORT)
})
