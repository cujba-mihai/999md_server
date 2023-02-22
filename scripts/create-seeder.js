/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const PATH_TO_SEEDERS = path.join(process.cwd(), 'src', 'database', 'seeders');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const extractProviders = (str) => {
  const providerRegex = /providers:\s*\[([\s\S]*?)\]/;
  const match = str.match(providerRegex);
  if (!match) {
    return null;
  }
  const providerListStr = match[1];
  const providerNameRegex = /(\w+(?:Service))/g;
  const providerNames = providerListStr.match(providerNameRegex);
  return providerNames;
};

const extractConstructorServices = (code) => {
  const constructorRegex = /constructor\s*\(\s*([^)]+)\s*\)/;
  const servicesRegex = /private\s+readonly\s+([^:]+)\s*:\s*([^,]+)/g;

  const constructorMatch = code.match(constructorRegex);
  if (!constructorMatch) {
    return [];
  }

  const [, constructorArguments] = constructorMatch;
  const serviceMatches = constructorArguments.matchAll(servicesRegex);

  const services = [...serviceMatches].map((match) => {
    const [, name, type] = match;
    return { name, type };
  });

  return services;
};

const extractImportRegex =
  /import\s+(?:{([\w,\s]+?)}\s+from\s+)?['"](.*?)['"];/g;

const extractServices = (filePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const lines = fileContent.split('\n');

  const importedServices = lines
    .filter((line) => line.includes('import '))
    .reduce((acc, line) => {
      if (line.includes('Service')) {
        const imports = extractImportRegex.exec(line)?.slice(1);

        if (imports != null) {
          const [importedFileName] = imports;

          acc.push(importedFileName.trim());
        }
      }
      return acc;
    }, []);

  const providers = extractProviders(fileContent);
  const constructorServices = extractConstructorServices(fileContent);

  return constructorServices.filter(({ name, type }) => {
    if (!name) return false;
    return !!(providers.includes(type) || importedServices.includes(type));
  });
};

rl.question('Enter the name of the seeder: ', (answer) => {
  if (answer.length < 4) throw Error('Please provide a valid seeder name.');

  const seederName = answer.trim().toLowerCase().replace(/\s+/g, '_');
  const seederPath = path.join(
    PATH_TO_SEEDERS,
    `${Date.now()}-${seederName}.ts`,
  );
  const pathToAppModule = path.join(process.cwd(), 'src', 'app.module.ts');
  const servicesAvailable = extractServices(pathToAppModule);

  const functionString = `/** Services available are:
 *
${servicesAvailable?.reduce((acc, val, index) => {
  acc = acc + `${index ? '\n' : ''} *  this.${val.name}`;
  return acc;
}, '')}
 **/
export default async function seed() {
  return this;
}

export async function unseed() {
  return this;
}
`;

  fs.writeFile(seederPath, functionString, (err) => {
    if (err) {
      console.error(`Error creating seeder file: ${err}`);
      process.exit(1);
    }

    console.log(`Seeder file created at: ${seederPath}`);
    rl.close();
  });
});
