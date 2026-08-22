const { Pool } = require('pg');
require('dotenv').config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function checkTables() {
  try {
    console.log('🔍 Checking database tables...');
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    if (result.rows.length === 0) {
      console.log('❌ No tables found! Database is empty.');
      console.log('💡 Run: npm run dev');
      console.log('   This will initialize Payload CMS and create all tables.');
    } else {
      console.log('✅ Tables found:');
      result.rows.forEach(row => console.log('   -', row.table_name));
    }

    await pool.end();
  } catch (error) {
    console.error('❌ Database connection error:', error.message);
  }
}

checkTables();
