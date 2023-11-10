import http from 'k6/http'
import { headers } from './headers.js'

export default class performancePOC {
  testPOC(idUser) {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    const payload = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: `${idUser}`,
    })
    const params = {
      headers: headers(),
    }

    return http.post(url, payload, params)
  }
}
