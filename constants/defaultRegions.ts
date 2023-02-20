// import { CreateRegionDTO } from '~server/src/region/dto/create-region.dto';

// console.log('Building the default region object...');
const exp = [];

export default exp;
// const chisinauLocation = [
//   'Bacioi',
//   'Braila',
//   'Bubuieci',
//   'Budesti',
//   'Buneti',
//   'Bic',
//   'Ceroborta',
//   'Cheltuitori',
//   'Chisinau',
//   'Ciorescu',
//   'Codru',
//   'Colonita',
//   'Condrita',
//   'Cricova',
//   'Cruzesti',
//   'Dobrogea',
//   'Dumbrava',
//   'Frumusica',
//   'Fauresti',
//   'Ghidighici',
//   'Goian',
//   'GoianulNou',
//   'Gratiesti',
//   'Hulboaca',
//   'Humulesti',
//   'Revaca',
//   'Straisteni',
//   'Stauceni',
//   'Singera',
//   'Tohatin',
//   'Truseni',
//   'VadulLuiVoda',
//   'Vatra',
//   'Vaduleni',
// ];

// const benderLocation = [
//   'Balasinesti',
//   'Beleavinti',
//   'Berlinsti',
//   'Bezeda',
//   'Bocicauti',
//   'Bogdanesti',
//   'Briceni',
//   'Bulboaca',
//   'Balcuti',
//   'CaracuseniiNoi',
//   'CaracuseniiVechi',
//   'Chirilovca',
//   'Colicauti',
//   'Corjeuti',
//   'Coteala',
//   'Cotiujeni',
//   'Criva',
//   'Drepcauti',
//   'Grimeshti',
//   'Grimancauti',
//   'Groznita',
//   'HalahoradeJos',
//   'HalahoradeSus',
//   'Hlina',
//   'Larga',
//   'Lipcani',
//   'Marcauti',
//   'Medveja',
//   'Mihaileni',
//   'Macaresti',
//   'MarcautiiNoi',
//   'Pavlovca',
//   'Pererita',
//   'SloboziaMedveja',
//   'SloboziaSirauti',
//   'Tabani',
//   'Tetcani',
//   'Trebisauti',
//   'Trestieni',
//   'Sirauti',
// ];

// const basarabeascaLocation = [
//   'Abaclia',
//   'Basarabeasca',
//   'Bogdanovca',
//   'Carabetovca',
//   'Carabiber',
//   'Iordanovca',
//   'Iserlia',
//   'Ivanovca',
//   'Sadaclia',
// ];

// const defaultLocation = [
//   'Balasinesti',
//   'Beleavinti',
//   'Berlinsti',
//   'Bezeda',
//   'Bocicauti',
//   'Bogdanesti',
//   'Briceni',
//   'Bulboaca',
//   'Balcuti',
//   'CaracuseniiNoi',
//   'CaracuseniiVechi',
//   'Chirilovca',
//   'Colicauti',
//   'Corjeuti',
//   'Coteala',
//   'Cotiujeni',
//   'Criva',
//   'Drepcauti',
//   'Grimeshti',
//   'Grimancauti',
//   'Groznita',
//   'HalahoradeJos',
//   'HalahoradeSus',
//   'Hlina',
//   'Larga',
//   'Lipcani',
//   'Marcauti',
//   'Medveja',
//   'Mihaileni',
//   'Macaresti',
//   'MarcautiiNoi',
//   'Pavlovca',
//   'Pererita',
//   'SloboziaMedveja',
//   'SloboziaSirauti',
//   'Tabani',
//   'Tetcani',
//   'Trebisauti',
//   'Trestieni',
//   'Sirauti',
// ];

// const defaultRegion: CreateRegionDTO = {
//   region: `
// chisinauMun
// baltiMun
// tiraspolMun
// cahul
// aneniiNoi
// basarabeasca
// benderMun
// briceni
// camenca
// cantemir
// ciadirLunga
// cimislia
// comrat
// criuleni
// calarasi
// causeni
// dnestrovsk
// donduseni
// drochia
// dubasari
// edinet
// floresti
// falesti
// glodeni
// grigoriopol
// hincesti
// ialoveni
// leova
// nisporeni
// ocnita
// orhei
// rezina
// ribnita
// riscani
// slobozia
// soroca
// straseni
// sangerei
// taraclia
// telenesti
// ungheni
// vulcanesti
// soldanesti
// stefanVoda
//     `
//     .split(/\n/)
//     .map((region) => {
//       let location;

//       switch (region.trim()) {
//         case 'chisinauMun':
//           location = chisinauLocation;
//           break;
//         case 'benderMun':
//           location = benderLocation;
//           break;
//         case 'basarabeasca':
//           location = basarabeascaLocation;
//           break;
//         default:
//           location = defaultLocation;
//       }

//       return {
//         region,
//         location: location.map((location) => ({
//           region: '',
//           location: location?.[0].toLowerCase() + location?.slice(1),
//           sector: ['center', 'suburbs'],
//         })),
//       };
//     }),
// };

// export default defaultRegion;
