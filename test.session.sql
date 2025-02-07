-- @block
-- Insert Sample Users (using data from users.json)
INSERT INTO users (id, username, email, password) VALUES
(1, 'Lourdy', 'lourdy@gmail.com', 'lourdy123'),
(2, 'roy', 'roy@gmail.com', 'roy123');

-- Insert Sample Products (using data from products.json)
INSERT INTO products (id, name, price, quantity, image) VALUES
(1, 'Digital Clock', 300.00, 50, 'image_url.png'),
(2, 'Monitor', 1800.00, 20, 'monitor_url.png');