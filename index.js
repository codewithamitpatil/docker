
const dotenv = require( 'dotenv' );
const express = require( 'express' );
const cors = require( 'cors' );
const os = require( 'os' );
const uuid = require('uuid');
const httpError = require( 'http-errors' );
const { count } = require('console');
// const fetch = require('node-fetch');
dotenv.config();
let countet = 0;
const app = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || "localhost";
const postUrl = process.env.POSTURL || "localhost:5001";

const io = uuid.v4();

app.use( cors( '*' ) );
app.use( express.urlencoded( { extended: true } ) );

app.get( '/env', async ( req, res, next ) => {

   try {    
      res.send(process.env);
   } catch ( e ) {
      next( e );
   }

} );



app.get( '', async ( req, res, next ) => {

   try {
 
  countet ++;
      res.send( {message:io,count:countet });
   } catch ( e ) {
      next( e );
   }

} );




app.use( ( err, req, res, next ) => {
   console.log( err );
   const status = err.status || 500;
   const message = err.message || "internal server error";
   return res.status( status ).send( {
      message: message,
      status: status
   } )
} );

app.listen( port, () => {
   console.log( `App1 Server is listening at http://${ host }:${ port }` );
} );