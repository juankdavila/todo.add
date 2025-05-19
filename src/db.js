import pg from 'pg';
import {DB_HOST,DB_DATABASE,DB_PASSWORD,DB_PORT,DB_USER} from './config.js';

const dbClient = new pg.Pool({
    host:DB_HOST,
    user: DB_USER,
    password:DB_PASSWORD,
    database:DB_DATABASE,
    port:DB_PORT,
    ssl:{
        rejectUnauthorized:false,
    }
});
/*
const client = await dbclient.connect();
const {rows} = await client.query("Select Now() as Fecha, 1 as DummyColumn");
    console.log(rows[0]);
    client.release();*/

export{dbClient};