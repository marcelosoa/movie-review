import { Stack } from "expo-router";

export default function LayoutStack () {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
    </Stack>
  )
}