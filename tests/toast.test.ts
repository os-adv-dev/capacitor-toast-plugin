import { Toast } from '../src/index';

describe('Toast Plugin Tests', () => {
  let plugin: typeof Toast;

  beforeEach(() => {
    plugin = Toast;
  });

  it('should initialize the Toast plugin correctly', () => {
    expect(plugin).toBeDefined();
  });

  it('should return the correct value when a message is passed', async () => {
    const result = await plugin.showMessage({ value: 'test' });
    expect(result.value).toBe('test'); 
  });
});