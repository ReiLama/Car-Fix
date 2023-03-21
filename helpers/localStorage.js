const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./scratch')

const LS = {
  /**
   * Get all items of a given model
   * 
   * @param {string} model 
   * @returns array
   */
  all: (model) => {

    const items = JSON.parse(localStorage.getItem(model) || '[]');
    items.forEach((item, index)=>{
      item.id = index
    });
    localStorage.setItem(model, JSON.stringify(items))

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

    return items.find((i) => i.id == id);
  },

  /**
   * Find a single item from a given ID
   * 
   * @param {string} model 
   * @param {number} id 
   * 
   * @returns {object} item
   */
  findGroup: (model, id) => {
    const items = LS.all(model);

    return items.filter((item)=>{
      return item.providers_id == id
    })

  },

  /**
   * 
   * @param {string} model 
   * @param {object} data 
   */
  create: (model, data) => {
    let items = LS.all(model);

    data.id = items.lenght;

    items.push(data);
    
    LS.addALL(model, items);

    return data;
  },

  /**
   * 
   * @param {string} model 
   * @param {object} data 
   * @param {number} id
   */
  edit: (model, data, id) => {
    let items = LS.all(model);

    data.id = id;

    items.splice(id, 1, data)
    
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

    items.splice(id, 1)
    
    LS.addALL(model, items);

    return items;
  }
}

module.exports = LS;