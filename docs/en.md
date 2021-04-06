# @sophons/cloud-tools

## SLS

```ts
import { Aliyun } from '@sophons/cloud-tools';
const logger = new Aliyun.SLS.Logger('test', options);

logger.log('Aliyun.SLS', ip);
logger.info('Aliyun.SLS', ip);
logger.warn('Aliyun.SLS', ip);
logger.debug('Aliyun.SLS', ip);
logger.error('Aliyun.SLS', ip);
logger.error('Aliyun.SLS', ip);
```

### options

```ts
const options = {
  "apiVersion": "2015-06-01", // 固定值
  "accessKeyId": "",
  "secretAccessKey": "",
  "endpoint": "http://cn-hangzhou.log.aliyuncs.com", // 地域，以服务入口杭州为例
  "project": "", // 项目
  "logStore": "" // 存储空间
}
```