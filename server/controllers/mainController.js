var User = require('../models/models.js').User;
var Group = require('../models/models.js').Group;
var Event1 = require('../models/models.js').Event;
var Journal = require('../models/models.js').Journal;

module.exports = {
    index: function (req, res) {
        Group.find({}, function (err, groups) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ message: "Got all groups!", groups });
            }
        })
    },
    getGroup: function (req, res) {
        Group.findOne({ _id: req.params.id }, function (err, group) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ message: "Got selected group!", group });
            }
        })
    },
    getUser: function (req, res) {
        User.findOne({ _id: req.params.id }, function (err, user) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ message: "Got selected user!", user });
            }
        })
    },
    showEvent: function (req, res) {
        Event1.findOne({ _id: req.params.id }, function (err, event) {
            if (err) {
                res.json(err);
            } else {
                res.json({ message: "Show event!", event })
            }
        })
    },
    newUser: function (req, res) {
        var user = new User({ name: req.body.user.name });
        user.save(function (err, savedUser) {
            if (err) {
                res.json(err);
            }
            else {
                Group.updateOne({ _id: req.params.id }, { $push: { users: savedUser, journal: req.body.journal } }, function (err, group) {
                    if (err) {
                        res.json({ msgError: "Couldn't add Person to the group", group })
                    } else {
                        res.json({ message: "Added user!", savedUser });

                    }
                })
            }
        })
    },
    newEvent: function (req, res) {
        var event = new Event1(req.body.event);
        event.split = event.total;
        event.save(function (err, savedEvent) {
            if (err) {
                res.json(err)
            } else {
                Group.updateOne({ _id: req.params.id }, { $push: { events: savedEvent, journal: req.body.journal } }, function (err, group) {
                    if (err) {
                        res.json({ msgError: "Couldn't add Event to the group", group })
                    } else {
                        res.json({ message: "Added Event!", group });

                    }
                })
            }
        })
    },
    newPart: function (req, res) {
        Event1.updateOne({ _id: req.body.event._id }, { participants: req.body.event.participants, split: req.body.event.split, }, function (err, updatedEvent) {
            if (err) {
                res.json(err);
            } else {
                Event1.findOne({ _id: req.body.event._id }, function (err, foundEvent) {
                    if (err) {
                        res.json(err);
                    } else {
                        var groupDummy;
                        // Group.findOne({ _id: req.params.id }, function (err, foundGroup) {
                        //     if (err) {
                        //         res.json(err);
                        //     } else {
                        //         groupDummy = foundGroup;
                        //         var savedIndex;
                        //         for (var i = 0; i < groupDummy.events.length; i++) {
                        //             if (groupDummy.events[i]._id == req.body._id) {
                        //                 var temp = groupDummy.events[i];
                        //                 groupDummy.events[i] = groupDummy.events[groupDummy.events.length - 1]
                        //                 groupDummy.events[groupDummy.events.length - 1] = temp
                        //                 savedIndex = i;
                        //             }
                        //         }
                        //         groupDummy.events.pop();
                        //         groupDummy.events.push(foundEvent);
                        //         var temp = groupDummy.events[savedIndex]
                        //         groupDummy.events[savedIndex] = groupDummy.events[groupDummy.events.length - 1]
                        //         groupDummy.events[groupDummy.events.length - 1] = temp;
                        //         Group.updateOne({ _id: req.params.id }, { events: groupDummy.events }, function(err, updatedGroupEvents){
                        //             if (err) {
                        //                 console.log(err)
                        //                 res.json({msg:"something went wrong", updatedGroupEvents})
                        //             } else {
                        //                 Group.findOne({_id:req.params.id}, function(err, newTest){
                        //                     if(err){
                        //                         console.log('someting wong')
                        //                     } else {
                        //                         console.log(newTest.events)
                        //                     }
                        //                 })
                        //                 // Group.updateOne({ _id: req.params.id }, { $push:{journal: req.body.journal }}, function (err, savedGroupLast) {
                        //                 //     if(err){
                        //                 //         res.json({msg:"Something went wrong", savedGroupLast})
                        //                 //     } else {
                        //                 //         res.json({msg:"savedGroupLast", savedGroupLast})
                        //                 //     }
                        //                 // })
                        //             }
                        //         })

                        //     }
                        // })

                        groupDummy = req.body.group;
                        var savedIndex;
                        for (var i = 0; i < groupDummy.events.length; i++) {
                            if (groupDummy.events[i]._id == req.body._id && i != groupDummy.events.length - 1) {
                                var temp = groupDummy.events[i];
                                groupDummy.events[i] = groupDummy.events[groupDummy.events.length - 1]
                                groupDummy.events[groupDummy.events.length - 1] = temp
                                savedIndex = i;
                            } else {
                                savedIndex = groupDummy.events.length - 1;
                            }
                        }
                        groupDummy.events.pop();
                        groupDummy.events.push(foundEvent);
                        var temp = groupDummy.events[savedIndex]
                        groupDummy.events[savedIndex] = groupDummy.events[groupDummy.events.length - 1]
                        groupDummy.events[groupDummy.events.length - 1] = temp;
                        Group.updateOne({ _id: req.params.id }, { events: groupDummy.events }, function (err, updatedGroupEvents) {
                            if (err) {
                                res.json({ msg: "something went wrong", updatedGroupEvents })
                            } else {
                                Group.updateOne({ _id: req.params.id }, { $push: { journal: req.body.journal } }, function (err, savedGroupLast) {
                                    if (err) {
                                        res.json({ msg: "Something went wrong", savedGroupLast })
                                    } else {
                                        res.json({ msg: "savedGroupLast", savedGroupLast })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    },
    removePart: function (req, res) {
        Event1.updateOne({ _id: req.body.event._id }, {
            participants: req.body.event.participants,
            split: req.body.event.split,
        },
            function (err, updatedEvent) {
                if (err) {
                    res.json(err);
                } else {
                    Group.updateOne({ _id: req.body.group._id }, { events: req.body.group.events, journal: req.body.group.journal }, function (err, updatedGroup) {
                        if (err) {
                            res.json({ errorMsg: "Couldn't update group", updatedGroup })
                        } else {
                            res.json({ message: "updated group too", updatedGroup })
                        }
                    })
                }
            })
    },
    newGroup: function (req, res) {
        var group = new Group(req.body);
        group.save(function (err, savedGroup) {
            if (err) {
                res.json(err)
            } else {
                res.json({ message: "Group successfully create", savedGroup })
            }
        })
    },
    removeGroup: function (req, res) {
        Group.findOne({ _id: req.params.id }, function (err, data) {
            if (err) {
                res.json(err);
            } else {
                var newdate = String(new Date());
                newdate = newdate.substring(0, 24);
                data.journal.push("Removed Group: " + data.gname + " @ " + newdate)
                var journal = new Journal()
                // journal.journals.push({log: data.journal, group: data.gname});
                journal.journals.push(data);
                journal.save(function (err, savedJournal) {
                    if (err) {
                        res.json(err)
                    } else {
                        var events = [];
                        var users = [];
                        for (var i = 0; i < data.events.length; i++) {
                            events.push(data.events[i]._id)
                        }
                        for (var i = 0; i < data.users.length; i++) {
                            users.push(data.users[i]._id)
                        }
                        User.deleteMany({ _id: { $in: users } }, function (err, data) {
                            if (err) {
                                res.json({ msg: "something went wrong with user deletion", data })
                            } else {
                                Event1.deleteMany({ _id: { $in: events } }, function (err, data2) {
                                    if (err) {
                                        res.json({ msg: "something went wrong with event deletion", data2 })
                                    } else {
                                        Group.deleteOne({ _id: req.params.id }, function (err, data3) {
                                            if (err) {
                                                res.json(err);
                                            } else {
                                                res.json({ msg: "removed group", data3 })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    },

    removeEvent: function (req, res) {
        Event1.deleteOne({ _id: req.params.id }, function (err, deleteEvent) {
            if (err) {
                res.json(err);
            }
            else {
                Group.updateOne({ _id: req.body._id }, { events: req.body.events, journal: req.body.journal }, function (err, updatedGroup) {
                    if (err) {
                        res.json(err);
                    } else {
                        res.json({ message: "Updated Group!", updatedGroup });
                    }
                })
            }
        })
    },
    removeUser: function (req, res) {
        var arr = []
        for (var i = 0; i < req.body.events.length; i++) {
            arr.push(req.body.events[i]._id)
        }
        User.deleteOne({ _id: req.params.id }, function (err, deleteUser) {
            if (err) {
                res.json(err);
            }
            else {
                Event1.updateMany({ _id: { $in: arr } }, { $pull: { participants: { _id: req.params.id } } }, { multi: true }, function (err, updatedEvents) {
                    if (err) {
                        res.json(err);
                    } else {
                        for (var i = 0; i < arr.length; i++) {
                            Event1.updateOne({ _id: arr[i] }, { split: req.body.events[i].split, participants: req.body.events[i].participants }, function (err, data) {
                                if (err) {
                                    console.log(err);
                                } else {
                                    console.log(data);
                                }
                            })
                        }
                        Group.updateOne({ _id: req.body._id }, { events: req.body.events, users: req.body.users, journal: req.body.journal }, function (err, updatedGroup) {
                            if (err) {
                                res.json(err);
                            } else {
                                res.json({ message: "Updated Group!", updatedGroup: updatedGroup });
                            }
                        })
                    }
                })
            }
        })
    },
    updateGroup: function (req, res) {
        Group.updateOne({ _id: req.params.id }, { gname: req.body.gname, journal: req.body.journal }, function (err, updatedGroup) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ message: "Updated Group!", updatedGroup: updatedGroup });
            }
        })
    },
    updateEvent: function (req, res) {
        Event1.updateOne({ _id: req.params.id }, { title: req.body.title, total: req.body.total, date: req.body.date, note: req.body.note }, function (err, updatedEvent) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ message: "Updated Event!", updatedEvent: updatedEvent });
            }
        })
    },
    updateGroupEvent: function (req, res) {
        Group.updateOne({ _id: req.params.id }, { events: req.body.events, journal: req.body.journal }, function (err, updatedGroup) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({ message: "Updated Group!", updatedGroup: updatedGroup });
            }
        })
    },
    updateUser: function (req, res) {
        User.updateOne({ _id: req.body.user._id }, { name: req.body.user.name }, function (err, updatedUser) {
            if (err) {
                res.json({ errorMsg: "Couldn't update group", updatedUser2 });
            } else {
                Group.updateOne({ _id: req.body.group._id }, { events: req.body.group.events, users: req.body.group.users, journal: req.body.group.journal }, function (err, updatedGroup) {
                    if (err) {
                        res.json({ errorMsg: "Couldn't update group", updatedGroup })
                    } else {
                        var customErr = [];
                        for (var i = 0; i < req.body.group.events.length; i++) {
                            for (var j = 0; j < req.body.events.length; j++) {
                                if (req.body.group.events[i]._id == req.body.events[j]._id) {
                                    Event1.updateOne({ _id: req.body.events[j]._id }, { participants: req.body.group.events[i].participants }, function (err, updatedEvent) {
                                        if (err) {
                                            customErr.push(err)
                                        }
                                    })
                                }
                            }
                        }
                        if (customErr.length > 0) {
                            res.json({ errorMsg: "Couldn't update event" })
                        } else {
                            res.json({ message: "updated events too" })
                        }
                    }
                })
            }
        })
    },

}