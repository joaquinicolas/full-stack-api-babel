import {
  promises as fs,
} from 'fs';
import * as path from 'path';
import User from './user';


const PATH = `${path.join(__dirname, '../../../data.json')}`;

export const getAll = async () => {
  const result = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  return result.map(v => (new User(
    v.id,
    v.isActive,
    v.balance,
    v.age,
    v.name,
    v.company,
    v.email,
    v.phone,
    v.address,
    v.about,
    v.registered,
    v.latitude,
    v.longitude,
  )));
};

export const getById = async (id = '') => {
  const data = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  const user = data.find(element => element.id === id);
  if (!user) {
    return user;
  }
  return new User(
    user.id,
    user.isActive,
    user.balance,
    user.age,
    user.name,
    user.company,
    user.email,
    user.phone,
    user.address,
    user.about,
    user.registered,
    user.latitude,
    user.longitude,
  );
};
