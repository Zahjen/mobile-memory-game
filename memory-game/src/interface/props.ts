import { StyleProp, TextStyle, ViewStyle } from "react-native"

/**
 * Interface composée de :
 * * `title` *(string)* : Titre à associer.
 * * `containerStyle?` *(StyleProp<ViewStyle>)* : Style associé au container du titre.
 * * `titleStyle?` *(StyleProp<TextStyle>)* : Style associé au titre lui - même.
 */
export interface TitleProps {
    /** Titre à associer. */
    title: string,
    /** Style associé au container du titre. */
    containerStyle?: StyleProp<ViewStyle>,
    /** Style associé au titre lui - même. */
    titleStyle?: StyleProp<TextStyle>,
}

/**
 * Interface composée de :
 * * `text?` *(string)* : Texte à associer.
 * * `color?` *(string)* : Couleur appliqué au texte.
 * * `fontSize?` *(number)* : Taille de police du texte.
 * * `textAlign?` *("center" | "auto" | "left" | "right" | "justify")* : L'alignement appliqué au texte.
 */
 export interface TextProps {
    /** Texte à associer. */
    text?: string,
    /** Couleur appliqué au texte. */
    color?: string,
    /** Taille de police du texte. */
    fontSize?: number,
    /** L'alignement appliqué au texte */
    textAlign?: "center" | "auto" | "left" | "right" | "justify"
}

/**
 * Interface composée de :
 * * `width` *(number)* : Espace horizontal appliqué entre deux éléments.
 * * `height` *(number)* : Espace vertical appliqué entre deux éléments.
 */
export interface SpacerProps {
    /** Espace horizontal appliqué entre deux éléments. */    
    width?: number,
    /** Espace vertical appliqué entre deux éléments. */
    height?: number
}