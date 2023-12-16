
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { ButtonComponent, TextFieldComponent, TextInputComponent } from '@mobile/ui'
import { StyleSheet, View } from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>
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
          <TextFieldComponent>Forgot Password</TextFieldComponent>
          <TextFieldComponent>Create Account</TextFieldComponent>
      </View>
      <ButtonComponent variant="primary" onPress={() => console.log('pressionado +1')}>Teste</ButtonComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f7fd',
    borderTopLeftRadius: 9,
    width: 'auto',
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
})
