Student> db.students_marks.find()
[
  {
    _id: ObjectId("5ddb87540ff16dc27fa2c4d5"),
    name: 'Shadow Goacher',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 88,
    science: 1,
    english: 53
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4d6"),
    name: 'Nicolais Swindles',
    gender: 'Male',
    class: 'IV',
    section: 'A',
    maths: 25,
    science: 9,
    english: 76
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4d7"),
    name: 'Yovonnda Kippins',
    gender: 'Female',
    class: 'II',
    section: 'A',
    maths: 9,
    science: 94,
    english: 73
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4d8"),
    name: 'Pamelina Insworth',
    gender: 'Female',
    class: 'V',
    section: 'B',
    maths: 87,
    science: 27,
    english: 45
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4d9"),
    name: 'Cherianne McCluin',
    gender: 'Female',
    class: 'VIII',
    section: 'C',
    maths: 72,
    science: 64,
    english: 41
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4da"),
    name: 'Karine Ickowics',
    gender: 'Female',
    class: 'VII',
    section: 'C',
    maths: 50,
    science: 36,
    english: 40
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4db"),
    name: 'Nathanael Hamman',
    gender: 'Male',
    class: 'VII',
    section: 'A',
    maths: 63,
    science: 7,
    english: 97
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4dc"),
    name: 'Rand Hedge',
    gender: 'Male',
    class: 'VI',
    section: 'C',
    maths: 46,
    science: 5,
    english: 37
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4dd"),
    name: "Annabelle O'Clery",
    gender: 'Female',
    class: 'VI',
    section: 'A',
    maths: 55,
    science: 4,
    english: 29
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4de"),
    name: 'Sherill Chapelhow',
    gender: 'Female',
    class: 'IV',
    section: 'C',
    maths: 52,
    science: 31,
    english: 98
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4df"),
    name: 'Tymothy Allibone',
    gender: 'Male',
    class: 'II',
    section: 'B',
    maths: 99,
    science: 97,
    english: 99
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e0"),
    name: 'Leda Lindenblatt',
    gender: 'Female',
    class: 'IX',
    section: 'C',
    maths: 77,
    science: 23,
    english: 99
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e1"),
    name: 'Zach Lemm',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 54,
    science: 87,
    english: 48
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e2"),
    name: 'Cassondra Bosche',
    gender: 'Female',
    class: 'IX',
    section: 'A',
    maths: 11,
    science: 42,
    english: 90
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e3"),
    name: 'Alwyn Ramey',
    gender: 'Male',
    class: 'IX',
    section: 'A',
    maths: 30,
    science: 21,
    english: 48
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e4"),
    name: 'Sybyl Plait',
    gender: 'Female',
    class: 'I',
    section: 'A',
    maths: 1,
    science: 9,
    english: 39
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e5"),
    name: 'Minetta Madgwick',
    gender: 'Female',
    class: 'IV',
    section: 'C',
    maths: 60,
    science: 8,
    english: 30
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e6"),
    name: 'Eli Laird',
    gender: 'Male',
    class: 'III',
    section: 'B',
    maths: 56,
    science: 22,
    english: 38
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e7"),
    name: 'Alleyn Drache',
    gender: 'Male',
    class: 'IX',
    section: 'C',
    maths: 61,
    science: 96,
    english: 21
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e8"),
    name: 'Laurence Reedyhough',
    gender: 'Male',
    class: 'VII',
    section: 'A',
    maths: 7,
    science: 21,
    english: 95
  }
]
Type "it" for more
Student> db.students_marks.find({gender:"Female"}).count()
483
Student> db.students_marks.find({gender:"Male",maths:{$gt:85}}).count()
82
Student> db.students_marks.find({gender:"Male",maths:{$gt:85},science:{$gt:85},english:{$gt:85}}).count()
4
Student> db.students_marks.find({maths:{$gt:50},{$lt:75}}).count()
Uncaught:
SyntaxError: Unexpected token (1:39)

> 1 | db.students_marks.find({maths:{$gt:50},{$lt:75}}).count()
    |                                        ^
  2 |

