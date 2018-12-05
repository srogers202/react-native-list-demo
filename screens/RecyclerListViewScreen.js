import React from 'react';
import { Button, Dimensions, StyleSheet, TextInput, View } from 'react-native';

import {
  DataProvider,
  LayoutProvider,
  RecyclerListView,
} from 'recyclerlistview';
import { getFakeContacts } from '../services/contacts.service';
import ContactCard from '../components/ContactCard.component';

const ROW_HEIGHT = 72;
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

    let { width } = Dimensions.get('window');

    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    this._layoutProvider = new LayoutProvider(
      (_index) => 0,
      (_type, dim) => {
        (dim.width = width), (dim.height = ROW_HEIGHT);
      },
    );

    this._rowRenderer = this._rowRenderer.bind(this);

    this.state = {
      contactsLength: DEFAULT_CONTACTS_LENGTH,
      dataProvider: dataProvider.cloneWithRows([]),
    };
  }

  componentDidMount() {
    this.generateContacts();
  }

  generateContacts() {
    const { contactsLength } = this.state;

    let dataProvider = new DataProvider((r1, r2) => {
      return r1 !== r2;
    });

    this.setState({
      dataProvider: dataProvider.cloneWithRows(
        getFakeContacts(parseInt(contactsLength)),
      ),
    });
  }

  _rowRenderer(_type, data) {
    return <ContactCard contact={data} backgroundColor={'#F0ECF9'} />;
  }

  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={{ backgroundColor: '#106035' }}>
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
        <RecyclerListView
          layoutProvider={this._layoutProvider}
          dataProvider={this.state.dataProvider}
          rowRenderer={this._rowRenderer}
          style={{ ...styles.container, width, height }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#106035',
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
