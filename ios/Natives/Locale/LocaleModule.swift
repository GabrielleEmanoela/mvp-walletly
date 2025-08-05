import Foundation
import React

@objc(LocaleModule)
class LocaleModule: NSObject {

  @objc
  func getDeviceLanguage(_ resolve: @escaping RCTPromiseResolveBlock,
                         rejecter reject: @escaping RCTPromiseRejectBlock) {
    let locale = Locale.current
    let result: NSDictionary = ["language": locale.identifier]
    resolve(result)
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
}
