import { check } from 'k6'
import performancePOC from '../../services/test-poc/index.js'
import { readCSV } from '../../utils/file-reader.js'
import { getRandomUser } from '../../utils/user-data.js'
import { smokeTestOptions } from '../../configs/smoke-test/options.js'

export const options = smokeTestOptions()

const idUser = readCSV('id_number.csv')

export default function () {
  const poc = new performancePOC()

  const randomUser = getRandomUser(idUser)

  if (!randomUser || !randomUser.idUser) {
    console.error('Error: Invalid user data', randomUser)
    return
  } // validação caso queira saber se a informação passda esta sendo recuperada de forma correta

  console.log('Selected User:', randomUser.idUser)

  const response = poc.testPOC(randomUser.idUser)

  check(response, {
    'is status 201': (r) => r.status === 201,
  })
}
