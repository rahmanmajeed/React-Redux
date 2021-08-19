import {SIGN_IN} from '../actions/action-types'

const isLogged = (state=false, action) => {
        switch (action.type) {
             case SIGN_IN:
                  return !state
             default:
                  return state
        }
}

export default isLogged;