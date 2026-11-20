CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY, 
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL, 
    password_hash TEXT NOT NULL, 
    role VARCHAR(20) NOT NULL DEFAULT 'client', 
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CHECK (role IN ('client', 'developer', 'admin'))
);