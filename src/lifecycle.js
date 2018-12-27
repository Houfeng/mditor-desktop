const { push, get } = require('./annotation');

class Lifecycle {

  constructor(name) {
    this.key = `${name}:handlers`;
  }

  add(target, handler) {
    push(this.key, handler, target);
  }

  get(target) {
    return get(this.key, target);
  }

}

function create(list) {
  const map = {};
  list.forEach(name => map[name] = new Lifecycle(name));
  return map;
}

module.exports = create([
  'didMount', 'unmount', 'didUpdate', 'element', 'render', 'model'
]);