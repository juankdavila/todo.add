CREATE TABLE todos
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(50) NULL,
    complete BIT,
    create_at TIMESTAMP DEFAULT NOW()
)