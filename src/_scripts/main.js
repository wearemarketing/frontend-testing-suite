// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Module from './modules/module.js';

$(() => {
  new Module(); // Activate Link modules logic
});
