import { Animated, Pressable, Easing } from "react-native";
import { Cell } from "../modele/cell";
import Fontisto from "react-native-vector-icons/Fontisto";
import { animatedCellStyle, squareCellStyle } from "../style/square-cell";
import React from "react";
import { CellController } from "../controller/cell-controller";

interface SquareCellProps {
    cell: Cell
}

const SquareCell: React.FC<SquareCellProps> = (props: SquareCellProps) => {

    const flipAnimation = React.useRef(new Animated.Value(0)).current;
    let flipRotation = 0;

    return (
        <Pressable
            style = { squareCellStyle.container }
            onPress = {() => flipRotation = CellController
                .getInstance()
                .onCellClicked(
                    flipRotation, 
                    flipAnimation
                )}>
            <Animated.View style = { animatedCellStyle(flipAnimation) }>
                <Fontisto
                    name = { props.cell.getIcon }
                    style = { squareCellStyle.iconVisible }/>
            </Animated.View>
        </Pressable>
    );
}


export default SquareCell;