const fs = require('fs');
const plist = require('plist');
const path = require('path');

console.log("🔄 Starting post-install script for Capacitor plugin...");

// Path to the capacitor.config.json
const capacitorConfigPath = path.join(__dirname, '..', 'capacitor.config.json');

// Log the path to check if it's correct
console.log("✅ ---- capacitorConfigPath: "+capacitorConfigPath);

// Read the capacitor.config.json file to get the app name
let appName = '';
if (fs.existsSync(capacitorConfigPath)) {
  const capacitorConfig = JSON.parse(fs.readFileSync(capacitorConfigPath, 'utf8'));
  appName = capacitorConfig.appName || ''; // This is the app's name

  // Ensure appName is sanitized (removing any special characters or spaces)
  appName = appName.replace(/[^a-zA-Z0-9]/g, '');

  console.log("✅ ---- AppName: "+appName);
} else {
  console.error('❌ capacitor.config.json not found at: ', capacitorConfigPath);
}

// Define the path to the iOS Info.plist file (adjust based on your project structure)
const infoPlistPath = path.join(__dirname, '..', 'ios', 'App', 'App', 'Info.plist');

// Log the path to Info.plist to verify
console.log("✅ ---- Info.plist path: " + infoPlistPath);

// Read the Info.plist file
fs.readFile(infoPlistPath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Could not read Info.plist:', err);
    return;
  }

  const plistData = plist.parse(data);

  // Check if NSBluetoothAlwaysUsageDescription already exists
  if (!plistData.NSBluetoothAlwaysUsageDescription) {
    // Add the NSBluetoothAlwaysUsageDescription key with a message
    plistData.NSBluetoothAlwaysUsageDescription = 'This app requires Bluetooth to connect to devices.';

    // Write the updated Info.plist back to the file
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