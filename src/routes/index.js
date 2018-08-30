const router = require( 'express' ).Router();

router.use( '/users', require( './users' ));
router.use( '/test', require('./html' )); //FIXME: Delete this after development.

module.exports = router;
