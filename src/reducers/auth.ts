import { LOGIN, LOGOUT } from '../actions';

const initialState = { token: '' }

export default (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return { token: 'login' }
    case LOGOUT:
      return { token: '' }
    default:
      return { token: '' }
  }
}
