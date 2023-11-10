export function getRandomUser(usersList) {
  const user = usersList[Math.floor(Math.random() * usersList.length)]

  if (Array.isArray(user) && user.length > 0) {
    return { idUser: user[0] }
  }
  return null
}
