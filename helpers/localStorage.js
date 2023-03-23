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

    let newItems = items.map((item)=>{
      return item.id == id ? data : item
    });

    LS.addALL(model, newItems);

    return data;
  },

  /**
   * 
   * @param {string} model
   * @param {number} id
   */
  delete: (model, id) => {
    let items = LS.all(model);

    let newItems = items.filter((item)=>{
      return item.id != id
    });
    
    LS.addALL(model, newItems);

    return newItems;
  },

  /**
   * 
   * @param {string} providers
   * @param {number} id
   * @param {string} services
   */
   deleteProvider: (providers, id, services) => {
    let items = LS.all(providers);

    let newItems = items.filter((item)=>{
      return item.id != id
    });
    
    LS.addALL(providers, newItems);

    let tempSer = LS.all(services);

    let newServices = tempSer.filter((ser)=>{
      return ser.providers_id != id
    });

    LS.addALL(services, newServices);

    return newItems;
  }
}

module.exports = LS;