import { combineReducers } from '@reduxjs/toolkit'

import inquiryReducer from '~/features/inquiry/inquirySlice'

const rootReducer = combineReducers({
  inquiry: inquiryReducer,
})

export default rootReducer
