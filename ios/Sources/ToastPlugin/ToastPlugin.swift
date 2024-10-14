import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ToastPlugin)
public class ToastPlugin: CAPPlugin, CAPBridgedPlugin {
    
    public let identifier = "ToastPlugin"
    public let jsName = "Toast"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? "the value is empty!"
        call.resolve(["value": value])
    }
}
