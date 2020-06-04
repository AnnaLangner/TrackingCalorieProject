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
    getItem: function(){
      return data.items;
    },
    logData: function() {
      return data;
    }
  }
})();

//UI controler
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list'
  }
  
  return {
    populateItemList: function(items) {
      let html = '';
      items.forEach(function(item) {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}:</strong> <em>${item.calories} calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`
      });

      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
})();

//app controler
const App = (function(ItemCtrl, UICtrl) {
  return {
    init: function() {
      const items = ItemCtrl.getItem();

      UICtrl.populateItemList(items);
    }
  }
})(ItemCtrl, UICtrl);


App.init();