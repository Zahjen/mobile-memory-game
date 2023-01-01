import { Animated, Pressable, Easing } from "react-native";
import { Cell } from "../modele/cell";
import Fontisto from "react-native-vector-icons/Fontisto";
import { animatedCellStyle, squareCellStyle } from "../style/square-cell";
import React from "react";

export interface SquareCellProps {
    cell: Cell,
    onPress: (flipAnimation: Animated.Value) => void
}

const SquareCell: React.FC<SquareCellProps> = (props: SquareCellProps) => {

    const flipAnimation = React.useRef(new Animated.Value(0)).current;

    return (
        <Pressable
            style = { squareCellStyle.container }
            disabled = { !props.cell.getIsClickable }
            onPress = {() => props.onPress(flipAnimation)}>
            <Animated.View style = { animatedCellStyle(flipAnimation) }>
                <Fontisto
                    name = { props.cell.getIcon }
                    style = { squareCellStyle.iconVisible }/>
            </Animated.View>
        </Pressable>
    );
}


export default SquareCell;