-- Create and use the database
CREATE DATABASE IF NOT EXISTS shopping_cart;
USE shopping_cart;

-- Create products table
CREATE TABLE tbl_products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    product_price DECIMAL(10,2) NOT NULL,
    product_image VARCHAR(255) NOT NULL,
    product_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Insert sample product data
INSERT INTO tbl_products (product_name, product_price, product_image) VALUES
('Men Solid Orange', 499.00, 'https://ultimez.com/tasks/assets/images/image1.jpeg'),
('Men Graphic Print', 451.00, 'https://ultimez.com/tasks/assets/images/image2.jpeg'),
('Men Graphic Print', 599.00, 'https://ultimez.com/tasks/assets/images/image3.jpeg'),
('Men Striped Polo', 479.00, 'https://ultimez.com/tasks/assets/images/image4.jpeg'),
('Men Striped Black', 349.00, 'https://ultimez.com/tasks/assets/images/image5.jpeg'),
('Men Typography', 600.00, 'https://ultimez.com/tasks/assets/images/image6.jpeg'),
('Men Printed Hooded', 334.00, 'https://ultimez.com/tasks/assets/images/image7.jpeg'),
('Embroidered Red Shirt', 453.00, 'https://ultimez.com/tasks/assets/images/image8.jpeg');
