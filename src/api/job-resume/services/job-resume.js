'use strict';

/**
 * job-resume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-resume.job-resume');
