const fs = require('fs');
const path = require('path');
const plist = require('plist');

const platform = process.env.CAPACITOR_PLATFORM_NAME;
if (platform !== 'ios') {
  console.log(`ℹ️ Skipping post-sync script. Current platform is: ${platform}`);
  process.exit(0);
}

console.log("🔄 Starting post-sync script for Capacitor plugin on iOS...");

const infoPlistPath = path.join(__dirname, '..', '../AppCapacitor', 'ios', 'App', 'App', 'Info.plist');

console.log("✅ Info.plist path: " + infoPlistPath);

if (fs.existsSync(infoPlistPath)) {
  fs.readFile(infoPlistPath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌ Could not read Info.plist:', err);
      return;
    }

    const plistData = plist.parse(data);

    if (!plistData.NSBluetoothAlwaysUsageDescription) {
      plistData.NSBluetoothAlwaysUsageDescription = 'This app requires Bluetooth to connect to devices.';

      fs.writeFile(infoPlistPath, plist.build(plistData), (err) => {
        if (err) {
          console.error('❌ Could not write to Info.plist:', err);
          return;
        }
        console.log('✅ Successfully added NSBluetoothAlwaysUsageDescription to Info.plist');
      });
    } else {
      console.log('ℹ️ NSBluetoothAlwaysUsageDescription already exists in Info.plist');
    }
  });
} else {
  console.error('❌ Info.plist not found at: ' + infoPlistPath);
}