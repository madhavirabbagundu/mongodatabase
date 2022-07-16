
db.cars.find({$or:[{car_color:"Red",gender:"Female"},{car_color:"Blue",gender:"Female"}]})
db.cars.find({car_color:"Pink",gender:"Male"})
  
 db.cars.find({purchase_year:"1998",gender:"Male"})


db.cars.find({gender:"Female",car_color:"Yellow",purchase_year:"1985"})
db.cars.find({$or:[{car_color:"Red"},{car_color:"Blue"}],$or:[{city:"Germany"},{city:"Kenya"}]})
db.cars.find({country:"India",purchase_year:"2001"})
db.cars.find({$or:[{country:"Germany"},{country:"Egypt"}],$or:[{purchase_year:"1998"},{purchase_Year:"1992"}]})
db.cars.find({car_color:"Blue",country:"India",gender:"Female"})
db.cars.find({$and:[{country:"Germany",purchase_year:"1998",gender:"Male"},{country:"Egypt",purchase_Year:"1992",gender:"Male"}]})
db.cars.find({gender:"Female",car_color:"Green",country:{$not:{$regex:"Pakisthan"}}})