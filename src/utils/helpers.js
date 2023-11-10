export function randomElement(list) {
  const element = list[Math.floor(Math.random() * list.length)]

  return element[0]
}
