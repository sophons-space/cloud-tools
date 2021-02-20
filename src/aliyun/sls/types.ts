export type SLSLevel = 'log' | 'debug' | 'info' | 'warn' | 'error';

export interface SLSOptions {
  endpoint: string;
  apiVersion: string;
  project: string;
  logStore: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export interface SLSLogger {
  log(message: any, context?: string): any;
  error(message: any, trace?: string, context?: string): any;
  warn(message: any, context?: string): any;
  debug?(message: any, context?: string): any;
  verbose?(message: any, context?: string): any;
}
