/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from 'fs';
import * as path from 'path';

export class Seeder {
  async seed() {
    const allFiles = fs
      .readdirSync(path.join(process.cwd(), 'src', 'seeders'))
      .toString()
      .split(',');

    const { seededFiles } = JSON.parse(
      fs
        .readFileSync(
          path.join(
            process.cwd(),
            'src',
            'seeders',
            `seeded_${process.env.NODE_ENV}.json`,
          ),
        )
        .toString(),
    );

    const files = allFiles.filter((file) => {
      if (file.startsWith('index') || file.endsWith('.json')) return false;

      if (seededFiles.includes(file)) return false;

      return true;
    });

    if (files.length === 0) return;

    await Promise.all(
      files.map(async (file) => {
        const func = require(`./${file}`);

        await func.default.call(this);

        seededFiles.push(file);
      }),
    );

    fs.writeFileSync(
      path.join(
        process.cwd(),
        'src',
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
  }
  async unseed() {
    return 'Yet to be implemented';
  }
}
