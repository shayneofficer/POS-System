/**
 * Class for menu items. Useful for storing and manipulating objects after
 * they're pulled out of DB. Pretty much pointless to create new MenuItems
 * before adding a menu item to the DB.
 * @property {String} name Name of the item
 * @property {Number} price Price of item on menu
 * @property {String} category Menu category the item falls under
 * @property {Number} inventory Quantity of the item in stock
 * @property {String} flags Special states/conditions for the item
 * @method setPrice(Number) Sets the item's price
 * @method addFlag(Array[String]) Adds new flags to existing ones.
 * @method removeFlag(Array[String]) Remove a specific flag ('*' REMOVES ALL)
 * @method getParentMenu() Returns the id of the parent menu
 * @method setInventory(Number) Set's items inventory. (-1 decrements current)
 */
class MenuItem {
  constructor (name, price, category, inventory, flags) {
    this.name = name;
    this.price = price;

    category ? (this.category = category) : (this.category = '');

    inventory ? (this.inventory = inventory) : (this.inventory = '');

    flags ? (this.flags = flags) : (this.flags = '');
  }
}

MenuItem.prototype.addFlag = (flags) => {
  // Flags didn't exist previously
  this.flags ? (this.flags += flags) : (this.flags = flags);
};

MenuItem.prototype.removeFlag = (flags) => {
  !this.flags || !flags
    ? (this.flags = [])
    : () => {
        flags === '*'
          ? (this.flags = [])
          : (this.flags = this.flags.filter((i) => i !== flags));
      };
};

MenuItem.prototype.setInventory = (n) => {
  switch (n) {
    case n === -1:
      this.inventory -= 1;
      break;
    case n > 999999:
    case n < 0:
      console.log(
        'Error: MainMenu.setInventory(' + n + ') - Input Out of Bounds'
      );
      return 'Error: Input Out of Bounds';
    default:
      this.inventory = n;
      break;
  }
};

MenuItem.prototype.getParentMenu = () => {
  console.log('TODO: (maybe) - MenuItem.getParentMenu()');
}

export default MenuItem;
