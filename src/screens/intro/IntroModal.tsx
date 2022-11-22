import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import ModalComponent from '../../components/common/Modal';
import Close from '../../../assets/svgs/Exiticon.svg';
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
        Iconn={<Close />}
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container2: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
