import pg from 'pg';
const dbclient = new pg.Pool({
    host:"juan-todo.cbuucgiqsve2.us-west-2.rds.amazonaws.com",
    user: "postgres",
    password: "Password.123",
    database: "todo",
    port: 5432,
    ssl:{
        rejectUnauthorized:false,
    }
});
/*
const client = await dbclient.connect();
const {rows} = await client.query("SELECT NOW() as Fecha, 1 as DummyColumn");
    console.log(rows[0]);
    client.release();*/

export{dbclient};