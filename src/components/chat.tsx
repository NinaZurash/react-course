import { Dispatch } from 'react'

export type ContactType = {
  id: number
  name: string
  email: string
}

type Props = {
  contact: ContactType
  message: string
  dispatch: Dispatch<any>
}
export default function Chat({ contact, message, dispatch }: Props) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          })
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(`Sending "${message}" to ${contact.email}`)
          dispatch({
            type: 'sent_message',
          })
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  )
}
