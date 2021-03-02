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

test('Aliyun.SLS - error', async () => {
  const options = { ...getOptions(), endpoint: '' };
  const logger = new Aliyun.SLS.Logger('test', options);
  logger.error('Aliyun.SLS - error');
});

test('Aliyun.SLS', async () => {
  const logger = new Aliyun.SLS.Logger('test', getOptions());
  logger.log('Aliyun.SLS');
  logger.info('Aliyun.SLS');
  logger.warn('Aliyun.SLS');
  logger.debug('Aliyun.SLS');
  logger.error('Aliyun.SLS');
  logger.error('Aliyun.SLS');
});
