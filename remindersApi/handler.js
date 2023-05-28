'use strict';
const { getAll } = require('./getAll'); 
const { create } = require('./create'); 
const { remove } = require('./remove');

module.exports.getAll = getAll;

module.exports.create = create;

module.exports.delete = remove;