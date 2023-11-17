const mongoose = require('mongoose');
// https://www.npmjs.com/package/mongoose-sequence
const AutoIncrement = require('mongoose-sequence')(mongoose);

const noteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketsNums',
  start_seq: 500,
});
/**
 * This plugin accepts the following options:

    inc_field: The name of the field to increment. Mandatory, default is _id.
    id: Id of the sequence. Mandatory only for scoped sequences but its use is strongly encouraged.
    reference_fields: The field to reference for a scoped counter. Optional.
    start_seq: The number to start the sequence from. Optional, default 1.
    inc_amount: The quantity to increase the counter at each increment. Optional, default 1.
    disable_hooks: If true, the counter will not be incremented on saving a new document. Default false.
    collection_name: By default the collection name to mantain the status of the counters is counters. You can override it using this option.
    parallel_hooks: If true, hooks will be registered as parallel. Default true.

 */

module.exports = mongoose.model('Note', noteSchema);
