import SelectedParkScreen from "./screens/SelectedParkScreen";
import SelectedActivityParkListScreen from "./screens/SelectedActivityParkListScreen";
import ParkListScreen from "./screens/ParkListScreen";
import React, { useEffect, useState } from "react";
import NewsScreen from "./screens/NewsScreen";
import AboutScreen from "./screens/AboutScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//const Stack = createNativeStackNavigator();

//function HomeScreen()

function App() {
  //State for ParkListScreen selection

  const [userPark, setUserPark] = useState();
  const [newsButton, setNewsButton] = useState();
  const [aboutButton, setAboutButton] = useState();
  const [userSingleActivity, setUserSingleActivity] = useState();
  const [activityButton, setActivityButton] = useState();

  function pickedSingleActivityHandler(pickedActivity) {
    setUserSingleActivity(pickedActivity);
  }

  function resetSingleActivityHandler(pickedActivity) {
    setUserSingleActivity("");
  }

  function pickedActivityScreenHandler(pickedActivityScreen) {
    setActivityButton(pickedActivityScreen);
  }

  function resetActivityScreenHandler() {
    setActivityButton("");
  }

  function pickedParkHandler(pickedPark) {
    setUserPark(pickedPark);
  }
  function resetParkHandler() {
    setUserPark("");
  }

  function pickedNewsHandler(pickedNews) {
    setNewsButton(pickedNews);
  }

  function resetNewsHandler() {
    setNewsButton("");
  }

  function pickedAboutHandler(pickedAbout) {
    setAboutButton(pickedAbout);
  }

  function resetAboutHandler() {
    setAboutButton("");
  }

  let screen = (
    // <ActivitiesScreen />
    <ParkListScreen
      onPickPark={pickedParkHandler}
      onPickNews={pickedNewsHandler}
      onPickAbout={pickedAboutHandler}
      onPickActivities={pickedActivityScreenHandler}
    />
  );
  if (newsButton) {
    screen = (
      <NewsScreen
        resetNews={resetNewsHandler}
        onPickAbout={pickedAboutHandler}
        resetActivities={resetActivityScreenHandler}
        onPickActivities={pickedActivityScreenHandler}
      />
    );
  } else if (aboutButton) {
    screen = (
      <AboutScreen
        resetAbout={resetAboutHandler}
        resetNews={resetNewsHandler}
        onPickNews={pickedNewsHandler}
        onPickAbout={pickedAboutHandler}
        onPickActivities={pickedActivityScreenHandler}
      />
    );
  } else if (userSingleActivity) {
    screen = (
      <SelectedActivityParkListScreen
        userSingleActivity={userSingleActivity}
        resetSingleActivity={resetSingleActivityHandler}
        onPickActivities={pickedActivityScreenHandler}
        resetPark={resetParkHandler}
        onPickAbout={pickedAboutHandler}
        onPickNews={pickedNewsHandler}
        onPickPark={pickedParkHandler}
      />
    );
  } else if (activityButton) {
    screen = (
      <ActivitiesScreen
        resetActivities={resetActivityScreenHandler}
        onPickNews={pickedNewsHandler}
        onPickAbout={pickedAboutHandler}
        onPickSingleActivity={pickedSingleActivityHandler}
      />
    );
  } else if (userPark) {
    screen = (
      <SelectedParkScreen
        userPark={userPark}
        resetPark={resetParkHandler}
        onPickAbout={pickedAboutHandler}
        onPickNews={pickedNewsHandler}
        onPickActivities={pickedActivityScreenHandler}
      />
    );
  } else console.log(userPark);

  return screen;
  //<ParkListScreen />;
}

export default App;
/*
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/