Student> db.students_marks.find({maths:{$in:[50,75]}).count()
Uncaught:
SyntaxError: Unexpected token, expected "," (1:43)

> 1 | db.students_marks.find({maths:{$in:[50,75]}).count()
    |                                            ^
  2 |

Student> db.students_marks.find({maths:{$in:[50,75]}}).count()
25
Student> db.students_marks.find({maths:{$in:[50,75]},english:{$in:[50,75]}}).count()
0
Student> db.students_marks.find({class:{$in:["I","V"]},maths:{$gt:50},science:{$gt:50},english:{$gt:50}}).count()
17
Student> db.students_marks.find({class:"X",section:"A",maths:{$lt:25},science:{$lt:25},english:{$lt:25}}).count()
0
Student> db.students_marks.find({class:"X",section:"A",maths:{$lt:25},science:{$lt:25},english:{$lt:25}})

Student> db.students_marks.find({class:"V",section:"A",maths:{$gt:90}})

Student> db.students_marks.find({class:"V",maths:{$gt:90}})
[
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c538"),
    name: 'Claudell Giamelli',
    gender: 'Male',
    class: 'V',
    section: 'B',
    maths: 95,
    science: 73,
    english: 59
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5ea"),
    name: 'Tildie Linnell',
    gender: 'Female',
    class: 'V',
    section: 'B',
    maths: 96,
    science: 47,
    english: 63
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c701"),
    name: 'Freemon Farfoot',
    gender: 'Male',
    class: 'V',
    section: 'C',
    maths: 96,
    science: 5,
    english: 83
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c761"),
    name: 'Glynda Camock',
    gender: 'Female',
    class: 'V',
    section: 'C',
    maths: 96,
    science: 32,
    english: 20
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c786"),
    name: 'Franz Seers',
    gender: 'Male',
    class: 'V',
    section: 'C',
    maths: 91,
    science: 6,
    english: 87
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c7c4"),
    name: 'Arlen Lawday',
    gender: 'Male',
    class: 'V',
    section: 'C',
    maths: 99,
    science: 25,
    english: 19
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c7dd"),
    name: 'Lee Abramovitch',
    gender: 'Male',
    class: 'V',
    section: 'C',
    maths: 96,
    science: 35,
    english: 26
  }
]
Student> db.students_marks.find({class:"V",maths:{$gt:95}})
[
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5ea"),
    name: 'Tildie Linnell',
    gender: 'Female',
    class: 'V',
    section: 'B',
    maths: 96,
    science: 47,
    english: 63
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c701"),
    name: 'Freemon Farfoot',
    gender: 'Male',
    class: 'V',
    section: 'C',
    maths: 96,
    science: 5,
    english: 83
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c761"),
    name: 'Glynda Camock',
    gender: 'Female',
    class: 'V',
    section: 'C',
    maths: 96,
    science: 32,
    english: 20
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c7c4"),
    name: 'Arlen Lawday',
    gender: 'Male',
    class: 'V',
    section: 'C',
    maths: 99,
    science: 25,
    english: 19
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c7dd"),
    name: 'Lee Abramovitch',
    gender: 'Male',
    class: 'V',
    section: 'C',
    maths: 96,
    science: 35,
    english: 26
  }
]
Student> db.students_marks.find({class:"I",science:{$lt:25}})
[
  {
    _id: ObjectId("5ddb87540ff16dc27fa2c4d5"),
    name: 'Shadow Goacher',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 88,
    science: 1,
    english: 53
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e4"),
    name: 'Sybyl Plait',
    gender: 'Female',
    class: 'I',
    section: 'A',
    maths: 1,
    science: 9,
    english: 39
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c533"),
    name: 'Standford Duffus',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 88,
    science: 19,
    english: 69
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c56b"),
    name: 'Massimo Tytcomb',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 81,
    science: 17,
    english: 26
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5ee"),
    name: 'Leontine Brodley',
    gender: 'Female',
    class: 'I',
    section: 'C',
    maths: 58,
    science: 4,
    english: 10
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c603"),
    name: 'Conroy McGeffen',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 38,
    science: 3,
    english: 86
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c634"),
    name: 'Shirl Ballinger',
    gender: 'Female',
    class: 'I',
    section: 'C',
    maths: 79,
    science: 20,
    english: 66
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c64d"),
    name: 'Orren Gibbonson',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 4,
    science: 11,
    english: 70
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c66b"),
    name: 'Lazaro Reneke',
    gender: 'Male',
    class: 'I',
    section: 'A',
    maths: 32,
    science: 9,
    english: 39
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c671"),
    name: 'Warren Matheson',
    gender: 'Male',
    class: 'I',
    section: 'A',
    maths: 85,
    science: 13,
    english: 10
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c698"),
    name: 'Marshal Queripel',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 48,
    science: 15,
    english: 46
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c6ad"),
    name: 'Darwin Petrussi',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 34,
    science: 3,
    english: 66
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c6d7"),
    name: 'Billie Eallis',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 59,
    science: 5,
    english: 63
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c6d9"),
    name: 'Emmott Birwhistle',
    gender: 'Male',
    class: 'I',
    section: 'C',
    maths: 75,
    science: 17,
    english: 24
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c724"),
    name: 'Waylan Gebby',
    gender: 'Male',
    class: 'I',
    section: 'A',
    maths: 71,
    science: 21,
    english: 17
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c725"),
    name: 'Gusti Savile',
    gender: 'Female',
    class: 'I',
    section: 'C',
    maths: 3,
    science: 13,
    english: 72
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c743"),
    name: 'Trevar Morphey',
    gender: 'Male',
    class: 'I',
    section: 'C',
    maths: 62,
    science: 4,
    english: 47
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c75c"),
    name: 'Ari Wheatley',
    gender: 'Male',
    class: 'I',
    section: 'A',
    maths: 57,
    science: 8,
    english: 50
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c77e"),
    name: 'Raphaela Faley',
    gender: 'Female',
    class: 'I',
    section: 'A',
    maths: 94,
    science: 9,
    english: 85
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c7b2"),
    name: 'Kelsey Kneeshaw',
    gender: 'Male',
    class: 'I',
    section: 'C',
    maths: 85,
    science: 6,
    english: 5
  }
]

