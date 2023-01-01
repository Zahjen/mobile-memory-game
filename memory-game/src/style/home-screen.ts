import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { color } from "../variable/color";
import { fontSize } from "../variable/font-size";

export const homeScreenStyle = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: color.text,
        fontSize: fontSize.title,
        fontWeight: "bold",
        fontFamily: "PoppinsBold"
    } 
})