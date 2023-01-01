import { ColorValue, StyleProp, TextStyle, ViewStyle } from "react-native";
import { InputEmailComponent } from "./input-email-component";

/**
 * Interface composée de :
 * * `input` *(InputEmailComponent)* : Instance de la classe InputEmailComponent permettant de stocker les informations relatives à cet input.
 * * `containerStyle?` *(StyleProp<ViewStyle>)* : Correspond au style contenant l'entièreté de l'input, i.e. le label, la saisie et l'erreur.
 * * `labelStyle?` *(StyleProp<TextStyle>)* : Correspond au style associé au label d'un input.
 * * `textInputStyle?` *(StyleProp<TextStyle>)* : Correpond au style relatif à la saisie.
 * * `placeholderTextColor?` *(ColorValue)* : Correspond au style associé au placeholder.
 * * `errorStyle?` *(StyleProp<TextStyle>)* : Correspond au style relatif à un message d'erreur.
 */
 export interface PropsInputEmail {
    /** Instance de la classe InputEmailComponent permettant de stocker les informations relatives à cet input. */
    input: InputEmailComponent,
    /** Correspond au style contenant l'entièreté de l'input, i.e. le label, la saisie et l'erreur. */
    containerStyle?: StyleProp<ViewStyle>,
    /** Correspond au style associé au label d'un input. */
    labelStyle?: StyleProp<TextStyle>,
    /** Correpond au style relatif à la saisie. */
    textInputStyle?: StyleProp<TextStyle>,
    /** Correspond au style associé au placeholder. */
    placeholderTextColor?: ColorValue,
    /** Correspond au style relatif à un message d'erreur. */
    errorStyle?: StyleProp<TextStyle>
}