Student> db.students_marks.find({class:"I",science:{$lt:5}})
[
  {
    _id: ObjectId("5ddb87540ff16dc27fa2c4d5"),
    name: 'Shadow Goacher',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 88,
    science: 1,
    english: 53
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5ee"),
    name: 'Leontine Brodley',
    gender: 'Female',
    class: 'I',
    section: 'C',
    maths: 58,
    science: 4,
    english: 10
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c603"),
    name: 'Conroy McGeffen',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 38,
    science: 3,
    english: 86
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c6ad"),
    name: 'Darwin Petrussi',
    gender: 'Male',
    class: 'I',
    section: 'B',
    maths: 34,
    science: 3,
    english: 66
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c743"),
    name: 'Trevar Morphey',
    gender: 'Male',
    class: 'I',
    section: 'C',
    maths: 62,
    science: 4,
    english: 47
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c833"),
    name: 'Dayna Broseman',
    gender: 'Female',
    class: 'I',
    section: 'A',
    maths: 33,
    science: 3,
    english: 8
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c887"),
    name: 'Rikki Lassells',
    gender: 'Female',
    class: 'I',
    section: 'C',
    maths: 94,
    science: 1,
    english: 77
  }
]
Student> db.students_marks.find({section:"A",science:{$lt:50},maths:{$lt:50},english:{$lt:50}})

Student> db.students_marks.find({section:"A",science:{$lt:50},maths:{$lt:50},english:{$lt:50}})
[
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e3"),
    name: 'Alwyn Ramey',
    gender: 'Male',
    class: 'IX',
    section: 'A',
    maths: 30,
    science: 21,
    english: 48
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4e4"),
    name: 'Sybyl Plait',
    gender: 'Female',
    class: 'I',
    section: 'A',
    maths: 1,
    science: 9,
    english: 39
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4eb"),
    name: 'Eadith Gissop',
    gender: 'Female',
    class: 'III',
    section: 'A',
    maths: 42,
    science: 36,
    english: 37
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c525"),
    name: 'Brigida McNabb',
    gender: 'Female',
    class: 'V',
    section: 'A',
    maths: 31,
    science: 32,
    english: 11
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c534"),
    name: 'Perren Roche',
    gender: 'Male',
    class: 'III',
    section: 'A',
    maths: 11,
    science: 19,
    english: 9
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c548"),
    name: 'Anatole Tofanelli',
    gender: 'Male',
    class: 'VI',
    section: 'A',
    maths: 18,
    science: 36,
    english: 4
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c54c"),
    name: 'Denys Joll',
    gender: 'Male',
    class: 'IV',
    section: 'A',
    maths: 12,
    science: 34,
    english: 43
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c57c"),
    name: 'Albertine Dovidaitis',
    gender: 'Female',
    class: 'V',
    section: 'A',
    maths: 35,
    science: 36,
    english: 38
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c57d"),
    name: 'Hildagarde MacGebenay',
    gender: 'Female',
    class: 'V',
    section: 'A',
    maths: 17,
    science: 19,
    english: 14
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c599"),
    name: 'Jerrie Annable',
    gender: 'Male',
    class: 'V',
    section: 'A',
    maths: 7,
    science: 35,
    english: 3
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5ad"),
    name: 'Jaquith Secretan',
    gender: 'Female',
    class: 'X',
    section: 'A',
    maths: 11,
    science: 25,
    english: 16
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5f9"),
    name: 'Faun Downgate',
    gender: 'Female',
    class: 'I',
    section: 'A',
    maths: 36,
    science: 35,
    english: 5
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c610"),
    name: 'Hersch Bolderson',
    gender: 'Male',
    class: 'III',
    section: 'A',
    maths: 26,
    science: 12,
    english: 12
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c613"),
    name: 'Rhett Ecob',
    gender: 'Male',
    class: 'VII',
    section: 'A',
    maths: 7,
    science: 16,
    english: 7
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c618"),
    name: 'Redd Sebyer',
    gender: 'Male',
    class: 'VI',
    section: 'A',
    maths: 26,
    science: 31,
    english: 25
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c630"),
    name: 'Dex Chapple',
    gender: 'Male',
    class: 'III',
    section: 'A',
    maths: 1,
    science: 32,
    english: 4
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c631"),
    name: 'Putnam Claus',
    gender: 'Male',
    class: 'IV',
    section: 'A',
    maths: 29,
    science: 10,
    english: 43
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c644"),
    name: 'Ollie Treffrey',
    gender: 'Female',
    class: 'II',
    section: 'A',
    maths: 36,
    science: 21,
    english: 14
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c655"),
    name: 'Sofie Meates',
    gender: 'Female',
    class: 'V',
    section: 'A',
    maths: 44,
    science: 17,
    english: 12
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c666"),
    name: 'Chrystel McAleese',
    gender: 'Female',
    class: 'II',
    section: 'A',
    maths: 26,
    science: 37,
    english: 24
  }
]

