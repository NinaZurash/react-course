import { Dispatch, useState } from 'react'
import { Action, InitialState } from './messengerReducer'

export function useReducer(reducer: (state: InitialState,
  action: Action) => InitialState , initialState: InitialState) : [state:InitialState, dispatch: Dispatch<any>] {
  const [state, setState] = useState(initialState)

  function dispatch(action: Action) {
    setState(reducer(state, action))
  }

  return [state, dispatch]
}
