var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  salesFloor();
});

function salesFloor() {
    connection.query("SELECT * FROM products", function(err, result) {
      if (err) {
        throw err;
      }
      for (var i = 0; i < result.length; i++) {
      	console.log(result[i].id + " | " + result[i].product_name + " | " +  result[i].department_name + " | " + "$" + result[i].price);
      }
      yourChoice();
      
    });
  };

  function yourChoice(){
  	inquirer
  	.prompt([
  	{
   	 type: "list",
     message: "Which item do you want?",
     choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
     name: "choose"
    },
    {
   	 type: "input",
     message: "How many do you want?",
     name: "volume"
    }

  		]).then(function(response){
  			checkAvailability(response.choose, response.volume)
  		})

};

function checkAvailability(choose, volume){
	 connection.query('SELECT `product_name`, `stock_quantity` FROM products WHERE id = "' + choose + '"', function(err, result) {
    if (err) {
        throw err;
      } 
    var quantity = result[0].stock_quantity;

    if (result[0].stock_quantity < volume) {
      console.log("Out of Stock! Choose something else: ");
      salesFloor()
    }
    else {
      console.log('Product: ' + result[0].product_name + '\nQuantity: ' + volume + '\nYour order has been placed. We are processing it...');
      console.log(choose, result[0].stock_quantity, volume);
    }
    connection.end()
  });
}

function updateProduct(choose, stock_quantity, order_volume){

  connection.query('UPDATE products SET ? WHERE ?',
    [{ quantity: 100},{flavor: "Rocky Road"}],function(err, res){

    })

}

