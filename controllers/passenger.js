const Passenger = require('../models/passenger');

exports.getAllPassengers = (req, res, next) => {
    Passenger.find().then(
        (passengers) => {
            res.status(200).json(passengers);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};