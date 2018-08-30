const router = require( 'express' ).Router();
const controller = require( '../controllers/user' );

module.exports = router
    .post( '/', controller.create )
    .get( '/', controller.findAll )
    .patch( '/', controller.update )