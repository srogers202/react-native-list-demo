import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 30, marginTop: 20 }}>
          <Image
            source={require('../assets/images/react.png')}
            style={{ height: 200, width: 200 }}
            resizeMode={'contain'}
          />
        </View>
        <View>
          <Text style={styles.header}>
            Working with Large Lists in React Native
          </Text>
          <Text style={styles.subheader}>(and React!)</Text>
        </View>

        <View style={styles.profile}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/srogers202' }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.name}>Seth Rogers</Text>
            <Text style={styles.github}>srogers202</Text>
            <Text style={styles.github}>seth.rogers@infusionsoft.com</Text>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text
            style={{ fontWeight: '700', textAlign: 'center', marginBottom: 10 }}
          >
            Sources:
          </Text>
          <Text style={styles.url}>
            https://github.com/srogers202/react-native-list-demo
          </Text>
          <Text style={styles.url}>
            https://github.com/Flipkart/recyclerlistview
          </Text>
          <Text style={styles.url}>
            https://facebook.github.io/react-native/docs/listview
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: 'white',
    height,
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 24,
    textAlign: 'center',
  },
  profile: {
    marginTop: 100,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
  },
  github: {
    fontWeight: '500',
  },
  url: {
    color: 'blue',
    textDecorationLine: 'underline',
    paddingVertical: 4,
  },
});
