import { Outlet } from "react-router-dom"
import Header from './components/Header'

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <Header />
        <Outlet />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
