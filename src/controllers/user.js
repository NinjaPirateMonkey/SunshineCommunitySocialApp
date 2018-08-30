const mongoose = require( 'mongoose' );
const User = mongoose.model( 'User' );

module.exports = {
    create: async function( request, response, next ) {
        const userData = request.body;

        if ( !userData.name || !userData.facebookId ) {
            return response.status(422).json({
                errors: {
                    userData: 'is missing some information that is required to create a new user.'
                }
            })
        }

        const newUser = new User(userData);
        const finalUser = await newUser.save().catch( next )

        return response.json({ user: finalUser.toJSON() })
    },
    findAll: async function( request, response, next ) {
        const users = await User.find().exec().catch( next )
        console.log( 'Users: ', users);
        response.status(200).json(users)
    },
    update: async function( request, response, next ) {

        const userId = request.query.id;

        if ( !userId ) {
            return response.status(422).json({
                errors: {
                    userID: 'was not provided as a query parameter.'
                }
            })
        }

        const user = await User.findById( userId );
        const { body } = request;

        if ( typeof body.name !== 'undefined' ) {
            user.name = body.name;
        }

        if ( typeof body.illness !== 'undefined' ) {
            user.illness = body.illness;
        }

        const updatedUser = await user.save().catch( next );
        response.json({
            user: updatedUser.toJSON()
        })
    },
    delete: function( request, response, next ) {

    },
}