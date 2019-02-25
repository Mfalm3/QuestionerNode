import express from 'express';
import db from '../../../../db/db';

const app = express.Router();
const message = `This is the default route for this app. It has no defined functionality. The real functions are found in the [url]/api/v1/`;

class HomePage{
    getHomePage(req, res){
        return res.status(200).send({
            status: 'success',
            data: message
        });
    }
}

const homepage = new HomePage();
export default homepage;