import express from 'express';
import homepage from './homepageViews';

const routes = express.Router();

routes.get('/', homepage.getHomePage);

export default routes;
