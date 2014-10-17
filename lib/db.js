var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Blog = new Schema({
    Username: String,
    Article: String,
    CreateDate: Date
});

var Comment = new Schema({
    Visitor: String,
    Comment: String,
    MessageID: Schema.Types.ObjectId,
    CreateDate: Date
});

mongoose.model('Blog', Blog);
mongoose.model('Comment', Comment);

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var mongodb_uri =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/blog';

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(mongodb_uri, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + mongodb_uri + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + mongodb_uri);
    }
});