import { people } from './constants/people'
import { getImageUrl } from './utils/getImageUrl'

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />

      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  ))
  return <ul>{listItems}</ul>
}
