module.exports = {


  friendlyName: 'Update fish',


  description: `Update a fish in the database`,


  inputs: {

    id: {
      description: 'The id of the fish to update',
      type: 'string',
      required: true
    },

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
      description: 'If updated then go to list'
    },
    notFound: {
      responseType: 'notFound'
    },
  },


  fn: async function ({ id, name, max_ph, min_ph, min_l }) {

    var fishToUpdate = await Fishes.findOne({ id });

    if (!fishToUpdate){
      throw 'notFound';
    }

    await Fishes.update({ id })
    .set({
      name: name,
      max_ph: max_ph,
      min_ph: min_ph,
      min_l: min_l
    });

    throw {redirect:'/fishes/list'}
  }
};
