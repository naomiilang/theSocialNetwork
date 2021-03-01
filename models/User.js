const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trime: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        thought: [
            {
                type: Schema.Types.ThoughtId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.UserId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virutals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function(){
    return this.friend.reduce(
        (total, friend) => total + friend.length + 1,
        0
    );
});

const User = model('User', UserSchema);

module.exports = User;