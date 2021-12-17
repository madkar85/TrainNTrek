import Routes from './routes/Routes'
import './Style.css'
import { StatsProvider } from './shared/provider/StatsProvider'
import { WeatherProvider } from './shared/provider/WeatherProvider'
import { UserProvider } from './shared/provider/UserProvider'
import { RunningDistanceProvider } from './shared/provider/RunningDistanceProvider'
import { CyclingDistanceProvider } from './shared/provider/CyclingDistanceProvider'
import { HikingDistanceProvider } from './shared/provider/HikingDistanceProvider'
import { RunningPaceProvider } from './shared/provider/RunningPaceProvider'
import { RunningTimeProvider } from './shared/provider/RunningTimeProvider'
import { CyclingTimeProvider } from './shared/provider/CyclingTimeProvider'
import { SportTypeProvider } from './shared/provider/SportTypeProvider'
import { CyclingPaceProvider } from './shared/provider/CyclingPaceProvider'
import { HikingPaceProvider } from './shared/provider/HikingPaceProvider'
import { HikingTimeProvider } from './shared/provider/HikingTimeProvider'


function App() {
  return (
    <UserProvider>
      <StatsProvider>
        <WeatherProvider>
          <RunningDistanceProvider>
            <CyclingDistanceProvider>
              <HikingDistanceProvider>
                <RunningPaceProvider>
                  <CyclingPaceProvider>
                    <HikingPaceProvider>
                      <RunningTimeProvider>
                        <CyclingTimeProvider>
                          <HikingTimeProvider>
                            <SportTypeProvider>
                              <div className='App'>
                                <Routes />
                              </div>
                            </SportTypeProvider>
                          </HikingTimeProvider>
                        </CyclingTimeProvider>
                      </RunningTimeProvider>
                    </HikingPaceProvider>
                  </CyclingPaceProvider>
                </RunningPaceProvider>
              </HikingDistanceProvider>
            </CyclingDistanceProvider>
          </RunningDistanceProvider>
        </WeatherProvider>
      </StatsProvider>
    </UserProvider>
  )
}

export default App
