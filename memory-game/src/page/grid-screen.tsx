import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView } from "react-native";
import { GridScreenController } from "../controller/grid-screen-controller";
import SquareCell from "../element/square-cell";
import { Cell } from "../modele/cell";
import { Grid } from "../modele/grid";
import { RouteParams } from "../navigation/route-navigator";
import { gridScreenStyle } from "../style/grid-screen";
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
            <View style = { gridScreenStyle.container }>
                {
                    GridScreenController
                        .getInstance()
                        .generateGrid(
                            routeParams.params?.cardNumber!
                        ).getCells.map((cell: Cell) => {
                            return <SquareCell
                                key = { cell.getId }
                                cell = { cell }
                            />
                        })
                }
            </View>
        </SafeAreaView>
    );
}

export default GridScreen;