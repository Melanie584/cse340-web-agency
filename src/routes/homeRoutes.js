import express from 'express';
import { getHomePage, getServicesPage, getPortfolioPage, getAboutPage, getLoginRegisterPage } from '../controllers/homeController.js';

const router = express.Router();

// Homepage route
router.get('/', getHomePage);
// Service route
router.get('/services', getServicesPage);
//Portfolio route
router.get('/portfolio', getPortfolioPage);
//About route
router.get('/about', getAboutPage);
//Login/Register route 
router.get('/login/register', getLoginRegisterPage);

export default router;