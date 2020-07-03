import * as React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {Button, View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
  }

  render() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <QRCode
                value='https://www.globo.com'
                color={'#2C8DDB'}
                backgroundColor={'white'}
                size={100}
                //   logo={require('../../../embed_logo_file_path')} // or logo={{uri: base64logo}}
                logoMargin={2}
                logoSize={20}
                logoBorderRadius={10}
                logoBackgroundColor={'transparent'}
            />
        </View>
    );
   };
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
