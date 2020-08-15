CREATE DATABASE api_ts;

CREATE TABLE posts(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,   
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIME
);

DESCRIBE posts;