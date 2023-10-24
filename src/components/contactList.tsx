import { Dispatch } from 'react'
import { ContactType } from './chat'

type ContactListProps = {
  contacts: ContactType[]
  selectedId: number
  dispatch: Dispatch<any>
}

export default function ContactList({
  contacts,
  selectedId,
  dispatch,
}: ContactListProps) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({
                  type: 'changed_selection',
                  contactId: contact.id,
                })
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
