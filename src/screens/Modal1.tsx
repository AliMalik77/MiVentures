import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  Animated,
  Image,
  Modal,
  Alert,
  Button,
} from 'react-native';
// import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Modal1 = () => {
  //   const [modalVisible, setModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={!isModalVisible ? styles.container : styles.container2}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Modal
          animationType={'fade'}
          transparent={true}
          visible={isModalVisible}
          // onRequestClose={() => {
          //   console.log('Modal has been closed.');
          // }}
        >
          <View style={styles.modal}>
            <View style={styles.icon}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                <MaterialIcons name="close" size={25} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={{width: '80%', alignItems: 'center'}}>
                <Text style={styles.text}>Regulation Crowdfunding</Text>
              </View>
              <View style={{width: '90%', alignItems: 'center'}}>
                <View style={{marginTop: 20}}>
                  <Text style={styles.textDescription}>
                    Regulation Crowdfunding (“Reg CF”) is a law that lets anyone
                    that is 18 years old or older invest in a business with
                    certain limitations such as how much they can invest in any
                    12-month period based on their yearly income, net worth, and
                    previous Reg CF investments.
                  </Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={styles.textDescription}>
                    You can track how much you invest and your investment limits
                    all on the Miventure App.
                  </Text>
                </View>

                <View style={{marginTop: 20}}>
                  <Text style={styles.textDescription}>
                    Learn more in our{' '}
                    <Text style={styles.textHighlights}>
                      Educational Materials .
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/*Button will change state to true and view will re-render*/}
      <Button
        title="Click To Open Modal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      {/* </View> */}
    </View>
  );
};

export default Modal1;

const styles = StyleSheet.create({
  textHighlights: {
    color: '#377BF5',
  },
  icon: {
    padding: 20,
    marginTop: 10,
    // marginBottom: 30,
  },
  modal: {
    // justifyContent: 'center',
    // alignSelf: 'baseline',
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    // marginTop: 10,
    textAlign: 'center',
  },
  textDescription: {
    // fontWeight: '500',
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
  },
  modalContainer: {
    // flex: 1,
    // backgroundColor: 'red',
  },
  text2: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: '500',
    letterSpacing: 0.25,
    color: '#fff',
  },
  highlights: {
    color: '#377BF5',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    backgroundColor: 'gray',
  },

  header: {
    flex: 1,
    margin: 10,
  },
  middle: {
    flex: 2,
    alignItems: 'center',
    marginTop: 50,
  },
  footer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
    // backgroundColor: 'red',
  },
});
