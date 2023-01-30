import { FormField } from './formfields/entity/formfield.entity';

export const MONO_DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@999clonedev.gs1u1cg.mongodb.net/?retryWrites=true&w=majority`;

type DefaultFieldsType = Omit<FormField, '_id'>;

export const regions = [
  'chisinau',
  'balti',
  'tiraspol',
  'cahul',
  'bender',
  'basarabca',
  'briceni',
  'vulcanesi',
  'glodeni',
  'grigoriopol',
  'donduseni',
  'drochia',
  'dubasari',
  'edinet',
  'calarasi',
  'camenca',
  'cantemir',
].sort();

export const defaultFields: DefaultFieldsType[] = [
  {
    name: 'offerType',
    type: 'radio',
    values: ['sell', 'buy'],
    element: 'input',
  },
  {
    name: 'region',
    element: 'input',
    type: 'select',
    values: regions,
  },
  {
    name: 'contacts',
    element: 'input',
    type: 'tel',
    values: [],
  },
  {
    name: 'agreement',
    element: 'input',
    type: 'checkbox',
    values: [],
  },
  {
    name: 'price',
    element: 'input',
    type: 'number',
    values: [],
  },
  {
    name: 'title',
    element: 'input',
    type: 'text',
    values: [],
  },
];
