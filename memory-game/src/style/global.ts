import { FlexAlignType, StyleProp, TextStyle, ViewStyle } from "react-native";
import { color } from "../variable/color";
import { fontSize } from "../variable/font-size";

/**
 * Style permettant de déterminer les positionnement de différents objets via flex.
 * 
 * @param direction Direction appliqué aux objets, i.e. "row", "column", etc
 * @param alignItems Alignement horizontale / veticale des objets 
 * @param justifyContent Alignement verticale / horizontal des objets 
 * @returns Positionnement des différetns objets
 */
export const flex = (
    direction: "row" | "column" | "row-reverse" | "column-reverse" | undefined,
    alignItems?: FlexAlignType | undefined,
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined
): StyleProp<ViewStyle> => {
    return {
        flexDirection: direction,
        alignItems: alignItems,
        justifyContent: justifyContent
    }
}

/**
 * Style permettant de déterminer la largeur et le hauteur d'un élément.
 * 
 * @param width Largeur appliquée à l'élément
 * @param height Hauteur appliquée à l'élément
 * @returns StyleProp<ViewStyle>
 */
export const widthHeight = (width?: string | number, height?: string | number): StyleProp<ViewStyle> => {
    return {
        width: width,
        height: height
    }
}

/**
 * Style relatif à un texte.
 * 
 * @param colorText Couleur du texte. Elle est posé par défaut à noir.
 * @param fontSizeTitle Taille de la police du texte. Elle est posé par défaut à 18.
 * @param textAlign L'alignement du texte
 * @returns Style correspondant à un texte
 */
export const text = (colorText: string = color.text, textAlign: "center" | "auto" | "left" | "right" | "justify" = "justify", fontSizeTitle: number = fontSize.text): StyleProp<TextStyle> => {
    return {
        color: colorText,
        fontSize: fontSizeTitle,
        textAlign: textAlign,
        fontFamily: 'PoppinsLight'
    }
}

/**
 * Style relatif à un titre
 * 
 * @param colorTitle Couleur du titre
 * @param fontSizeTitle La taille de police du titre
 * @param textAlign L'alignement d'un titre
 * @returns Style correspondant à un titre
 */
export const title = (colorTitle: string = color.text, fontSizeTitle: number = fontSize.title, textAlign?: "center" | "auto" | "left" | "right" | "justify"): StyleProp<TextStyle> => {
    return {
        color: colorTitle,
        textAlign: textAlign,
        fontWeight: 'bold',
        fontSize: fontSizeTitle,
        fontFamily: 'PoppinsBold'
    }
}