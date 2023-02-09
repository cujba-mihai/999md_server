import * as fs from 'fs';
import * as path from 'path';

const getBlueprint = (blueprint: string) => {
  const blueprintPath = path.join(
    process.cwd(),
    'blueprints',
    `${blueprint}.md`,
  );

  const blueprintBuffer = fs.readFileSync(blueprintPath, 'utf8');

  return blueprintBuffer.toString();
};

export default getBlueprint;
