import { createPool } from 'mysql2/promise';

export const pool =createPool(
    {
        host: 'roundhouse.proxy.rlwy.net',
        user: 'root',
        password: '4CeEf41EDHHAHHhb-Cgf6Bb4b4dff3A1',
        port: 29247,
        database: 'railway'
    }
)