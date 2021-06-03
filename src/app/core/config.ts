import {InjectionToken} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

export interface Config {
  apiUrl: string;
  headersConfig: HttpHeaders;
  messageRefreshCycle: number;
}

export const CONFIG = new InjectionToken<Config>('app.config');
