/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from 'fs';
import * as path from 'path';
import log from '~server/src/utils/log';

export class Seeder {
  async seed() {
    try {
      const allFiles = fs
        .readdirSync(path.join(process.cwd(), 'src', 'database', 'seeders'))
        .toString()
        .split(',');

      const { seededFiles } = JSON.parse(
        fs
          .readFileSync(
            path.join(
              process.cwd(),
              'src',
              'database',
              'seeders',
              `seeded_${process.env.NODE_ENV}.json`,
            ),
          )
          .toString(),
      );

      const files = allFiles
        .filter((file) => {
          if (
            file.startsWith('index') ||
            file.endsWith('.json') ||
            file.endsWith('md')
          )
            return false;

          if (seededFiles.includes(file)) return false;

          return true;
        })
        .sort();

      if (files.length === 0) return;

      await files.reduce((promise, file) => {
        return promise.then(async () => {
          const func = require(`./${file}`);

          await func?.default?.call(this);

          log(`
        =================================================
        Running seeder: ${file}
        =================================================
        `);

          seededFiles.push(file);
        });
      }, Promise.resolve());

      fs.writeFileSync(
        path.join(
          process.cwd(),
          'src',
          'database',
          'seeders',
          `seeded_${process.env.NODE_ENV}.json`,
        ),
        JSON.stringify(
          {
            seededFiles,
          },
          null,
          2,
        ),
      );
    } catch (err) {
      throw new Error(err);
    }
  }
}
