# Capacitor Toast Plugin

# Capacitor Toast Plugin

![Build Status](https://github.com/os-adv-dev/capacitor-toast-plugin/actions/workflows/main.yml/badge.svg)
![npm](https://img.shields.io/npm/v/capacitor-toast-plugin)

A simple Capacitor plugin that displays toast messages on Android and iOS.

## Installation

You can install this plugin via npm or directly from the GitHub repository:

```bash
npm install capacitor-toast-plugin
npx cap sync
```

## API

<docgen-index>

* [`showMessage(...)`](#showmessage)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### showMessage(...)

```typescript
showMessage(options: { value: string; }) => Promise<{ value: string; }>
```

# Example of usage
```typescript
import { Toast } from 'capacitor-toast-plugin';

Toast.showMessage({ value: 'Hello from the Toast Plugin!' })
  .then(result => {
    console.log(result.value);  // This will log: "Hello from the Toast Plugin!"
  })
  .catch(error => {
    console.error('Error showing toast:', error);
  });

```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

### Building the Plugin Locally

If you want to make changes to the plugin, clone this repository and build the plugin locally.

1.	Clone the repo:    
```bash
    git clone https://github.com/os-adv-dev/capacitor-toast-plugin.git
    cd capacitor-toast-plugin
```

2.	Install the dependencies:
```bash
    npm install
```

3.	Sync with Capacitor’s native platforms:
```bash
   npx cap sync
```

--------------------

</docgen-api>
