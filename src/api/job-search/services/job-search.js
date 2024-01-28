'use strict';

/**
 * job-search service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-search.job-search');
