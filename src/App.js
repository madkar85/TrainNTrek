import Routes from "./routes/Routes"
import "./Style.css"
import { StatsProvider } from "./shared/provider/StatsProvider"
import { WeatherProvider } from "./shared/provider/WeatherProvider"
import { UserProvider } from "./shared/provider/UserProvider"

function App() {
  return (
    <UserProvider>
      <StatsProvider>
        <WeatherProvider>
          <div className="App">
            <Routes />
          </div>
        </WeatherProvider>
      </StatsProvider>
    </UserProvider>
  )
}

export default App
