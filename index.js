import { renderPeople } from './first.js';
import { handleError, Api } from './second.js'
const url='https://swapi.dev/api/people';

const main = async ()=> {
  try {
    const api = new Api(url);
    const { results: people} = await api.fetchPeople();
    renderPeople(people)

  } catch (error) {
    handleError(error)
  }
}

main()
