const router = require( 'express' ).Router();


// FIXME: Delete this file after development phase.
module.exports = router
    .get( '/', (req, res) => {
        res.send('Test Successful.')
    } )