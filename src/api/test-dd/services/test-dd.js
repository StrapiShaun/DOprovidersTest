'use strict';

/**
 * test-dd service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-dd.test-dd');
