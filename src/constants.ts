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
    options: ['sell', 'buy'],
  },
  {
    name: 'region',
    type: 'select',
    options: regions,
  },
  {
    name: 'contacts',
    type: 'tel',
    options: [],
  },
  {
    name: 'agreement',
    type: 'checkbox',
    options: [],
  },
  {
    name: 'price',
    type: 'number',
    options: [],
  },
  {
    name: 'title',
    type: 'text',
    options: [],
  },
];
