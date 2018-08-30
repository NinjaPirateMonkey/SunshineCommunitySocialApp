const mongoose = require( 'mongoose' );
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    illness: {
        type: [ String ]
    },
    friends: {
        type: [ Schema.Types.ObjectId ]
    },
    conversations: {
        type: [ Schema.Types.ObjectId ]
    },
    facebookId: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true });

UserSchema.methods.toJSON = function() {
    return {
        _id: this._id,
        name: this.name,
        illness: this.illness,
        friends: this.friends,
        conversations: this.conversations,
        facebookId: this.facebookId,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    }
}

mongoose.model( 'User', UserSchema );