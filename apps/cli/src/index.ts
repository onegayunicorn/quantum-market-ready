#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { quantumCommand } from './commands/quantum';
import { circuitCommand } from './commands/circuit';
import { statusCommand } from './commands/status';
import { configCommand } from './commands/config';

const program = new Command();

program
  .name('quantum')
  .description('⚛️ Quantum Market CLI - Command line interface for quantum market simulation')
  .version('1.0.0');

program
  .command('quantum')
  .description('Run quantum simulation')
  .option('-q, --qubits <number>', 'Number of qubits', '4')
  .option('-g, --gates <gates>', 'Comma-separated gate list')
  .action(quantumCommand);

program
  .command('circuit')
  .description('Manage quantum circuits')
  .option('-l, --list', 'List all circuits')
  .option('-s, --show <name>', 'Show circuit details')
  .action(circuitCommand);

program
  .command('status')
  .description('Check quantum engine status')
  .action(statusCommand);

program
  .command('config')
  .description('Configure CLI settings')
  .option('-k, --key <key>', 'Set configuration key')
  .option('-v, --value <value>', 'Set configuration value')
  .action(configCommand);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(chalk.bold.cyan('\n⚛️ Quantum Market CLI v1.0.0\n'));
  console.log(chalk.gray('Sovereign Core Research\n'));
  program.help();
}