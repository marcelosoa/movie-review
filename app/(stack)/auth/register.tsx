import { Text, View, StyleSheet } from "react-native";
import { TextInputComponent, ButtonComponent } from '@mobile/ui'
import { useRouter } from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@mobile/config";

type formLogin = {
  email: string,
  password: string
}

export default function Register () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const signUp = async ({email, password}: formLogin) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/home/home')
    } catch (error) {
     console.log(error)
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Register</Text>

      <View style={styles.form}>
        <TextInputComponent 
          placeholder="Email" 
          value={email} 
          onChangeText={(email) => setEmail(email)}
        />
        <TextInputComponent 
          placeholder="Password" 
          value={password} 
          onChangeText={(password) => setPassword(password)}
        />
        <ButtonComponent variant="primary" onPress={() => signUp({email, password})}>Registrar</ButtonComponent>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    alignItems: 'center'
  },
  text: {
    marginTop: 24,
  },
  form: {
   alignItems: 'center'
  }
})