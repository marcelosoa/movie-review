import { Stack } from 'expo-router'
import { AuthenticationProvider } from '@mobile/context'
export default function LayoutStack() {
  return (
    <AuthenticationProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home/home" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/register"
          options={{ headerTitle: 'Cadastro', headerBackVisible: false }}
        />
      </Stack>
    </AuthenticationProvider>
  )
}
