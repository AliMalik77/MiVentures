import React from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {NavigationProp} from '@react-navigation/native';
import Header from '../../components/investorInfo/Header';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    streetAddress: yup.string().required(),
    apt: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.number().required(),
    dob: yup.date().required(),
    ssn: yup.string().required(),
  })
  .required();

const InvestorInfo = ({
  navigation,
}: {
  navigation: NavigationProp<{
    Login: undefined;
  }>;
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    Alert.alert('data submitted Successfully');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Header onPress={handleBack} />

          <View>
            <View style={styles.nameFields}>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 10,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>First Name (Legal)</Text>
                      <TextInput
                        textContentType="name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="firstName"
                />

                <View style={styles.divider} />
                {errors.firstName && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
              </View>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 10,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>Last Name (Legal)</Text>
                      <TextInput
                        textContentType="name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="lastName"
                />

                <View style={styles.divider} />
                {errors.lastName && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
              </View>
            </View>
            <View style={{marginTop: 15}}>
              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <>
                    <Text>Street Address </Text>
                    <TextInput
                      textContentType="streetAddressLine1"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="streetAddress"
              />

              <View style={styles.divider} />
              {errors.streetAddress && (
                <Text style={styles.colorRed}>This is required.</Text>
              )}
            </View>
            <View style={styles.fieldsDisplay}>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 14,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>Apt, Suite, Etc. </Text>
                      <TextInput
                        textContentType="sublocality"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="apt"
                />

                <View style={styles.divider} />
                {errors.apt && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
              </View>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 14,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>City</Text>
                      <TextInput
                        textContentType="addressCity"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="city"
                />

                <View style={styles.divider} />
                {errors.city && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
              </View>
            </View>

            <View style={styles.fieldsDisplay}>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 14,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>State </Text>
                      <TextInput
                        textContentType="addressState"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="state"
                />

                <View style={styles.divider} />
                {errors.state && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
              </View>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 14,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>Zip Code</Text>
                      <TextInput
                        textContentType="postalCode"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="zipCode"
                />

                <View style={styles.divider} />
                {errors.zipCode && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
              </View>
            </View>

            <View style={styles.fieldsDisplay}>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 14,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>Date of Birth </Text>
                      <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="dob"
                />

                <View style={styles.divider} />
                {errors.dob && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
              </View>
              <View style={styles.w50}>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 14,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <>
                      <Text>SSN (Last four only)</Text>
                      <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="ssn"
                />
                {errors.ssn && (
                  <Text style={styles.colorRed}>This is required.</Text>
                )}
                <View style={styles.divider} />
              </View>
            </View>

            <Text style={styles.alert}>
              Do not use a P.O. box as an address. Please use the address found
              on your state-issued ID.
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={styles.btnWrapper}>
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.text}>Confirm Investor Info</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default InvestorInfo;

const styles = StyleSheet.create({
  btnWrapper: {width: '90%', alignSelf: 'center', bottom: 30},
  divider: {
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '90%',
  },
  alert: {
    color: '#EA4335',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    marginTop: 24,
  },
  colorRed: {
    color: 'red',
  },
  nameFields: {display: 'flex', flexDirection: 'row', marginTop: 50},

  w50: {width: '50%'},
  container: {flex: 1, width: '90%', alignSelf: 'center'},
  fieldsDisplay: {display: 'flex', flexDirection: 'row', marginTop: 15},
  button: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    backgroundColor: '#377BF5',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
