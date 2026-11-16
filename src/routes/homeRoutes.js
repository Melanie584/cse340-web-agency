import express from 'express';
import { getHomePage, getServicesPage } from '../controllers/homeController.js';

const router = express.Router();

// Homepage route
router.get('/', getHomePage);
// Service route
router.get('/services', getServicesPage);

export default router;