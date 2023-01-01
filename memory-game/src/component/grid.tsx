import React from "react";
import { View, Animated } from "react-native";
import { GridController } from "../controller/grid-controller";
import SquareCell from "../component/square-cell";
import { Cell } from "../modele/cell";
import { Grid } from "../modele/grid";
import { gridScreenStyle } from "../style/grid-screen";

export interface GridComponentProps {
    grid: Grid
}

/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `GridScreen`
 */
const GridComponent: React.FC<GridComponentProps> = (props: GridComponentProps) => {
    let flippedCardAnimation: Animated.Value[] = [];
    let flippedCards: Cell[] = [];

    const [grid, setGrid]: [Cell[], React.Dispatch<React.SetStateAction<Cell[]>>] 
        = React.useState(props.grid.getCells)

    return (
        <View style = { gridScreenStyle.container }>
            {
                grid.map((cell: Cell) => {
                    return <SquareCell
                        key = { cell.getId }
                        cell = { cell }
                        onPress = {(flipAnimation) => GridController
                            .getInstance()
                            .onCellClick(
                                cell,
                                props.grid, 
                                setGrid,
                                flipAnimation,
                                flippedCardAnimation,
                                flippedCards
                            )}
                    />
                })
            }
        </View>
    );
}

export default GridComponent;