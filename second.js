export const handleError = (err) => {
  console.log(err)
}

function outer () {
  let count = 0;
  return function inner() {
    return ++count
  }
}

export const counter = outer()

export class Api {
  constructor(url){
    this.url = url
  }
  
  async fetchPeople () { 
    return await fetch(this.url)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      else {
        handleError()
      }
    })
  }
}