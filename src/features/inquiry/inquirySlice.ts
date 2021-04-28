import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppThunk, AppDispatch } from '~/app/store'

interface Inquiry {
  inquiryData: Array<string>
  isLoading: boolean
  isError: boolean
}

const initialState: Inquiry = {
  inquiryData: [],
  isLoading: false,
  isError: false,
}

const inquirySlice = createSlice({
  name: 'inquiry',
  initialState,
  reducers: {
    getInquiryDataStart(state): void {
      state.isLoading = true
      state.isError = false
    },
    getInquiryDataSuccess(state, action: PayloadAction<Array<string>>): void {
      state.inquiryData = action.payload
      state.isLoading = false
    },
    getInquiryDataFailure(state): void {
      state.isLoading = false
      state.isError = true
    },
  },
})

const { actions, reducer } = inquirySlice
export const {
  getInquiryDataStart,
  getInquiryDataSuccess,
  getInquiryDataFailure,
} = actions

export const fetchInquiryData = (): AppThunk => async (
  dispatch: AppDispatch,
): Promise<void> => {
  try {
    dispatch(getInquiryDataStart())
    const { data } = await new Promise((resolve) => {
      setTimeout(() => resolve({ data: ['a', 'b', 'c'] }), 10000)
    })
    dispatch(getInquiryDataSuccess(data))
  } catch (error) {
    dispatch(getInquiryDataFailure())
  }
}

export default reducer
