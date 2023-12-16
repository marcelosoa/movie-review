import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  ButtonComponent,
  LottieComponent,
  TextFieldComponent,
  TextInputComponent,
} from '@mobile/ui'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>
      <LottieComponent />

      <View style={styles.form}>
        <TextInputComponent
          placeholder="E-mail"
          startIcon={<MaterialCommunityIcons name="mail" size={24} color={'#f5f8f7'} />}
          placeholderTextColor={'#fff'}
        />
        <TextInputComponent
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
