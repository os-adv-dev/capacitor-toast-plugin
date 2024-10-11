export interface ToastPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
