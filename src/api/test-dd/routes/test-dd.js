'use strict';

/**
 * test-dd router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-dd.test-dd');
