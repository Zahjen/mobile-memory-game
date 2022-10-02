import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { InputDropdownComponent } from "./input-dropdown-component"

/**
 * Interface composée de :
 * * `item` *(any)* : Correspond à un élément de la liste des réponses pré - faites.
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 */
 export interface PropsItemInputDropDown {
    /** Correspond à un élément de la liste des réponses pré - faites. */
    item: any,
    /** Une instance de la classe InputDropdownComponent. */
    input: InputDropdownComponent,
    /** Permet de mettre à jour le titre du modal. */
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    /** Permet de mettre à jour l'erreur relative à la liste déroulante. */
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
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * * `listHeaderComponentStyleBackgroundColor?` *(string)* : La couleur de fond associé au header de la flatlist.
 * * `searchBarStyleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `searchBarStyleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
*/
export interface PropsItemListInputDropDown {
    /** Une instance de la classe InputDropdownComponent. */
    input: InputDropdownComponent,
    /** Permet de mettre à jour le titre du modal. */
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    /** Permet de mettre à jour l'erreur relative à la liste déroulante. */
    setError: React.Dispatch<React.SetStateAction<string>>,
    /** Le style associé à un item sélectionné. */
    selectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style associé à un item non sélectionné. */
    unselectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style du texte associé à un item. */
    itemTextStyle?: StyleProp<TextStyle>,
    /** La couleur de fond associé au header de la flatlist. */
    listHeaderComponentStyleBackgroundColor?: string
    /** Style relatif au texte de la saisie. */
    searchBarStyleText?: StyleProp<TextStyle>,
    /** Style relatif au container de l'input permettant la recherche. */
    searchBarStyleContainer?: StyleProp<ViewStyle>,
}

/**
 * Interface composée de :
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * * `listHeaderComponentStyleBackgroundColor?` *(string)* : La couleur de fond associé au header de la flatlist.
 * * `inputDropdownCurrentSelectionTextStyle` *(StyleProp<TextStyle>)* : Le style du texte associée à la sélection actuelle du dropdown.
 * * `inputDropdownTextFontSize` *(number)* : LA taille de police du texte associée à la sélection actuelle du dropdown.
 * * `errorStyle?` *(StyleProp<TextStyle>)* : Le style associé à l'affichage de l'erreur généré par le dropdown.
 * * `styleModal?` *(StyleProp<ViewStyle>)* : Style relatif à un Modal.
 * * `styleOpenModal?` *(StyleProp<ViewStyle>)* : Style relatif au bouton permettant d'ouvrir le Modal.
 * * `closeModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant de fermer le modal.
 * * `titleModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte associé au titre du modal.
 * * `openModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au contenant d'un modal.
 * * `searchBarStyleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `searchBarStyleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 * * `labelStyle?` *(StyleProp<TextStyle>)* : Correspond au style associé au label d'un input.
 * * `modalContainer?` *(StyleProp<ViewStyle>)* : Correspond au style associé au label d'un input.
 */
export interface PropsInputDropdown {
    /** Une instance de la classe InputDropdownComponent. */
    input: InputDropdownComponent,
    /** Le style associé à un item sélectionné. */
    selectedItemStyle?: StyleProp<ViewStyle>,
    /** Le style associé à un item non sélectionné. */
    unselectedItemStyle?: StyleProp<ViewStyle>,
    /** Correspond au style associé au label d'un input. */
    labelStyle?: StyleProp<TextStyle>,
    /** Le style du texte associé à un item. */
    itemTextStyle?: StyleProp<TextStyle>,
    /** La couleur de fond associé au header de la flatlist. */
    listHeaderComponentStyleBackgroundColor?: string
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
    openModalTextStyle?: StyleProp<TextStyle>,
    /** Style relatif au bouton permettant d'ouvrir le Modal. */
    styleOpenModal?: StyleProp<ViewStyle>,
    /** Style relatif au contenant d'un modal. */
    modalContainer?: StyleProp<ViewStyle>,
    /** Style relatif au texte de la saisie. */
    searchBarStyleText?: StyleProp<TextStyle>,
    /** Style relatif au container de l'input permettant la recherche. */
    searchBarStyleContainer?: StyleProp<ViewStyle>
}