import {createStore} from 'redux'
import {PhotoReducer} from './reducers/photoReducer'

const store = createStore(photoReducer)

export default store