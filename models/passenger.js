const mongoose = require('mongoose');

const passengerSchema = mongoose.Schema({
    PassengerId: { type: Number },
    Survived: { type: Number },
    Pclass: { type: String },
    Name: { type: Number },
    Sex: { type: String },
    Age: { type: Number },
    SibSp: { type: Number },
    Parch: { type: Number },
    Ticket: { type: String },
    Fare: { type: String },
    Sex: { type: Number },
    Embarked: { type: String }
});

module.exports = mongoose.model('passengers', passengerSchema);