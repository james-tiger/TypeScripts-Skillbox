import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme, setTheme, selectTheme, ThemeType } from './themeSlice'

export function ThemeToggle() {
  const dispatch = useAppDispatch()
  const currentTheme = useAppSelector(selectTheme)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  const handleSelectTheme = (theme: ThemeType) => {
    dispatch(setTheme(theme))
  }

  return (
    <div className="theme-toggle">
      <h2>Theme Settings</h2>
      <div>
        <button onClick={handleToggleTheme}>
          Toggle Theme (Current: {currentTheme})
        </button>
      </div>
      <div className="row">
        <button 
          onClick={() => handleSelectTheme('light')}
          style={{ 
            backgroundColor: currentTheme === 'light' ? '#3b82f6' : '#1a1a1a',
            borderColor: currentTheme === 'light' ? '#3b82f6' : 'transparent'
          }}
        >
          Light
        </button>
        <button 
          onClick={() => handleSelectTheme('dark')}
          style={{ 
            backgroundColor: currentTheme === 'dark' ? '#3b82f6' : '#1a1a1a',
            borderColor: currentTheme === 'dark' ? '#3b82f6' : 'transparent'
          }}
        >
          Dark
        </button>
        <button 
          onClick={() => handleSelectTheme('blue')}
          style={{ 
            backgroundColor: currentTheme === 'blue' ? '#3b82f6' : '#1a1a1a',
            borderColor: currentTheme === 'blue' ? '#3b82f6' : 'transparent'
          }}
        >
          Blue
        </button>
      </div>
    </div>
  )
} 