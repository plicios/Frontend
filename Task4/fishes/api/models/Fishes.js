/**
 * Fishes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {type: 'string', required: true},
    max_ph: {type: 'number', required: true},
    min_ph: {type: 'number', required: true},
    min_l: { type: 'number', required: true }
  },

};

