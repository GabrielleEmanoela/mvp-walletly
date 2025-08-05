//
//  LocaleModule.m
//  Walletly
//
//  Created by Gabrielle on 27/07/25.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LocaleModule, NSObject)

RCT_EXTERN_METHOD(getDeviceLanguage:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end
