import { SharedArray } from 'k6/data'
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js'

export function readCSV(file) {
  return new SharedArray(
    file,
    () =>
      papaparse.parse(open(`../../data/${file}`), {
        header: false,
        skipEmptyLines: true,
      }).data
  )
}
