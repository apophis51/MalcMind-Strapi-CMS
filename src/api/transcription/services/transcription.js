'use strict';

/**
 * transcription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transcription.transcription');
