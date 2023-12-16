import { PropsWithChildren, ReactNode } from "react"
import { TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps } from "react-native"

type ButtonProps = PropsWithChildren & TouchableOpacityProps & {
  startIcon?: ReactNode
  endIcon?: ReactNode
  variant: 'primary' | 'secondary'
  onPress: () => void
}

export const ButtonComponent = ({startIcon, endIcon, children, variant = 'primary',  onPress, ...rest}: ButtonProps) => {
  return (
    <View style={[styles.container, styles[variant]]}>
      {startIcon}
      <TouchableOpacity style={styles.button} onPress={onPress} {...rest}>
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
      {endIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    borderRadius: 999,
    width: 256,
    padding: 16,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    alignItems: 'center'
  },
  text: {
    color: '#f4f7fd',
    fontSize: 16,
    fontWeight: '600'
  },
  primary: {
    backgroundColor: '#6f8698',
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  secondary: {
    backgroundColor: '#baafc6',
    shadowColor: '#000',
    shadowOffset: {width: -1, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})