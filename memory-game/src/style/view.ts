import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { padding } from "../variable/padding";

/**
 * Style relatif à la globalité d'une page, i.e. page contenant tout les éléments.
 * 
 * @returns Vue globale d'une page
 */
export const pageView = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingVertical: padding.view.vertical,
        paddingHorizontal: padding.view.horizontal,
        width: '100%'
    }
})