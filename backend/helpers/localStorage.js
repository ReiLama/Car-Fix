const { LocalStorage } = require('node-localstorage');
// eslint-disable-next-line no-global-assign
localStorage = new LocalStorage('../data');

const LS = {
    /**
     * Get all items of a given model
     * 
     * @param {string} model 
     * @returns array
     */
    all: (model) => {
      return JSON.parse(localStorage.getItem(model) || '[]');
    },
  
    /**
     * This method will set the first dummy data
     * 
     * @param {string} model
     * @param {Array} items 
     * 
     * @returns {void}
     */
    addALL: (model, items) => {
      return localStorage.setItem(model, JSON.stringify(items));
    },
  
    /**
     * Find a single item from a given ID
     * 
     * @param {string} model 
     * @param {number} id 
     * 
     * @returns {object} item
     */
    find: (model, id) => {
      const items = LS.all(model);
  
      return items.find((item) => item.id === id);
    },
  
    /**
     * 
     * @param {string} model 
     * @param {object} data 
     */
    create: (model, data) => {
      let items = LS.all(model);
  
      data.id = Math.max(...items.map(i => i.id)) + 1;
  
      items.push(data);
      
      LS.addALL(model, items);
  
      return data;
    },


    /**
     * 
     * @param {string} model 
     * @param {number} id
     */
     delete: (model, id) => {
      let items = LS.all(model);

      items.splice(1 , id);
      
      LS.addALL(model, items);
  
      return items;
    },

    /**
     * 
     * @param {string} model 
     * @param {object} data
     * @param {number} id
     */
     edit: (model, data, id) => {
      let items = LS.all(model);

      items.splice(1 , id, data);
      
      LS.addALL(model, items);
  
      return items;
    }
  }
  
  module.exports = LS;