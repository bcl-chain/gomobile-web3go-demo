/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, NativeModules } from 'react-native';
console.disableYellowBox = true;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
            NativeModules.web3go.generateWallet(value => {
              let arr = value.split("&&")
              let wallet = {}
              wallet['address'] = arr[0]
              wallet['priv_key'] = arr[1]
              wallet['pub_key'] = arr[2]
              console.log(wallet)
              alert(JSON.stringify(wallet))
            })
          }}
          title="generate wallet"
          color="#841584"
        />
        <Button
          onPress={() => {
            NativeModules.web3go.generateHdWallet(value => {
              let arr = value.split("&&")
              let wallet = {}
              wallet['mnemonic'] = arr[0]
              wallet['address'] = arr[1]
              wallet['privateKey'] = arr[2]
              wallet['publicKey'] = arr[3]
              console.log(wallet)
              alert(JSON.stringify(wallet))
            })
          }}
          title="generate hdwallet"
          color="#841584"
        />
        <Button
          onPress={() => {
            NativeModules.web3go.getBalance("0x3f9fbAf00EE8B83bE009230a5061705dD911B5e9", value => {
              console.log("返回的 " + value)
              alert(value)
            })
          }}
          title="getBalance"
          color="#841584"
        />
        <Button
          onPress={() => {
            NativeModules.web3go.sendTransaction("7cf27dccec775e10a757bc4a1f71003666dd549700eb4b29f48b523becaf7954", "0xaf787c8316e3c43b13e5145f5c2b850e204b4a0f", value => {
              console.log("返回的 " + value)
              alert(value)
            })
          }}
          title="sendTransaction"
          color="#841584"
        />
        <Button
          onPress={() => {
            NativeModules.web3go.getTransactionsWithHash("0x145e411350c0d39f79976c1ba72d513714b6a69d293f8e96cdcf3e70680e555c", value => {
              let arr = value.split("&&")
              let wallet = {}
              wallet['hash'] = arr[0]
              wallet['value'] = arr[1]
              wallet['gas'] = arr[2]
              wallet['gasPrise'] = arr[3]
              wallet['nonce'] = arr[4]
              wallet['data'] = arr[5]
              wallet['to'] = arr[6]
              wallet['signHash'] = arr[7]
              console.log(wallet)
              alert(JSON.stringify(wallet))
            })
          }}
          title="getTransactionsWithHash"
          color="#841584"
        />
        <Button
          onPress={() => {
            NativeModules.web3go.getTransactionReceipt("0x145e411350c0d39f79976c1ba72d513714b6a69d293f8e96cdcf3e70680e555c", value => {
              console.log("返回的 " + value)
              alert(value)
            })
          }}
          title="getTransactionReceipt"
          color="#841584"
        />
        <Button
          onPress={() => {
            NativeModules.web3go.getBlockByNumber(303, value => {
              let arr = value.split("&&")
              let wallet = {}
              wallet['blockNumber'] = arr[0]
              wallet['blockGasLimit'] = arr[1]
              wallet['blockGasUsed'] = arr[2]
              wallet['blockInt64'] = arr[3]
              wallet['blockTime'] = arr[4]
              wallet['blockMixDigestHex'] = arr[5]
              wallet['blockNonce'] = arr[6]
              wallet['blockCoinbaseHex'] = arr[7]
              wallet['blockRootHex'] = arr[8]
              wallet['blockHashHex'] = arr[9]
              wallet['blockTransactionsSize'] = arr[10]
              console.log(wallet)
              alert(JSON.stringify(wallet))
            })
          }}
          title="getBlockByNumber"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
