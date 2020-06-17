/* eslint-disable linebreak-style */
module.exports={
  friendlyName: 'Add fish',
  description: 'Add new fish to the database',
  inputs: {

    name: {
      description: 'Name of the fish type',
      type: 'string'
    },

    max_ph: {
      description: 'maximum ph',
      type: 'number'
    },

    min_ph: {
      description: 'minimum ph',
      type: 'number'
    },

    min_l: {
      description: 'minimum tank volume in liters',
      type: 'number'
    },
  },
  exits: {
    redirect: {
      responseType: 'redirect',
      description: 'If added then go to list'
    },

  },
  fn: async function ({ name, max_ph, min_ph, min_l }) {
    await Fishes.create({
      name: name,
      max_ph: max_ph,
      min_ph: min_ph,
      min_l: min_l
    }).fetch();

    throw {redirect:'/fishes/list'}
  }
};
