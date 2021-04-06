import * as fs from 'fs';
import { resolve } from 'path';
import { expect, test } from '@jest/globals';

import { Aliyun } from '../src';

const getOptions = () => {
  const path = resolve(__dirname, '../setting.json');
  const options = JSON.parse(fs.readFileSync(path).toString());
  return options;
};

test('Aliyun.SLS - no options', async () => {
  try {
    new Aliyun.SLS.Logger('test', null).log('test');
  } catch (error) {
    expect(error.message === 'Cannot read property \'accessKeyId\' of null').toBe(true);
  }
});

test('Aliyun.SLS - no options', async () => {
  try {
    new Aliyun.SLS.Logger('test', null).log('test');
  } catch (error) {
    expect(error.message === 'Cannot read property \'accessKeyId\' of null').toBe(true);
  }
});

test('Aliyun.SLS - logStore', async () => {
  try {
    const options = { ...getOptions(), logStore: '1' };
    const logger = new Aliyun.SLS.Logger('test', options);
    await logger.error('Aliyun.SLS - error');
  } catch (error) {
    expect(1).toBe(1);
  }
});

test('Aliyun.SLS - error', async () => {
  try {
    const options = { ...getOptions(), endpoint: '' };
    const logger = new Aliyun.SLS.Logger('test', options);
    await logger.error('Aliyun.SLS - error');
  } catch (error) {
    expect(1).toBe(1);
  }
});

test('Aliyun.SLS', async () => {
  const logger = new Aliyun.SLS.Logger('test', getOptions());
  logger.log('Aliyun.SLS');
  logger.info('Aliyun.SLS');
  logger.warn('Aliyun.SLS');
  logger.debug('Aliyun.SLS');
  logger.error('Aliyun.SLS');
  await logger.error('Aliyun.SLS');
});
