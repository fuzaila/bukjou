const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bukjou', { useNewUrlParser: true, useUnifiedTopology: true });
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    dob: Date,
    Favorites: Array,
    Books: Array,
    Reviews: Array
});

var userData = mongoose.model('user', UserSchema); 
 
module.exports = userData;
