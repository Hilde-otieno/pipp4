def add_reservation(room_number, guest_name, check_in_date):
    room_reservations = {}
    room_reservations[room_number] = {"guest_name": guest_name, "check_in_date": check_in_date}
    for room_number, reservation in room_reservations.items():
         print("Room Number:", room_number)
    print("Guest Name:", reservation["guest_name"])
    print("Check-in Date:", reservation["check_in_date"])
    print()
    return room_reservations.get(room_number)



