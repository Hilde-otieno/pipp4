function checkRoomAvailability(room, guestName, checkInDate, roomNumber) {
    if (room === "unoccupied") {
        console.log(`Room ${roomNumber} is available for ${guestName} (Check-in: ${checkInDate})`);
    } else {
        console.log(`Room ${roomNumber} is unoccupied.`);
    }
  }
  // Example usage:
checkRoomAvailability("unoccupied", "John Doe", "2024-05-15", 101);
checkRoomAvailability("occupied", "Alice Smith", "2024-05-14", 202);

// class HotelSystem{
//     constructor(){
//         this.reservation=[]
//     }
//     makeReservation(roomNumber,guestName,checkInDate){
//         this.reservation[roomNumber]={guestName,checkInDate}
//         console.log(this.reservation);
//         }
//     getReservation (roomNumber){
//     return this.reservation[roomNumber]
//     }
//      removeReservation(roomNumber){
//          delete this.reservation[roomNumber]
//          console.log(this.reservation)
//      }
//     }
//     const bookingSystem= new HotelSystem()
//     bookingSystem.makeReservation(56,'Rose Otieno', '15th May 2024')
//   console.log( bookingSystem.getReservation(56))
//   bookingSystem.removeReservation()
