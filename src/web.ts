import { WebPlugin } from '@capacitor/core';

import type { ToastPlugin } from './definitions';

export class ToastWeb extends WebPlugin implements ToastPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
