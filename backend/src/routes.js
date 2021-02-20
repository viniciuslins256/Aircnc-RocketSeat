const express = require("express");
const multer = require('multer');
const uploadConfig = require('./config/upload');

const DashboardController = require("./controlers/DashboardController");
const SessionControler = require('./controlers/SessionControler');
const SpotController = require('./controlers/SpotController');
const BookingController = require('./controlers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControler.store);

routes.get('/spots', SpotController.index);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
