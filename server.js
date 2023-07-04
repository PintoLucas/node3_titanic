import express from 'express';
import mongoose from 'mongoose';
import MongoClient from 'mongodb';

mongoose.connect('mongodb+srv://lucas:lucas@cours.hticvdk.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((error) => console.log(error));
