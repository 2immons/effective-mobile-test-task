CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE history (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    change_message VARCHAR(50),
    change_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);