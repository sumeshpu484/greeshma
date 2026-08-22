#!/usr/bin/env node
/**
 * Initialize Payload CMS database
 * This script ensures all Payload tables are created in the database
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });

async function initializeDatabase() {
  try {
    console.log('🚀 Initializing Payload CMS database...');

    // Import Payload config
    const config = require('../payload/payload.config.ts').default;
    const { getPayload } = require('payload');

    // Initialize Payload - this creates tables automatically
    const payload = await getPayload({ config });

    console.log('✅ Database initialized successfully!');
    console.log('📊 Tables created in PostgreSQL');

    process.exit(0);
  } catch (error) {
    console.error('❌ Database initialization failed:', error.message);
    console.error('Error:', error);
    process.exit(1);
  }
}

initializeDatabase();
