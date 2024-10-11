import Foundation

@objc public class Toast: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
