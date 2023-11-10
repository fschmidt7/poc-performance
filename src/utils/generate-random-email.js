export function generateRandomEmail() {
  const randomNum = Math.floor(Math.random() * 1000000)
  return `performance.teste+${randomNum}@teste.com.br`
}
