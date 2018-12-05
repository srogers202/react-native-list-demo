import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function ContactCard(props) {
  const { backgroundColor, contact } = props;

  return (
    <View {...props} style={{ ...styles.container, backgroundColor }}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../assets/images/profile.png')}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{contact.name}</Text>
        <Text style={styles.text}>{`${contact.username}`}</Text>
        <Text style={styles.text}>{`${contact.website}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#266073',
    borderBottomWidth: 1,
    borderBottomColor: '#F0ECF9',
  },
  iconContainer: {
    flex: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 16,
    color: '#031212',
  },
  text: {
    fontSize: 10,
    color: '#031212',
  },
});

export default ContactCard;
