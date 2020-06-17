module.exports = {


  friendlyName: 'Update fish',


  description: `Update a fish in the database`,


  inputs: {

    id: {
      description: 'The id of the fish to update',
      type: 'string',
      required: true
    }
  },


  exits: {
    success: {
      viewTemplatePath: 'pages/fishes/edit'
    }
  },


  fn: async function ({ id }) {

    var fishToUpdate = await Fishes.findOne({ id });

    if (!fishToUpdate){
      throw 'notFound';
    }

    return {
      fish: fishToUpdate
    };
  }
};
