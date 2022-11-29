import React from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ModalProps = {
  isModalVisible: boolean;
  setModalVisible: (val: boolean) => void;
  toggleModal: (val: any) => void;
  Iconn: any;
  title: string;
  headerPara: string;
  middlePara: string;
  footerPara: string;
};

const ModalComponent = ({
  isModalVisible,
  setModalVisible,
  toggleModal,
  Iconn,
  title,
  headerPara,
  middlePara,
  footerPara,
}: ModalProps) => {
  return (
    <View style={styles.mt20}>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={isModalVisible}
        style={{
          width: Dimensions.get('window').width * 0.5,
          height: Dimensions.get('window').height * 0.5,
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <View style={styles.icon}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}>
                {Iconn}
              </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
              <View style={styles.title}>
                <Text style={styles.text}>{title}</Text>
              </View>
              <View style={{width: '90%', alignItems: 'center'}}>
                <View style={styles.mt20}>
                  <Text style={styles.textDescription}>{headerPara}</Text>
                </View>
                <View style={styles.mt20}>
                  <Text style={styles.textDescription}>
                    You can track how much you invest and your investment limits
                    all on the Miventure App.
                  </Text>
                </View>

                <View style={{marginTop: 20, marginBottom: 50}}>
                  <Text style={styles.textDescription}>
                    Learn more in our Educational Materials .
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 40,
  },
  modalContainer: {flex: 1, justifyContent: 'center'},
  text: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    textAlign: 'center',
  },
  mt20: {marginTop: 20},
  textDescription: {
    textAlign: 'center',
    fontSize: 17,
    color: 'black',
  },
  textHighlights: {
    color: '#377BF5',
  },
  icon: {
    padding: 20,
    marginTop: 10,
  },
  title: {width: '80%', alignItems: 'center'},
});
