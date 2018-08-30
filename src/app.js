const path = require( 'path' );
const express = require( 'express' );
const session = require( 'express-session' );
const bodyParser = require( 'body-parser' );
const logger = require( 'morgan' );
const cors = require( 'cors' );
const errorHandler = require( 'errorhandler' );

const isProduction = process.env.NODE_ENV === 'production';

const app = express();
const PORT = process.env.HTTP_PORT || 5000;

app.use( cors() );
app.use( logger( 'dev' ) );
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( session({
    secret: 'SunShune',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
}));

if ( !isProduction ) {
    app.use( errorHandler() );
}

// Hook in models here

// Hook in Routes here

// Error Handling
app.use( ( request, response, next ) => {
    const error = new Error('Not Found');
    error.status = 404;
    next( error );
} );

if ( !isProduction ) {
    app.use( ( error, request, response) => {
        response.status( error.status || 500 );

        response.json({
            errors: {
                message: error.message,
                error,
            },
        });
    });
}

app.use( ( error, response, request ) => {
    response.status( error.status || 500 );

    response.json({
        errors: {
            message: error.message,
            error: {},
        },
    });
} );

const server = app.listen( PORT, () => console.log( `Server started on port ${PORT}.` ) );