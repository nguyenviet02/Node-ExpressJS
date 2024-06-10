import express from 'express';
const router = express.Router();
import siteController from '../app/controllers/SiteController.js';

router.get('/home', siteController.home);

export default router;
