import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { IFrenchCountryList } from "../../variables/french-countries"
import { InputPhoneComponent } from "./input-phone-component"

/**
 * Interface composée de :
 * * `input` *(InputPhoneComponent)* : Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input.
 * * `item` *(IFrenchCountryList)* : Correspond à un élément de la liste de pays français, et comprend donc un code pays accompagné du nom de pays.
 * * `setTitle` *(string)* : Le titre appliqué au bouton permettant de sélectionner un pays.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* :  L'erreur générer dans le cas où le numéro de téléphone déjà entré n'est pas valide par rapport au pays qui vient d'être choisi.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 */
 export interface PropsItemCountry {
    /**  Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input. */
    input: InputPhoneComponent,
    /** Correspond à un élément de la liste de pays français, et comprend donc un code pays accompagné du nom de pays. */
    item: IFrenchCountryList,
    /** Le titre appliqué au bouton permettant de sélectionner un pays. */
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    /** L'erreur générer dans le cas où le numéro de téléphone déjà entré n'est pas valide par rapport au pays qui vient d'être choisi. */
    setError: React.Dispatch<React.SetStateAction<string>>,
    /** Le style associé à un item sélectionné. */
    selectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style associé à un item non sélectionné. */
    unselectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style du texte associé à un item. */
    itemTextStyle?: StyleProp<TextStyle>
}

/**
 * Interface composée de :
 * * `propsInputPhone` *(PropsInputPhone)* : Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Le titre appliqué au bouton permettant de sélectionner un pays.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : L'erreur générer dans le cas où le numéro de téléphone déjà entré n'est pas valide par rapport au pays qui vient d'être choisi.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * * `listHeaderComponentStyle?` *(StyleProp<ViewStyle>)* : La couleur de fond associé au header de la flatlist.
 * * `searchBarStyleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `searchBarStyleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 */
 export interface PropsCountryList {
    /** Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input. */
    input: InputPhoneComponent,
    /** Le titre appliqué au bouton permettant de sélectionner un pays. */
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    /** L'erreur générer dans le cas où le numéro de téléphone déjà entré n'est pas valide par rapport au pays qui vient d'être choisi. */
    setError: React.Dispatch<React.SetStateAction<string>>,
    /** Le style associé à un item sélectionné. */
    selectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style associé à un item non sélectionné. */
    unselectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style du texte associé à un item. */
    itemTextStyle?: StyleProp<TextStyle>,
    /** La couleur de fond associé au header de la flatlist. */
    listHeaderComponentStyle?: StyleProp<ViewStyle>,
    /** Style relatif au texte de la saisie. */
    searchBarStyleText?: StyleProp<TextStyle>,
    /** Style relatif au container de l'input permettant la recherche. */
    searchBarStyleContainer?: StyleProp<ViewStyle>,
}

/**
 * Interface composée de :
 * * `input` *(InputPhoneComponent)* : Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * * `listHeaderComponentStyle?` *(StyleProp<ViewStyle>)* : La couleur de fond associé au header de la flatlist.
 * * `inputDropdownCurrentSelectionTextStyle` *(StyleProp<TextStyle>)* : Le style du texte associée à la sélection actuelle du dropdown.
 * * `inputDropdownTextFontSize` *(number)* : LA taille de police du texte associée à la sélection actuelle du dropdown.
 * * `errorStyle?` *(StyleProp<TextStyle>)* : Le style associé à l'affichage de l'erreur généré par le dropdown.
 * * `styleModal?` *(StyleProp<ViewStyle>)* : Style relatif à un Modal.
 * * `styleOpenModal?` *(StyleProp<ViewStyle>)* : Style relatif au bouton permettant d'ouvrir le Modal.
 * * `closeModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant de fermer le modal.
 * * `titleModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte associé au titre du modal.
 * * `openModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant d'ouvrir le modal.
 * * `textInputPhoneStyle?` *(StyleProp<TextStyle>)* : Style relatif au container permettant la saisie du numéro de téléphone.
 * * `placeholderPhoneTextColor?` *(string)* : Couleur du texte du placeholder permettant de donner une indication sur le numéro de téléphone à saisir.
 * * `searchBarStyleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `searchBarStyleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 * * `labelStyle?` *(StyleProp<TextStyle>)* : Correspond au style associé au label d'un input.
 */
export interface PropsInputPhone {
    /** Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input. */
    input: InputPhoneComponent,
    /** Correspond au style associé au label d'un input. */
    labelStyle?: StyleProp<TextStyle>,
    /** Le style associé à un item sélectionné. */
    selectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style associé à un item non sélectionné. */
    unselectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style du texte associé à un item. */
    itemTextStyle?: StyleProp<TextStyle>,
    /** La couleur de fond associé au header de la flatlist. */
    listHeaderComponentStyle?: StyleProp<ViewStyle>
    /** Le style du texte associée à la sélection actuelle du dropdown. */
    inputDropdownCurrentSelectionTextStyle?: StyleProp<TextStyle>,
    /** Le style associé à l'affichage de l'erreur généré par le dropdown. */
    errorStyle?: StyleProp<TextStyle>,
    /** Style relatif à un Modal. */
    styleModal?: StyleProp<ViewStyle>,
    /** Style relatif au texte permettant de fermer le modal. */
    closeModalTextStyle?: StyleProp<TextStyle>,
    /** Style relatif au texte associé au titre du modal. */
    titleModalTextStyle?: StyleProp<TextStyle>,
    /** Style relatif au texte permettant d'ouvrir le modal. */
    openModalTextStyle?: StyleProp<TextStyle>
    /** Style relatif au bouton permettant d'ouvrir le Modal. */
    styleOpenModal?: StyleProp<ViewStyle>,
    /** Style relatif au container permettant la saisie du numéro de téléphone. */
    textInputPhoneStyle?: StyleProp<TextStyle>,
    /** Couleur du texte du placeholder permettant de donner une indication sur le numéro de téléphone à saisir. */
    placeholderPhoneTextColor?: string,
    /** Style relatif au texte de la saisie. */
    searchBarStyleText?: StyleProp<TextStyle>,
    /** Style relatif au container de l'input permettant la recherche. */
    searchBarStyleContainer?: StyleProp<ViewStyle>
}