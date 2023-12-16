import { PropsWithChildren } from "react"
import { Text, View, StyleSheet } from "react-native"

export const TextFieldComponent = ({children}: PropsWithChildren) => {
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  }
})