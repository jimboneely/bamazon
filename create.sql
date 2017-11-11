CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
	`id` int NOT NULL AUTO_INCREMENT,
	`product_name` varchar(45) NOT NULL,
	`department_name` varchar(45) NOT NULL,
	`price` int NOT NULL,
	`stock_quantity` int NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Record Player', 'Equipment', 100, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Stereo Reciever', 'Equipment', 80, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Speaker Pair', 'Equipment', 70, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Record Cleaner', 'Accessories', 15, 250);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Slipmat', 'Accessories', 20, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Thriller', 'Albums', 10, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Dark Side of the Moon', 'Albums', 10, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Blue Magic', 'Albums', 10, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Gentleman Ruffin', 'Albums', 10, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Sonder Son', 'Albums', 18, 45);