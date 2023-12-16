import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  ButtonComponent,
  LottieComponent,
  TextFieldComponent,
  TextInputComponent,
} from '@mobile/ui'
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <LottieComponent source={require('../../assets/images/lottie1.json')}/>

      <View style={styles.form}>
        <TextInputComponent
          onChangeText={(email) => setEmail(email)}
          value={email}
          placeholder="E-mail"
          startIcon={<MaterialCommunityIcons name="mail" size={24} color={'#f5f8f7'} />}
          placeholderTextColor={'#fff'}
        />
        <TextInputComponent
          onChangeText={(password) => setPassword(password)}
          value={password}
          placeholder="Password"
          startIcon={<MaterialCommunityIcons name="mail" size={24} color={'#f5f8f7'} />}
          placeholderTextColor={'#fff'}
        />
        <View style={styles.userSection}>
          <TouchableOpacity onPress={() => console.log('crico')}>
            <TextFieldComponent>Forgot Password</TextFieldComponent>
          </TouchableOpacity>

          <TouchableOpacity>
            <TextFieldComponent>Create Account</TextFieldComponent>
          </TouchableOpacity>
        </View>
      </View>
      <ButtonComponent variant="primary" onPress={() => console.log('pressionado +1')}>
        Teste
      </ButtonComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    borderTopLeftRadius: 9,
    height: '100%'
  },
  userSection: {
    marginTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: '100%',
  },
  form: {
    height: '20%',
    alignItems: 'center',
  },
})
