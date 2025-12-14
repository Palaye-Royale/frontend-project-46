#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';
import { parseFile } from './parsers.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const data1 = parseFile(filepath1); // ← Парсим первый файл
    const data2 = parseFile(filepath2); // ← Парсим второй файл
  
  // Пока просто выведем, что получилось
  console.log('Файл 1:', data1);
  console.log('Файл 2:', data2);
  });

program.parse();
