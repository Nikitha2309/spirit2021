const mongoose = require("mongoose");
//Event schema

const EventSchema = new mongoose.Schema(
  {
    event_name: { type: String, required: true },
    content_on_card : { type: String, required: true },
    date : { type: Date, required: true  },
    user_object_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema', unique: false}],
    field1: [{ type: String, required: false, unique:false}],
    field2: [{ type: String, required: false, unique:false}],
    field3: [{ type: String, required: false, unique:false}]

  });
const Event = mongoose.model("Event", EventSchema);
module.exports.event = Event;

