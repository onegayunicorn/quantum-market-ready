-- Quantum Market Ready - Database Schema

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Quantum states table
CREATE TABLE IF NOT EXISTS quantum_states (
    id VARCHAR(50) PRIMARY KEY,
    user_id UUID REFERENCES users(id),
    qubits INTEGER NOT NULL,
    coherence FLOAT NOT NULL,
    purity FLOAT NOT NULL,
    state_vector JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP
);

-- Quantum circuits table
CREATE TABLE IF NOT EXISTS circuits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    gates JSONB NOT NULL,
    qubit_count INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Operations log
CREATE TABLE IF NOT EXISTS operations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    state_id VARCHAR(50) REFERENCES quantum_states(id),
    gate_name VARCHAR(50) NOT NULL,
    target_qubit INTEGER,
    angle FLOAT,
    coherence_after FLOAT,
    purity_after FLOAT,
    executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);