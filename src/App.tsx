import { messengerReducer, initialState } from './utils/messengerReducer.tsx'
import Chat, { ContactType } from './components/chat.tsx'
import ContactList from './components/contactList.tsx'
import { useReducer } from './utils/myReact.tsx'

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  // @ts-ignore
  const message = state.messages[state.selectedId]
  const contact = contacts.find((c) => c.id === state.selectedId) || contacts[0]
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  )
}

const contacts: ContactType[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
]
