var mongoose = require('mongoose');
var Schema    = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String },
    loginname:{ type: String },
    pass:{ type: String },
    email:{ type: String },
    score:{ type: Number, default: 0 }
});

UserSchema.virtual('isStar').get(function () {
    return this.score > 200 ;
});

UserSchema.index({loginname:1},{unique: true});
UserSchema.index({email:1},{unique:true});
UserSchema.index({score:-1});

mongoose.model("User",UserSchema);
