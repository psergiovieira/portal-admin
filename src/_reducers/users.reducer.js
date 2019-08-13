import { userConstants } from '../_constants/user.constants';

export function user(state = {}, action) {
  
  switch (action.type) {
    
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return action.user;
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}