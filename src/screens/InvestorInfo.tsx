import React, {useEffect} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

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

const InvestorInfo = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    Alert.alert('data submitted Successfully');
  };

  return (
    <>
      <KeyboardAwareScrollView>
        <View style={{flex: 1, width: '90%', alignSelf: 'center'}}>
          <View>
            <TouchableOpacity style={{marginTop: 50}}>
              <MaterialIcons name="arrow-back-ios" size={25} color="black" />
            </TouchableOpacity>

            <Text
              style={{
                marginTop: 30,
                fontSize: 24,
                fontWeight: '800',
                color: 'black',
              }}>
              Investor Information
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
              This info is required by U.S. Banking laws to verify your identity
              and is protected using{' '}
              <Text style={{color: '#377BF5'}}>bank-level security.</Text>
            </Text>
          </View>

          <View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 50}}>
              <View style={{width: '50%'}}>
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="firstName"
                />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                  }}
                />
                {errors.firstName && (
                  <Text style={{color: 'red'}}>This is required.</Text>
                )}
              </View>
              <View style={{width: '50%'}}>
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="lastName"
                />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                  }}
                />
                {errors.lastName && (
                  <Text style={{color: 'red'}}>This is required.</Text>
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
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
                name="streetAddress"
              />

              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#EAEAEA',
                  width: '95%',
                }}
              />
              {errors.streetAddress && (
                <Text style={{color: 'red'}}>This is required.</Text>
              )}
            </View>
            <View style={styles.fieldsDisplay}>
              <View style={{width: '50%'}}>
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="apt"
                />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                  }}
                />
                {errors.apt && (
                  <Text style={{color: 'red'}}>This is required.</Text>
                )}
              </View>
              <View style={{width: '50%'}}>
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="city"
                />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                  }}
                />
                {errors.city && (
                  <Text style={{color: 'red'}}>This is required.</Text>
                )}
              </View>
            </View>

            <View style={styles.fieldsDisplay}>
              <View style={{width: '50%'}}>
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="state"
                />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                    //   marginTop: 20,
                  }}
                />
                {errors.state && (
                  <Text style={{color: 'red'}}>This is required.</Text>
                )}
              </View>
              <View style={{width: '50%'}}>
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
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    </>
                  )}
                  name="zipCode"
                />

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                    //   marginTop: 20,
                  }}
                />
                {errors.zipCode && (
                  <Text style={{color: 'red'}}>This is required.</Text>
                )}
              </View>
            </View>

            <View style={styles.fieldsDisplay}>
              <View style={{width: '50%'}}>
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

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                    //   marginTop: 20,
                  }}
                />
                {errors.dob && (
                  <Text style={{color: 'red'}}>This is required.</Text>
                )}
              </View>
              <View style={{width: '50%'}}>
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
                  <Text style={{color: 'red'}}>This is required.</Text>
                )}
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#EAEAEA',
                    width: '90%',
                    //   marginTop: 20,
                  }}
                />
              </View>
            </View>

            <Text
              style={{
                color: '#EA4335',
                textAlign: 'center',
                fontWeight: '400',
                fontSize: 14,
                marginTop: 24,
              }}>
              Do not use a P.O. box as an address. Please use the address found
              on your state-issued ID.
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View style={{width: '90%', alignSelf: 'center', bottom: 30}}>
        <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.text}>Confirm Investor Info</Text>
        </Pressable>
      </View>
    </>
  );
};
export default InvestorInfo;

const styles = StyleSheet.create({
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
