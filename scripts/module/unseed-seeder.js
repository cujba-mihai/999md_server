/* eslint-disable @typescript-eslint/no-var-requires */
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { execSync } from 'node:child_process';

const PATH_TO_SEEDERS = path.join(process.cwd(), 'src', 'database', 'seeders');
const PATH_TO_SEEDED = path.join(
  PATH_TO_SEEDERS,
  `seeded_${process.env._NODE_ENV || 'development'}.json`,
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const { seededFiles } = JSON.parse(
  fs.readFileSync(PATH_TO_SEEDED, { encoding: 'utf8' }),
);

const lastSeed = seededFiles.at(-1);

rl.question(
  `What file would you like to unseed? Leave blank if you want to unseed the last one (${lastSeed}).`,
  async (answer) => {
    if (!lastSeed) return console.log('No seeders found');

    if (!answer.endsWith('.ts')) answer = `${answer}.ts`;

    let PATH_TO_SEED = path.join(PATH_TO_SEEDERS, answer || lastSeed);

    console.log('Unseeding started...');

    execSync(`tsc ${PATH_TO_SEED}`);

    const { unseed } =
      (await await import(PATH_TO_SEED.replace('.ts', '.js'))) || {};

    if (typeof unseed !== 'function')
      throw new Error('Unseed function not found');

    await unseed();

    const newSeededFile = answer
      ? seededFiles.filter((file) => file !== answer)
      : seededFiles.slice(0, seededFiles.length - 1);

    const unseededFiles = JSON.stringify(
      {
        seededFiles: newSeededFile,
      },
      null,
      2,
    );

    fs.writeFileSync(PATH_TO_SEEDED, unseededFiles);

    fs.rmSync(PATH_TO_SEED.replace('.ts', '.js'));

    console.log(`
    
    Succesfully unseeded: ${PATH_TO_SEED}
    
    `);

    process.exit(0);
  },
);
