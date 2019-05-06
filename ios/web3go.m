//
//  web3go.m
//  iosweb3godemo
//
//  Created by 域乎 on 2019/5/6.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(web3go, NSObject)
RCT_EXTERN_METHOD(generateWallet: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(generateHdWallet: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getBalance: (NSString)address callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(sendTransaction: (NSString)privateKey toAddress:(NSString)toAddress callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getBlockByNumber: (NSInteger)bclokNumber callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getTransactionsWithHash: (NSString)hash callback:(RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(getTransactionReceipt: (NSString)hash callback:(RCTResponseSenderBlock)callback)
@end
