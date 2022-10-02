import { StyleProp, TextStyle, ViewStyle } from "react-native";

/**
 * Interface composée de :
 * * `placeholder?` *(string)* : L'indication à afficher à un utilisateur pour mener à bien la recherche.
 * * `value?` *(string)* : La valeur entrée par l'utilisateur lors de la saisie de texte.
 * * `styleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `styleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 * * `handleSearch?` *((text: string) => void* : Méthode permettant la gestion de la recherche.
 */
 export interface PropsSearchBarComponent {
    /** L'indication à afficher à un utilisateur pour mener à bien la recherche. */
    placeholder?: string,
    /** La valeur entrée par l'utilisateur lors de la saisie de texte. */
    value?: string,
    /** Style relatif au texte de la saisie. */
    styleText?: StyleProp<TextStyle>,
    /** Style relatif au container de l'input permettant la recherche. */
    styleContainer?: StyleProp<ViewStyle>,
    /** Méthode permettant la gestion de la recherche. */
    handleSearch?: (text: string) => void
}