Student> db.students_marks.find()

Student> db.students_marks.find({gender:"Female"}).count()
483
Student> db.students_marks.find({gender:"Male",maths:{$gt:85}}).count()
82
Student> db.students_marks.find({gender:"Male",maths:{$gt:85},science:{$gt:85},english:{$gt:85}}).count()


Student> db.students_marks.find({maths:{$in:[50,75]}}).count()
25
Student> db.students_marks.find({maths:{$in:[50,75]},english:{$in:[50,75]}}).count()
0
Student> db.students_marks.find({class:{$in:["I","V"]},maths:{$gt:50},science:{$gt:50},english:{$gt:50}}).count()
17
Student> db.students_marks.find({class:"X",section:"A",maths:{$lt:25},science:{$lt:25},english:{$lt:25}}).count()
0

Student> db.students_marks.find({class:"V",section:"A",maths:{$gt:90}})

Student> db.students_marks.find({class:"V",maths:{$gt:90}})

Student> db.students_marks.find({class:"V",maths:{$gt:95}})

Student> db.students_marks.find({class:"I",science:{$lt:25}})



Student> db.students_marks.find({class:"I",science:{$lt:5}})

Student> db.students_marks.find({section:"A",science:{$lt:50},maths:{$lt:50},english:{$lt:50}})

Student> db.students_marks.find({section:"A",science:{$lt:50},maths:{$lt:50},english:{$lt:50}})


Student> db.students_marks.find({section:"C",science:{$gt:75},maths:{$gt:75},english:{$gt:75}})

Student> db.students_marks.find({science:{$gt:85},maths:{$gt:85},english:{$gt:85}})

Student> db.students_marks.find({}).sort({science:-1})
