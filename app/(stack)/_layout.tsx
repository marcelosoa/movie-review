import { Stack } from 'expo-router'
import { AuthenticationProvider } from '@mobile/context'
import { InjectableProvider } from '../../context/injectable/injectable-provider'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function LayoutStack() {
  return (
  <InjectableProvider>
    <AuthenticationProvider>
      <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home/home" options={{ headerShown: false }} />
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/register"
          options={{ headerTitle: 'Cadastro', headerBackVisible: false }}
        />
      </Stack>
      </QueryClientProvider>
    </AuthenticationProvider>
  </InjectableProvider>
  )
}
