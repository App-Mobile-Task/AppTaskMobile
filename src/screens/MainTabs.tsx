import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import MainScreen from "./MainScreen";
import CreateTaskScreen from "./CreateTaskScreen";
import LoginScreen from "./LoginScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#EB4435",
        tabBarInactiveTintColor: "#999",
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarIcon: ({ color, size }) => {

          let iconName: any = "circle";

          switch (route.name) {
            case "Main":
              iconName = "home";
              break;
            case "CreateTask":
              iconName = "add-box";
              break;
            case "LoginScreen":
                iconName = "login";
                break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="CreateTask" component={CreateTaskScreen} />
      <Tab.Screen name="LoginScreen" component={LoginScreen} />
    </Tab.Navigator>
  );
}