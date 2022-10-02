import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import { RouteParams } from "../navigation/route-navigator";
import { pageView } from "../style/view";
import { color } from "../variable/color";

/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `GridScreen`
 */
const GridScreen = (): JSX.Element => {

    const routeParams = useRoute<RouteProp<RouteParams>>();

    return (
        <SafeAreaView style = {{ backgroundColor: color.backgroundColor, flex: 1 }}>
            <View style = { pageView() }>
                <Text>
                    { routeParams.params?.cardNumber }
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default GridScreen;