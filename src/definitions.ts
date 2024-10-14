export interface ToastPlugin {
  showMessage(options: { value: string }): Promise<{ value: string }>;
}