Student> db.students_marks.find({section:"C",science:{$gt:75},maths:{$gt:75},english:{$gt:75}})
[
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c531"),
    name: 'Jessey Jurkiewicz',
    gender: 'Male',
    class: 'III',
    section: 'C',
    maths: 84,
    science: 87,
    english: 91
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5c3"),
    name: 'Cecilius Hinchon',
    gender: 'Male',
    class: 'VI',
    section: 'C',
    maths: 93,
    science: 99,
    english: 80
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5de"),
    name: 'Christina Josefsohn',
    gender: 'Female',
    class: 'VII',
    section: 'C',
    maths: 93,
    science: 99,
    english: 82
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c6f5"),
    name: 'Nessi Georgot',
    gender: 'Female',
    class: 'VIII',
    section: 'C',
    maths: 82,
    science: 89,
    english: 93
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c86a"),
    name: 'Eberhard Caukill',
    gender: 'Male',
    class: 'VI',
    section: 'C',
    maths: 96,
    science: 86,
    english: 87
  }
]
Student> db.students_marks.find({science:{$gt:85},maths:{$gt:85},english:{$gt:85}})
[
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c4df"),
    name: 'Tymothy Allibone',
    gender: 'Male',
    class: 'II',
    section: 'B',
    maths: 99,
    science: 97,
    english: 99
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c61b"),
    name: 'Sinclair Fetter',
    gender: 'Male',
    class: 'X',
    section: 'A',
    maths: 86,
    science: 96,
    english: 96
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c7bf"),
    name: 'Pierson Geale',
    gender: 'Male',
    class: 'VII',
    section: 'B',
    maths: 95,
    science: 87,
    english: 94
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c86a"),
    name: 'Eberhard Caukill',
    gender: 'Male',
    class: 'VI',
    section: 'C',
    maths: 96,
    science: 86,
    english: 87
  }
]
Student> db.students_marks.find({}).sort({science:-1})
[
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c501"),
    name: 'Zoe Lorenz',
    gender: 'Female',
    class: 'VI',
    section: 'B',
    maths: 59,
    science: 100,
    english: 71
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5be"),
    name: 'Nicole Cullington',
    gender: 'Female',
    class: 'V',
    section: 'A',
    maths: 29,
    science: 100,
    english: 77
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c5e7"),
    name: 'Jim Densun',
    gender: 'Male',
    class: 'III',
    section: 'A',
    maths: 31,
    science: 100,
    english: 25
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c61a"),
    name: 'Saxe Pritchard',
    gender: 'Male',
    class: 'IX',
    section: 'A',
    maths: 17,
    science: 100,
    english: 94
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c61d"),
    name: 'Selina Broggetti',
    gender: 'Female',
    class: 'X',
    section: 'C',
    maths: 31,
    science: 100,
    english: 66
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c6a5"),
    name: 'Blake Waulker',
    gender: 'Female',
    class: 'IX',
    section: 'A',
    maths: 29,
    science: 100,
    english: 64
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c6bc"),
    name: 'Dael Berkelay',
    gender: 'Male',
    class: 'III',
    section: 'A',
    maths: 75,
    science: 100,
    english: 11
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c70d"),
    name: 'Goddart Dauncey',
    gender: 'Male',
    class: 'VI',
    section: 'A',
    maths: 57,
    science: 100,
    english: 51
  },
  {
    _id: ObjectId("5ddb87550ff16dc27fa2c722"),
    name: 'Lainey Weerdenburg',
    gender: 'Female',
    class: 'VII',
    section: 'C',
    maths: 100,
    science: 100,
    english: 54
  }
]