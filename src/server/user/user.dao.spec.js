import {
  assert,
} from 'chai';
import {
  getAll, getById,
} from './user.dao';

import 'babel-polyfill';

describe('User dao', () => {

  const id = '5babfe331cb8c7025a048c74';
  it('should get all data', async () => {
    const data = await getAll();
    assert.exists(data);
    assert.isArray(data);
    assert.isAtLeast(data[0].id.length, 1);
  });

  it('should get user by id', async () => {
    const data = await getById(id);

    assert.exists(data);
    assert.equal(data.id, id);
  });

  it('should get null', async () => {
    const data = await getById('025a048c74');

    assert.notExists(data);
  });
});
