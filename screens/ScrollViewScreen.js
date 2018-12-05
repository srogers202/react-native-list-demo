import React from 'react';
import { Button, StyleSheet, ScrollView, TextInput, View } from 'react-native';

import { getFakeContacts } from '../services/contacts.service';
import ContactCard from '../components/ContactCard.component';

const DEFAULT_CONTACTS_LENGTH = 10;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      contactsLength: DEFAULT_CONTACTS_LENGTH,
      contacts: [],
    };
  }

  componentDidMount() {
    this.generateContacts();
  }

  generateContacts() {
    const { contactsLength } = this.state;

    this.setState({
      contacts: getFakeContacts(parseInt(contactsLength)),
    });
  }

  _rowRenderer({ item }) {
    return <ContactCard contact={item} backgroundColor={'#F0ECF9'} />;
  }

  render() {
    return (
      <View style={{ backgroundColor: '#71B2D0' }}>
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
        <ScrollView style={{ marginTop: 20 }}>
          {this.state.contacts.map((contact) => (
            <View style={{ marginBottom: 1 }} key={contact.name}>
              <ContactCard contact={contact} backgroundColor={'#F0ECF9'} />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#71B2D0',
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
    color: '#ffffff',
    backgroundColor: '#FEFBFD',
  },
});
