var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Title cant be empty"], minlength: [3, "Title must be at least 3 characters"]},
    participants: [],
    total: {type: Number, required: [true, "Total cant be empty"]},
    split: Number,
    note: String,
    date: {type: String, required: [true, "Date cant be empty"]}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

var UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name cant be empty"], minlength: [3, "Name must be at least 3 characters"]},
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

var GroupSchema = new mongoose.Schema({
    gname: {type: String, required: [true, "Name cant be empty"], minlength: [3, "Name must be at least 3 characters"]},
    users: [UserSchema],
    events: [EventSchema],
    journal: []
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

var JournalSchema = new mongoose.Schema({
    journals: []
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

var Event1 = mongoose.model('Event', EventSchema);
var Group = mongoose.model('Group', GroupSchema);
var User = mongoose.model('User', UserSchema);
var Journal = mongoose.model('Journal', JournalSchema);


module.exports = {
    Event: Event1,
    Group: Group,
    User: User,
    Journal: Journal
}