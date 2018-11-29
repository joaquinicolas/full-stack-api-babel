import {
  promises as fs,
} from 'fs';
import * as path from 'path';
import User from './user';


const PATH = `${path.join(__dirname, '../../../data.json')}`;

export const getAll = async () => {
  const result = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  result.map(v => (new User(
    ...v,
  )));
};

export const getById = async (id = '') => {
  const data = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  const user = data.find(element => element.id === id);
  return new User(
    ...user,
  );
};
