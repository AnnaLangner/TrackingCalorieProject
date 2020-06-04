//storage controler

//item controler
const ItemCtrl = (function() {
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  const data = {
    items: [
      {id: 0, name: 'SteakDinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400},
      {id: 2, name: 'Eggs', calories: 300},
    ],
    currentItem: null,
    totalCalories: 0
  }

  return {
    logData: function() {
      return data;
    }
  }
})();

//UI controler
const UICtrl = (function() {
  
  return {

  }
})();

//app controler
const App = (function(ItemCtrl, UICtrl) {
  return {
    init: function() {
      console.log('initializing app...')
    }
  }
})(ItemCtrl, UICtrl);


App.init();