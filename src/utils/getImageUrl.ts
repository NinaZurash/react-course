import { Person } from '../constants/people'

export function getImageUrl(person: Person) {
  const url = 'https://i.imgur.com/' + person.imageId + 's.jpg'
  console.log(url)
  return url
}
