/* eslint-disable linebreak-style */
module.exports = {
    friendlyName: 'View fishes',
    description: 'Display "Fishes page.',
  
  
    exits: {
      success: {
        viewTemplatePath: 'pages/fishes/list'
      }
    },
  
  
    fn: async function () {
      var fishes = await Fishes.find();
      return {
        currentSection: 'fishes',
        fishes: fishes,
      };
    }
  };