# Quantum Market CLI

⚛️ Command-line interface for the Quantum Market simulation platform.

## Installation

```bash
npm install -g @quantum/cli
```

## Usage

```bash
# Check quantum engine status
quantum status

# Run a quantum simulation
quantum quantum --qubits 4 --gates H,X,CNOT

# Manage circuits
quantum circuit --list
quantum circuit --show bell-state

# Configure CLI settings
quantum config --key api.url --value https://api.example.com
```

## Commands

| Command | Description |
|---------|-------------|
| `quantum status` | Check quantum engine status |
| `quantum quantum` | Run quantum simulation |
| `circuit list` | List available circuits |
| `circuit show` | Show circuit details |
| `config` | Configure CLI settings |

## Options

- `-q, --qubits <n>` - Number of qubits (default: 4)
- `-g, --gates <g>` - Comma-separated gate list

## License

© 2024 Sovereign Core Research Pty Ltd