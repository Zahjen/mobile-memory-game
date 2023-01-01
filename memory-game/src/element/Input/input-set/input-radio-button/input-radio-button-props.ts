import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from "react-native"
import { IMargin } from "../../interface/object/margin"

/**
 * Interface composée de :
 * * `userSelection` *(any)* : Correspond à la sélection courante de l'utilisateur, i.e. le choix du bouton radio.
 * * `keyId` *(string)* : Permet d'identifier une réponse.
 * * `label` *(string)* : Correspond au text accompagnant un bouton radio, i.e. le label de la réponse que l'utilisateur peut choisir.
 * * `onPress` *((event: GestureResponderEvent) => void) | null | undefined)* : Correspond à l'action opérer sur le clique du bouton radio.
 * * `margin?` (IMargin) : Permet de déterminer les marges correspondantes aux alentours  d'un unique bouton radio.
 * * `selectedRadioColor` (string) : Couleur de l'icon associé au bouton radio lorsque celui - ci est sélectionné.
 * * `unselectedRadioColor` (string) : Couleur de l'icon associé au bouton radio lorsque celui - ci n'est pas sélectionné.
 * * `circleRadioSize?` (number) : Taille de l'icon associé au bouton radio.
 * * `marginRadioRight?` (number) : Marge droite de l'icon associé au bouton radio.
 * * `radioTextStyle?` (StyleProp<TextStyle>) : Style relatif au texte associé à un bouton radio.
 */
 export interface PropsRadioButtonElement {
    
    /** Correspond à la sélection courante de l'utilisateur, i.e. le choix du bouton radio. */
    userSelection: string,
    /** Permet d'identifier une réponse. */
    keyId: string,
    /** Correspond au text accompagnant un bouton radio, i.e. le label de la réponse que l'utilisateur peut choisir. */
    label: string,
    /** Correspond à l'action opérer sur le clique du bouton radio. */
    onPress: ((event: GestureResponderEvent) => void) | null | undefined,
    /** Permet de déterminer les marges correspondantes aux alentours  d'un unique bouton radio. */
    margin?: IMargin,
    /** Couleur de l'icon associé au bouton radio lorsque celui - ci est sélectionné. */
    selectedRadioColor: string,
    /** Couleur de l'icon associé au bouton radio lorsque celui - ci n'est pas sélectionné. */
    unselectedRadioColor: string,
    /** Taille de l'icon associé au bouton radio. */
    circleRadioSize?: number,
    /** Marge droite de l'icon associé au bouton radio. */
    marginRadioRight?: number,
    /** Style relatif au texte associé à un bouton radio. */
    radioTextStyle?: StyleProp<TextStyle>
}

/**
 * Interface composée de :
 * * `input` *(T)* : Instance de la classe T permettant de stocker les informations relatives à cet input.
 * * `labelStyle?` *(StyleProp<TextStyle>)* : Correspond au style associé au label d'un input.
 * * `styleContent?` *(StyleProp<ViewStyle>)* : Correspond au style que prendra l'ensemble des boutons radios, par exemple il pourront tous être aligné sur la gauche, centrés, etc. les uns par rapport aux autres.
 * * `styleContainer?` *(StyleProp<ViewStyle>)* : Correspond au style que prendra le contenant par rapport au composant parent s'il y a lieu d'être. Par exemple, il pourra être centré sur une page.
 * * `margin?` (IMargin) : Permet de déterminer les marges correspondantes aux alentours d'un unique bouton radio.
 * * `selectedRadioColor` (string) : Couleur de l'icon associé au bouton radio lorsque celui - ci est sélectionné.
 * * `unselectedRadioColor?` (string) : Couleur de l'icon associé au bouton radio lorsque celui - ci n'est pas sélectionné.
 * * `circleRadioSize?` (number) : Taille de l'icon associé au bouton radio.
 * * `marginRadioRight?` (number) : Marge droite de l'icon associé au bouton radio.
 * * `radioTextStyle?` (StyleProp<TextStyle>) : Style relatif au texte associé à un bouton radio.
 * * `errorStyle?` (StyleProp<TextStyle>) : Le style associé à l'affichage d'une erreur.
 * 
 * @param T Correspond à une instance du type d'input entré. Par exemple, un bouton radio classque ou encore un bouton radio dynamique, soit un bouton pouvant donner lieu à de nouveaux inputs.
 */
 export interface PropsInputRadioButton<T> {
    /** Instance de la classe T permettant de stocker les informations relatives à cet input. */
    input: T,
    /** Correspond au style associé au label d'un input. */
    labelStyle?: StyleProp<TextStyle>,
    /** Style que prendra l'ensemble des boutons radios, par exemple il pourront tous être aligné sur la gauche, centrés, etc. les uns par rapport aux autres. */
    styleContent?: StyleProp<ViewStyle>,
    /** Style que prendra le contenant par rapport au composant parent s'il y a lieu d'être. Par exemple, il pourra être centré sur une page. */
    styleContainer?: StyleProp<ViewStyle>,
    /** Permet de déterminer les marges correspondantes aux alentours d'un unique bouton radio. */
    margin?: IMargin,
    /** Couleur de l'icon associé au bouton radio lorsque celui - ci est sélectionné. */
    selectedRadioColor: string,
    /** Couleur de l'icon associé au bouton radio lorsque celui - ci n'est pas sélectionné. */
    unselectedRadioColor?: string,
    /** Taille de l'icon associé au bouton radio. */
    circleRadioSize?: number,
    /** Marge droite de l'icon associé au bouton radio. */
    marginRadioRight?: number,
    /** Style relatif au texte associé à un bouton radio. */
    radioTextStyle?: StyleProp<TextStyle>,
    /** Le style associé à l'affichage d'une erreur. */
    errorStyle?: StyleProp<TextStyle>
}