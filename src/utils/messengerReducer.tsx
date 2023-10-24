export type Action = {
  type: string
  contactId: number
  message: string
}

export type InitialState = {
  selectedId: number
  messages: {
    0: string
    1: string
    2: string
  }
}

export const initialState: InitialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob',
  },
}

export function messengerReducer(
  state: InitialState,
  action: Action,
): InitialState {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
      }
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      }
    }
    case 'sent_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        },
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
