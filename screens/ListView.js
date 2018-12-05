import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { Dimensions, ListView } from 'react-native';

import { getFakeContacts } from '../services/contacts.service';
import ContactCard from '../components/ContactCard.component';

const DEFAULT_CONTACTS_LENGTH = 10;

export default class RLVScreen extends React.Component {
  static navigationOptions = () => {
    return {
      tabBarOnPress({ navigation, defaultHandler }) {
        navigation.state.params.onTabFocus();

        defaultHandler();
      },
      header: null,
    };
  };

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this._rowRenderer = this._rowRenderer.bind(this);

    this.state = {
      contactsLength: DEFAULT_CONTACTS_LENGTH,
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentDidMount() {
    this.generateContacts();
  }

  generateContacts() {
    const { contactsLength } = this.state;

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.setState({
      dataSource: ds.cloneWithRows(getFakeContacts(parseInt(contactsLength))),
    });
  }

  _rowRenderer(data) {
    return (
      <View style={{ marginBottom: 1 }}>
        <ContactCard contact={data} backgroundColor={'#F0ECF9'} />
      </View>
    );
  }

  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={{ backgroundColor: '#442673' }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(contactsLength) => this.setState({ contactsLength })}
            value={`${this.state.contactsLength}`}
            keyboardType={'number-pad'}
          />
          <Button
            onPress={this.generateContacts.bind(this)}
            title={'Generate'}
            color={'#ffffff'}
            style={styles.button}
          />
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._rowRenderer}
          style={{ ...styles.container, width, height }}
          enableEmptySections
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#442673',
    marginTop: 20,
  },
  inputContainer: {
    marginHorizontal: 50,
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    height: 40,
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: '50%',
  },
  button: {
    color: '#266073',
    backgroundColor: '#FEFBFD',
  },
});
