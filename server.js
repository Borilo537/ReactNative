const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
//   password: 'YES',
  database: 'cashstashdb'
});
// connect to the MySQL database
connection.connect((error)=>{
if(error){
console.error('Error connecting to MySQL database:', error);
}else{
console.log('Connected to MySQL database!');
}
});

// var conect = connection.execute('INSERT INTO user_account(name, email, password) VALUES ("vitor", "vito423r@gmail.com", "vitor123")')
// connection.commit()
// console.log(conect)
// var exec = connection.execute('SELECT * FROM user_account;')
// console.log(exec)
// close the MySQL connection
// connection.end();
// connection.execute('SELECT * FROM user_account;')
//     .then(result => {
//         console.log(result[0])
//         connection.end()
//     })
//     .catch(err => {
//         console.log(err);
//     })

// async function executar(){
//     const a = connection.execute('SELECT * FROM user_account;')
//     connection.commit()
//     console.log(JSON.stringify(a))
//     connection.end()
// }

// executar()
connection.get("/consulta", function (req, res) {
    var exec = connection.execute('SELECT * FROM user_account;')
    res.send(exec);
  });
  