import { useAppSelector } from './app/hooks'
import { Counter } from './features/counter/Counter'
import { ThemeToggle } from './features/theme/ThemeToggle'
import { Quotes } from './features/quotes/Quotes'
import { selectBackgroundColor, selectTextColor } from './features/theme/themeSlice'

function App() {
  const backgroundColor = useAppSelector(selectBackgroundColor)
  const textColor = useAppSelector(selectTextColor)

  return (
    <div 
      className="app-container"
      style={{ 
        backgroundColor,
        color: textColor,
        minHeight: '100vh'
      }}
    >
      <h1>Redux Toolkit Theme Demo</h1>
      
      <div className="card">
        <Counter />
      </div>
      
      <ThemeToggle />
      
      <div className="card">
        <Quotes />
      </div>
    </div>
  )
}

export default App 