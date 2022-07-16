test> db.users.find()

test> db.users.find({gender:"Female"})



test> db.users.find({language:"Kannada"},{language:"Hindi"})

test> db.users.find({language:"Kannada"})
  

test> db.users.find({language:"Kannada",gender:"Female"})

test> db.users.find({language:"Hindi",gender:"Female"})

test> db.users.find({shirt_size:"S"})


test> db.users.find({shirt_size:"XL",gender:"female"})


test> db.users.find({language:"English",gender:"Male",gender:"Female",language:"Hindi"})

test> db.users.find({language:"English",gender:"Female",gender:"Male",language:"Hindi"})

test> db.users.find({language:"Bengali",gender:"Female",shirt_size:"XL"})

test> db.users.find({language:"German",gender:"Male",shirt_size:"L"})

test> db.users.find({language:"German",gender:"Male",shirt_size:"M"})

test> db.users.find({language:"Korean",gender:"Male"})

test> db.users.find({language:"Malayalam"})

