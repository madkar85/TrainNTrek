import React, { useContext } from "react";
import { StatsContext } from "../../shared/provider/StatsProvider";
import "./ActivityCard.css";

// Acitvitycards displayed on the statistics page

function ActivityCards() {
  const [userStats, setUserStats] = useContext(StatsContext);

  const topActivities = [
    {
      key: 1,
      name: "Most recent workout",
      type: userStats[0].name,
      distance: userStats[0].distance,
      speed: userStats[0].average_speed,
    },
    {
      key: 2,
      name: "Second most recent workout",
      type: userStats[1].name,
      distance: userStats[1].distance,
      speed: userStats[1].average_speed,
    },
    {
      key: 3,
      name: "Third most recent workout",
      type: userStats[2].name,
      distance: userStats[2].distance,
      speed: userStats[2].average_speed,
    },
  ];

  const workout = topActivities.map(function (activity) {
    return (
      <>
        <section className="cardGrid">
          <div className="activityCards">
            <div className="activityCardInfo">
              <h2>{activity.name}</h2>
              <h2>Type: {activity.type}</h2>
              <h2>Distance: {Math.round(activity.distance) / 1000} km</h2>
              <h2>Pace: {Math.round(activity.speed * 100) / 100} m/s</h2>
            </div>
          </div>
        </section>
      </>
    );
  });

  return <>{workout}</>;
}
export default ActivityCards;
