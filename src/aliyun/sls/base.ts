import * as AliYun from 'aliyun-sdk';

import { SLSLogger, SLSLevel, SLSOptions } from './types';

/**
 * Common methods of packaging aliyun SLS log service
 */
export class Logger implements SLSLogger {

  private logger: AliYun.SLS;

  constructor(
    private readonly topic: string,
    private readonly options: SLSOptions,
  ) {
    this.logger = new AliYun.SLS(this.options);
  }

  /**
   * processing sls log
   */
  private async handle(level: SLSLevel, value: string, source = 'sls') {
    const time = Math.floor(new Date().getTime() / 1000);

    try {
      await new Promise((res, rej) => {
        this.logger.putLogs(
          {
            logGroup: {
              source,
              topic: this.topic,
              logs: [{ time, contents: [{ key: level, value }] }],
            },
            projectName: this.options.project,
            logStoreName: this.options.logStore,
          },
          (error: Error) => {
            error ? rej(error) : res(null);
          },
        );
      });
    } catch (error) {
      console.error(error);
    }
  }

  public async log(value: string, source?: string) {
    await this.handle('log', value, source);
  }

  public async info(value: string, source?: string) {
    await this.handle('info', value, source);
  }

  public async error(value: string, source?: string) {
    await this.handle('error', value, source);
  }

  public async debug(value: string, source?: string) {
    await this.handle('debug', value, source);
  }

  public async warn(value: string, source?: string) {
    await this.handle('warn', value, source);
  }
}
