import { createSlice } from '@reduxjs/toolkit'

export const LocaleSlice = createSlice({
  name: 'locale',
  initialState: {
    value: "en"
  },
  reducers: {
    setLocale: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLocale } = LocaleSlice.actions

export default LocaleSlice.reducer