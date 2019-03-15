import express from 'express'
import routes from './api/routes';

const app = express(); 
const port = process.env.PORTY || 3000; 
routes(app); 
app.listen(port, () => {
    console.log( `Server Started on port: ${port}`);
});
