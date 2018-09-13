const router = require( 'express' ).Router();
const controller = require( '../controllers/user' );

module.exports = router
    .post( '/', controller.create )
    .get( '/', controller.findAll )
    .get( '/:facebookId', controller.findByFacebookId )
    .patch( '/', controller.update )
    .delete( '/', controller.delete )