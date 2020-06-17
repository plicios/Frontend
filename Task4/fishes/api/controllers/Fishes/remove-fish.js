module.exports = {


  friendlyName: 'Remove fish',


  description: 'Delete fish row from database.',


  inputs: {
    id: {
      description: 'The id of the fish to remove',
      type: 'string',
      required: true
    }
  },


  exits: {
    redirect: {
      responseType: 'redirect',
      description: 'If deleted then go to list'
    },
    notFound: {
      responseType: 'notFound'
    },
  },


  fn: async function ({ id }) {

    var fishToRemove = await Fishes.find({ id });
    if (!fishToRemove){
      throw 'notFound';
    }

    // Archive the record
    await Fishes.archiveOne({ id });

    throw {redirect:'/fishes/list'}
  }
};
