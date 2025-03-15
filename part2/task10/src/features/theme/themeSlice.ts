import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define theme types
export type ThemeType = 'light' | 'dark' | 'blue'

// Define theme colors
export const themeColors = {
  light: '#ffffff',
  dark: '#333333',
  blue: '#3b82f6'
}

export interface ThemeState {
  currentTheme: ThemeType
  backgroundColor: string
  textColor: string
}

const initialState: ThemeState = {
  currentTheme: 'light',
  backgroundColor: themeColors.light,
  textColor: '#1a1a1a'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Rotate through themes: light -> dark -> blue -> light
      if (state.currentTheme === 'light') {
        state.currentTheme = 'dark'
        state.backgroundColor = themeColors.dark
        state.textColor = '#ffffff'
      } else if (state.currentTheme === 'dark') {
        state.currentTheme = 'blue'
        state.backgroundColor = themeColors.blue
        state.textColor = '#ffffff'
      } else {
        state.currentTheme = 'light'
        state.backgroundColor = themeColors.light
        state.textColor = '#1a1a1a'
      }
    },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload
      
      if (action.payload === 'light') {
        state.backgroundColor = themeColors.light
        state.textColor = '#1a1a1a'
      } else if (action.payload === 'dark') {
        state.backgroundColor = themeColors.dark
        state.textColor = '#ffffff'
      } else if (action.payload === 'blue') {
        state.backgroundColor = themeColors.blue
        state.textColor = '#ffffff'
      }
    }
  },
})

// Export actions
export const { toggleTheme, setTheme } = themeSlice.actions

// Export selectors
export const selectTheme = (state: RootState) => state.theme.currentTheme
export const selectBackgroundColor = (state: RootState) => state.theme.backgroundColor
export const selectTextColor = (state: RootState) => state.theme.textColor

export default themeSlice.reducer 