import { Animated, StyleSheet } from "react-native";
import { color } from "../variable/color";

export const squareCellStyle = StyleSheet.create({
    container: {
        width: 70,
        height: 70,
        backgroundColor: color.primary,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 3
    },
    iconVisible: {
        color: color.text,
        fontSize: 35,
    },
})

export const animatedCellStyle = (animation: Animated.Value) => {
    return {
        transform: [{rotate: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['180deg', '0deg']
        })}],
        opacity: animation
    }
}