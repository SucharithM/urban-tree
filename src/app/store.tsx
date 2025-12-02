import { configureStore } from '@reduxjs/toolkit'
import localeReducer from './LocaleSlice'


export default configureStore({
  reducer: {
    locale: localeReducer
  }
})