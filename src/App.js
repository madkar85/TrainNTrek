import Routes from "./routes/Routes";
import "./Style.css";
import { StatsProvider } from "./shared/provider/StatsProvider";
import { WeatherProvider } from "./shared/provider/WeatherProvider";
import { UserProvider } from "./shared/provider/UserProvider";
import { GoalDistanceProvider } from "./shared/provider/GoalDistanceProvider";
import { GoalPaceProvider } from "./shared/provider/GoalPaceProvider";
import { GoalTimeProvider } from "./shared/provider/GoalTimeProvider";

function App() {
  return (
    <UserProvider>
      <StatsProvider>
        <WeatherProvider>
          <GoalDistanceProvider>
            <GoalPaceProvider>
              <GoalTimeProvider>
                <div className="App">
                  <Routes />
                </div>
              </GoalTimeProvider>
            </GoalPaceProvider>
          </GoalDistanceProvider>
        </WeatherProvider>
      </StatsProvider>
    </UserProvider>
  );
}

export default App;
