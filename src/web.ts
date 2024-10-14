import { WebPlugin } from '@capacitor/core';

import type { ToastPlugin } from './definitions';

export class ToastWeb extends WebPlugin implements ToastPlugin {
  async showMessage(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
