# Welcome to my sports-facility-booking-platform
## Descirption 
A Sports Facility Booking Platform is an online service designed to streamline the process of reserving sports facilities. This platform caters to both facility managers and users, offering a user-friendly interface to book various sports venues like tennis courts, football fields, swimming pools, gyms, and more. 

## User type 
- 2 type user 
1) Admin 
2) User 

- - Admin use Route

- facility route
1) ```/api/facility (POST)```
2) ```/api/facility/:id (PUT)```
3) ```/api/facility/:id (DELETE)```

- booking route 
1) ```/api/booking (GET)```

- - User use Route 
1) ```/api/booking (POST)```
2) ```/api/booking/user (GET)```
3) ```/api/booking/:id (DELETE)```

- - Public Route 
1) ```/api/signUp (POST)```
1) ```/api/login (POST)```
1) ```/api/ficility (GET)```
1) ```/api/check-availability (GET)```
1) ```/api/check-availability?date=2024-06-06 (GET)```


