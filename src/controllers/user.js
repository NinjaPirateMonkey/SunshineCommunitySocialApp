const mongoose = require( 'mongoose' );
const User = mongoose.model( 'User' );

module.exports = {
    create: async function( request, response, next ) {
        const userData = request.body;

        if ( !userData.name ) {
            return response.status(422).json({
                errors: {
                    name: 'must be provided.'
                }
            })
        }

        if ( !userData.facebookId ) {
            return response.status( 422 ).json({
                facebookID: 'must be provided.'
            })
        }

        const newUser = new User(userData);
        const finalUser = await newUser.save().catch( next )

        return response.json({ user: finalUser.toJSON() })
    },
    findAll: async function( request, response, next ) {
        const users = await User.find().exec().catch( next )
        response.status(200).json(users)
    },
    findByFacebookId: async function( request, response, next ) {
        const { facebookId } = request.params;
        const user = await User
            .findOne({ facebookId }).exec().catch(next);
        return response.json( user.toJSON() );
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
    delete: async function( request, response, next ) {
        const { id } = request.query;
        if ( !id ) {
            return response.status( 422 ).json({
                errors: {
                    userID: 'was not provided as a query parameter.'
                }
            })
        }

        const deletedUser = await User.findOneAndDelete({ id }).exec();
        if ( !deletedUser ) {
            return response.json({
                user: 'with matching ID not found.'
            })
        }
        response.status( 200 ).json({
            user: `with id ${ id } deleted.`
        })
    },
}