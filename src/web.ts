import { WebPlugin } from '@capacitor/core';

import type { ToastPlugin } from './definitions';

export class ToastWeb extends WebPlugin implements ToastPlugin {
  
  async echo2(options: { value: string; }): Promise<{ value: string; }> {
    throw new Error('Method not implemented.');
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
