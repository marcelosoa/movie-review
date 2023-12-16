import { ReactNode } from "react"
import { TextInput, TextInputProps, View, StyleSheet } from "react-native"

type TextInputComponentProps = TextInputProps & {
  placeholder: string,
  startIcon?: ReactNode
  endIcon?: ReactNode
}

export const TextInputComponent = ({ placeholder, startIcon, endIcon, placeholderTextColor }: TextInputComponentProps) => {
  return (
    <View style={styles.container}>
      {startIcon}
      <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} style={styles.input}/>
      {endIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 24,
    gap: 8,
    padding: 12,
    width: 384,
    borderRadius: 8,
    backgroundColor: '#c366e5',
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
},
input: {
    flex: 1,
    color: '#040818',
    alignItems: 'center'
}
});
