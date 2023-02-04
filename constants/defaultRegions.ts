import { CreateRegionsDTO } from '~server/src/regions/dto/create-regions.dto';

console.log('Building the default regions object...');

const chisinauLocations = [
  'Bacioi',
  'Braila',
  'Bubuieci',
  'Budesti',
  'Buneti',
  'Bic',
  'Ceroborta',
  'Cheltuitori',
  'Chisinau',
  'Ciorescu',
  'Codru',
  'Colonita',
  'Condrita',
  'Cricova',
  'Cruzesti',
  'Dobrogea',
  'Dumbrava',
  'Frumusica',
  'Fauresti',
  'Ghidighici',
  'Goian',
  'GoianulNou',
  'Gratiesti',
  'Hulboaca',
  'Humulesti',
  'Revaca',
  'Straisteni',
  'Stauceni',
  'Singera',
  'Tohatin',
  'Truseni',
  'VadulLuiVoda',
  'Vatra',
  'Vaduleni',
];

const benderLocations = [
  'Balasinesti',
  'Beleavinti',
  'Berlinsti',
  'Bezeda',
  'Bocicauti',
  'Bogdanesti',
  'Briceni',
  'Bulboaca',
  'Balcuti',
  'CaracuseniiNoi',
  'CaracuseniiVechi',
  'Chirilovca',
  'Colicauti',
  'Corjeuti',
  'Coteala',
  'Cotiujeni',
  'Criva',
  'Drepcauti',
  'Grimeshti',
  'Grimancauti',
  'Groznita',
  'HalahoradeJos',
  'HalahoradeSus',
  'Hlina',
  'Larga',
  'Lipcani',
  'Marcauti',
  'Medveja',
  'Mihaileni',
  'Macaresti',
  'MarcautiiNoi',
  'Pavlovca',
  'Pererita',
  'SloboziaMedveja',
  'SloboziaSirauti',
  'Tabani',
  'Tetcani',
  'Trebisauti',
  'Trestieni',
  'Sirauti',
];

const basarabeascaLocations = [
  'Abaclia',
  'Basarabeasca',
  'Bogdanovca',
  'Carabetovca',
  'Carabiber',
  'Iordanovca',
  'Iserlia',
  'Ivanovca',
  'Sadaclia',
];

const defaultLocations = [
  'Balasinesti',
  'Beleavinti',
  'Berlinsti',
  'Bezeda',
  'Bocicauti',
  'Bogdanesti',
  'Briceni',
  'Bulboaca',
  'Balcuti',
  'CaracuseniiNoi',
  'CaracuseniiVechi',
  'Chirilovca',
  'Colicauti',
  'Corjeuti',
  'Coteala',
  'Cotiujeni',
  'Criva',
  'Drepcauti',
  'Grimeshti',
  'Grimancauti',
  'Groznita',
  'HalahoradeJos',
  'HalahoradeSus',
  'Hlina',
  'Larga',
  'Lipcani',
  'Marcauti',
  'Medveja',
  'Mihaileni',
  'Macaresti',
  'MarcautiiNoi',
  'Pavlovca',
  'Pererita',
  'SloboziaMedveja',
  'SloboziaSirauti',
  'Tabani',
  'Tetcani',
  'Trebisauti',
  'Trestieni',
  'Sirauti',
];

const defaultRegions: CreateRegionsDTO = {
  regions: `
chisinauMun
baltiMun
tiraspolMun
cahul
aneniiNoi
basarabeasca
benderMun
briceni
camenca
cantemir
ciadirLunga
cimislia
comrat
criuleni
calarasi
causeni
dnestrovsk
donduseni
drochia
dubasari
edinet
floresti
falesti
glodeni
grigoriopol
hincesti
ialoveni
leova
nisporeni
ocnita
orhei
rezina
ribnita
riscani
slobozia
soroca
straseni
sangerei
taraclia
telenesti
ungheni
vulcanesti
soldanesti
stefanVoda
    `
    .split(/\n/)
    .map((region) => {
      let locations;

      switch (region.trim()) {
        case 'chisinauMun':
          locations = chisinauLocations;
          break;
        case 'benderMun':
          locations = benderLocations;
          break;
        case 'basarabeasca':
          locations = basarabeascaLocations;
          break;
        default:
          locations = defaultLocations;
      }

      return {
        region,
        locations: locations.map((location) => ({
          region: '',
          location: location?.[0].toLowerCase() + location?.slice(1),
          sector: ['center', 'suburbs'],
        })),
      };
    }),
};

export default defaultRegions;
