import { StyleProp, ViewStyle } from "react-native";
import { padding } from "../variable/padding";

/**
 * Style relatif à la globalité d'une page, i.e. page contenant tout les éléments.
 * 
 * @returns Vue globale d'une page
 */
export const pageView = (): StyleProp<ViewStyle> => {
    return {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingVertical: padding.view.vertical,
        paddingHorizontal: padding.view.horizontal,
        width: '100%'
    }
}