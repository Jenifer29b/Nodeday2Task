const creatingroom = [
    {AvailableSeats: 200,Amenities: "AC, projector, wifi",PricePerHour : 5000,RoomId : 1,roomName : "room-1"},
    {AvailableSeats: 500,Amenities: "AC, projector",PricePerHour : 4000,RoomId : 2 , roomName : "room-2"},
    {AvailableSeats: 200,Amenities: "AC, projector, wifi, conference room",PricePerHour : 10000,RoomId : 3 , roomName : "room-3"},
    {AvailableSeats: 150,Amenities: "AC",PricePerHour : 1000, RoomId : 4 , roomName : "room-4"},
    {AvailableSeats: 800,Amenities: "projector, wifi",PricePerHour : 6000, RoomId : 5 , roomName : "room-5" }
]

export const getrooms = (req,res) => {
    res.status(200).json({data: creatingroom})
}

// Creating the Room:
export const createroom = (req, res) => {
    const { AvailableSeats, Amenities, PricePerHour,roomName } = req.body
    const newroom = {
        AvailableSeats: AvailableSeats,
        Amenities : Amenities,
        PricePerHour : PricePerHour,
        Id: creatingroom.length + 1,
        roomName : roomName
    }
    creatingroom.push(newroom)
    res.status(200).json({message: "Room created successfully" , data:newroom})
}

// Booking the Room : 
const bookingroom = [];

export const bookroom = (req,res) => {
    const { CustomerName, Date, StartTime, EndTime, RoomId, bookingstatus } = req.body
const newbooking = {
      CustomerName : CustomerName,
      Date : Date,
      StartTime : StartTime,
      EndTime : EndTime,
      RoomId : RoomId,
      bookingstatus : bookingstatus,
      bookingId : bookingroom.length + 1
    }
    bookingroom.push(newbooking)
    res.status(200).json({message : "Room Booked Successfully" , data:newbooking})
}


// List the all Booked Rooms :
export const bookedrooms = (req, res) => {
    const bookedRooms = bookingroom.map(booking => {
        const room = creatingroom.find(room => room.RoomId === booking.RoomId)
        return {
            RoomName: room.roomName,
            BookingDetails: booking
        }
    })
    res.status(200).json({ message : "Booking Data Fetched" ,data: bookedRooms})
}

//List all Customers with Booked Data :
export const bookedcustomers = (req, res) => {
    const bookeddata = bookingroom.map(booking => {
        const room = creatingroom.find(room => room.RoomId === booking.RoomId)
        return {
            CustomerName: booking.CustomerName,
            RoomName: room.roomName,
            Date: booking.Date,
            StartTime: booking.StartTime,
            EndTime: booking.EndTime
        }
    })
    res.status(200).json({ message : "Customers Data Fetched", data: bookeddata})
}

//how many times a customer has booked a room with roomdetails : 
  
export const customerbookinghistory = (req, res) => {
    const { CustomerName } = req.body
    const customerBookings = bookingroom.filter(booking => booking.CustomerName === CustomerName)
    const bookingDetails = customerBookings.map(booking => {
        const room = creatingroom.find(room => room.RoomId === booking.RoomId)
        return {
            RoomName: room.roomName,
            BookingDetails: booking
        }
    })
    res.status(200).json({ message : "Customer Booking History Fetched", data: bookingDetails})
}