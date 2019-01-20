/**
 * Copyright (c) 2012-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

const { Observer, expression, nextTick } = require('ober');
const connect = require('./connect');
const model = require('./model');
const binding = require('./binding');
const bindable = require('./bindable');
const autorun = require('./autorun');
const watch = require('./watch');
const deep = require('./deep');
const mapping = require('./mapping');
const utils = require('./utils');
const stateful = require('./stateful');
const composition = require('./composition');
const annotation = require('./annotation');
const lifecycle = require('./lifecycle');
const recursive = require('./recursive');
const { useModel } = require('./hook');
const info = require('$info');

module.exports = {
  connect, model, binding, bindable, watch, mapping, autorun, deep, stateful,
  composition, Observer, expression, nextTick, annotation, lifecycle, useModel,
  recursive, utils, ...info
};