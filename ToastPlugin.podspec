require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name = 'ToastPlugin'
  s.version = package['version']
  s.summary = package['description']
  s.license = package['license']
  s.homepage = package['repository']['url']
  s.author = package['author']
  s.source = { :git => package['repository']['url'], :tag => s.version.to_s }
  s.source_files = 'ios/Sources/**/*.{swift,h,m,c,cc,mm,cpp}'
  s.ios.deployment_target  = '13.0'
  s.dependency 'Capacitor'
  s.swift_version = '5.1'
  s.prepare_command = <<-CMD
    plist=${PODS_TARGET_SRCROOT}/../../../App/Info.plist
    /usr/libexec/PlistBuddy -c "Add NSBluetoothAlwaysUsageDescription string 'We need access to Bluetooth to communicate with nearby devices.'" $plist
    /usr/libexec/PlistBuddy -c "Add NSBluetoothPeripheralUsageDescription string 'We need Bluetooth access to communicate with other devices.'" $plist
  CMD
end
