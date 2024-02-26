import cors from "cors";
import express from "express";
import pg from "pg";


const app = express();

const pool = new pg.Pool({
    user: 'ukwrqzev4tb4qmsvjsgl',
    host: 'bqrgkc6r4ysqgsspyobw-postgresql.services.clever-cloud.com',
    password: 'bW5OBN2lMH22UWXynf6S76gAGW9XFe',
    database: 'bqrgkc6r4ysqgsspyobw',
    port: 50013,
});

//app.set("view engine", "ejs");
app.use(express.json());
app.use(cors())
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

pool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
        return;
    }
    console.log('Connected to the database');
    release();
});

app.get('/', (req, res) => {
    res.render("index.ejs");
})
app.get("/get", async (req, res) => {
    try {
        const getquery = "select * from employee";
        const data = await pool.query(getquery);
        res.json({data:data.rows})
        // console.log(data.rows);
    } catch (err) {
        console.log(err);
    }
});

app.post('/postData', async (req, res) => {
    try {
        const { employeeName, employeeId, department, dob, gender, designation, salary } = req.body;
        console.log(employeeName,"safs")
        if(salary<0||salary>99999999) return res.json("0")
        const query = `
            INSERT INTO employee (employeename, employeeidnumber, department, dateofbirth, gender, designation, salary)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `;
        await pool.query(query, [employeeName, employeeId, department, dob, gender, designation, salary]);

        res.status(200).send('Form data inserted successfully');
        console.log("data sent");
    } catch (error) {
        console.error('Error inserting form data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get("/getdata", async (req, res) => {
    try {
        console.log("vandach")
        const getquery = "SELECT * FROM employee";
        const data = await pool.query(getquery);
        console.log(data.rows);
        res.json(data.rows); // Return the data retrieved from the database as JSON response
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" }); // Return an error response in case of an error
    }
});

app.listen(4000, () => {
    console.log("Server is running")
})