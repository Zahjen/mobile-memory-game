import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import GridScreen from "../page/grid-screen";
import HomeScreen from "../page/home-screen";

export type RouteParams = { 
    HomeScreen: undefined; 
    GridScreen: {
        cardNumber: number
    }; 
} 

const Stack = createNativeStackNavigator<RouteParams>(); 

export const RouteNavigator = () => { 
    return ( 
        <Stack.Navigator>
            <Stack.Group> 
                <Stack.Screen 
                    name = "HomeScreen" 
                    component = { HomeScreen } 
                    options = {{
                        headerShown: false
                    }} /> 
                <Stack.Screen 
                    name = "GridScreen" 
                    component = { GridScreen } 
                    options = {{
                        animation: "slide_from_right",
                        headerShown: false
                    }} /> 
            </Stack.Group> 
        </Stack.Navigator>
    )
}