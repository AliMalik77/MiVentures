import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import ModalComponent from '../components/Modal';

const Modal1 = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={!isModalVisible ? styles.container : styles.container2}>
      <ModalComponent
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        toggleModal={toggleModal}
        icon={'close'}
        title={'Regulation Crowdfunding'}
        headerPara={`Regulation Crowdfunding (“Reg CF”) is a law that lets anyone that is 18 years old or older invest in a business with certain limitations such as how much they can invest in any 12-month period based on their yearly income, net worth, and previous Reg CF investments.`}
        middlePara={` You can track how much you invest and your investment limits all on the Miventure App.`}
        footerPara={' Learn more in our Educational Materials .'}
      />

      <Button
        title="Click To Open Modal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
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
  },
  modal: {
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
    textAlign: 'center',
  },
  textDescription: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
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
  },
});
