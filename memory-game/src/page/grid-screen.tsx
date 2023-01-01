import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { GridController } from "../controller/grid-controller";
import { RouteParams } from "../navigation/route-navigator";
import { color } from "../variable/color";
import GridComponent from "../component/grid";

/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `GridScreen`
 */
const GridScreen = (): JSX.Element => {

    const routeParams = useRoute<RouteProp<RouteParams>>();

    return (
        <SafeAreaView style = {{ backgroundColor: color.backgroundColor, flex: 1 }}>
            <GridComponent
                grid = {GridController
                    .getInstance()
                    .generateGrid(
                        routeParams.params?.cardNumber!
                    )}
            />
        </SafeAreaView>
    );
}

export default GridScreen;