import { getData } from './api.js';
export function solution() {
  // Tu código aquí 👈
  getData()
    .then(response => {
      console.log(response)
    })
}

solution();