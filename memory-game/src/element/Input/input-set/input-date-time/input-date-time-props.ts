import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { InputDateTimeComponent } from "./input-date-time-component";

/**
 * Interface composée de :
 * * `date` *(InputDateTime)* : Instance de la classe InputDateTime permettant de stocker les informations relatives à cet input.
 * * `icon` *(string)* : Icon associé à l'input de sélection de date / heure, e.g. un calendrier, une horloge, ...
 * * `mode` *("date" | "time" | "datetime" | undefined)* : Correspond à ce qui doit être séléctionné, i.e. une date, une heure, une date et une heure.
 * * `datePickerContainerStyle?` *(StyleProp<ViewStyle>)* : Style relatif au container (label + date picker) de la saisie d'une date.
 * * `labelTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au label, donc permettant l'affichage d'une indication.
 * * `spaceLabelPicker?` *(number)* : La taille de l'espace séparant le label et le bouton permettant la sélection d'une date / heure.
 * * `openDatePickerPressableStyle?` *(StyleProp<ViewStyle>)* : Style relatif au bouton permettant l'ouverture du modal pour la saisie d'une date / heure.
 * * `datePickerTextStyle?` *(StyleProp<TextStyle>)* : Style relatif à la date sélectionnée et affichée sur le bouton permettant d'ouvrir le modal.
 * * `iconPressableStyle?` *(StyleProp<TextStyle>)* : Style associé à l'icon situé sur le bouton permettant l'ouerture du modal.
 * * `confirmTextButtonColor` *(string)* : Couleur du texte permettant de confinrmer la date / heure sélectionnée.
 * * `confirmButtonBackgroundColor` *(string)* : Couleur de fond du bouton permettant de confirmer la sélection de la date / heure.
 * * `cancelButtonBackgroundColor` *(string)* : Couleur de fond du bouton permettant d'annuler la sélection de la date / heure.
 * * `cancelTextButtonColor` *(string)* : Couleur du texte permettant d'annuler la sélection d'une date / heure.
 */
 export interface PropsInputDateTime {
    /** Instance de la classe InputDateTime permettant de stocker les informations relatives à cet input. */
    date: InputDateTimeComponent,
    /** Icon associé à l'input de sélection de date / heure, e.g. un calendrier, une horloge, ... */
    icon: string,
    /** Correspond à ce qui doit être séléctionné, i.e. une date, une heure, une date et une heure. */
    mode: "date" | "time" | "datetime" | undefined,
    /** Style relatif au container (label + date picker) de la saisie d'une date. */
    datePickerContainerStyle?: StyleProp<ViewStyle>,
    /** Style relatif au label, donc permettant l'affichage d'une indication. */
    labelTextStyle?: StyleProp<TextStyle>,
    /** La taille de l'espace séparant le label et le bouton permettant la sélection d'une date / heure. */
    spaceLabelPicker?: number,
    /** Style relatif au bouton permettant l'ouverture du modal pour la saisie d'une date / heure. */
    openDatePickerPressableStyle?: StyleProp<ViewStyle>,
    /** Style relatif à la date sélectionnée et affichée sur le bouton permettant d'ouvrir le modal. */
    datePickerTextStyle?: StyleProp<TextStyle>,
    /** Style associé à l'icon situé sur le bouton permettant l'ouerture du modal. */
    iconPressableStyle?: StyleProp<TextStyle>,
    /** Couleur du texte permettant de confinrmer la date / heure sélectionnée. */
    confirmTextButtonColor?: string,
    /** Couleur de fond du bouton permettant de confirmer la sélection de la date / heure. */
    confirmButtonBackgroundColor?: string,
    /** Couleur de fond du bouton permettant d'annuler la sélection de la date / heure. */
    cancelButtonBackgroundColor?: string,
    /** Couleur du texte permettant d'annuler la sélection d'une date / heure. */
    cancelTextButtonColor?: string
}
