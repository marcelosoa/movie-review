import { ReactNode } from "react"
import { TextInput, View, StyleSheet } from "react-native"

type InputProps = {
  placeholder: string;
  error?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  secureTextEntry?: any
  endIcon?: ReactNode;
  onChangeText: (value: string) => void
  value: string;
  placeholderTextColor?: string
};

export const TextInputComponent = ({ placeholder, startIcon, endIcon, placeholderTextColor, value, onChangeText }: InputProps) => {
  return (
    <View style={styles.container}>
      {startIcon}
      <TextInput 
        placeholder={placeholder} 
        placeholderTextColor={placeholderTextColor} 
        style={styles.input} 
        autoCapitalize="none" 
        value={value}
        onChangeText={onChangeText}
      />
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
    backgroundColor: '#baafc6',
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
},
input: {
    flex: 1,
    color: '#111418',
    alignItems: 'center'
}
});
