import { FormField } from './formfields/entity/formfield.entity';

export const MONO_DB_CONNECTION_STRING = `mongodb+srv://${process.env.DB_USERlabel}:${process.env.DB_PASS}@999clonedev.gs1u1cg.mongodb.net/?retryWrites=true&w=majority`;

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
    label: 'offerType',
    type: 'radio',
    options: ['sell', 'buy'],
    validationSchema: JSON.stringify({}),
  },
  {
    label: 'region',
    type: 'select',
    options: regions,
    validationSchema: JSON.stringify({}),
  },
  {
    label: 'contacts',
    type: 'tel',
    options: [],
    validationSchema: JSON.stringify({}),
  },
  {
    label: 'agreement',
    type: 'checkbox',
    options: [],
    validationSchema: JSON.stringify({}),
  },
  {
    label: 'price',
    type: 'number',
    options: [],
    validationSchema: JSON.stringify({}),
  },
  {
    label: 'title',
    type: 'text',
    options: [],
    validationSchema: JSON.stringify({}),
  },
];
