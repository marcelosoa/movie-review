export function isSuccessStatusCodeUtil(code: number) {
  const [firstDigit] = code.toString().split('')
  return firstDigit === '2'
}
