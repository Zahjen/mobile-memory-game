import React from "react";
import { Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { Answer } from "../global/input/answer";
import InputErrorMessage from "../input-error/input-error";
import { InputRadioButtonComponent } from "./input-radio-button-component";
import { InputRadioButtonController } from "./input-radio-button-controller";
import { PropsInputRadioButton, PropsRadioButtonElement } from "./input-radio-button-props";
import Fontisto from "react-native-vector-icons/Fontisto";
import { IMargin } from "../global/interface/object/margin";
import { color } from "../../../variable/color";


/**
 * Élement permettant de générer un bouton radio accompagné d'un label.
 * 
 * ---
 * ---
 * 
 * `PropsRadioButtonElement` : Interface composée de :
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
 * 
 * ---
 * ---
 * 
 * @param props `PropsRadioButtonElement`
 * @returns Élément RadioButtonElement
 */
export const RadioButtonElement: React.FC<PropsRadioButtonElement> = (props: PropsRadioButtonElement): JSX.Element => {

    const colorIcon: string 
        = props.keyId === props.userSelection ? props.selectedRadioColor : props.unselectedRadioColor;

    const nameIcon: string 
        = props.keyId === props.userSelection ? "radio-btn-active" : "radio-btn-passive";

    return (
        <Pressable onPress = { props.onPress }>
            <View style = { radioButtonRowView(props.margin) }>
                <Fontisto
                    name = { nameIcon }
                    style = {{
                        color: colorIcon,
                        fontSize: props.circleRadioSize,
                        marginRight: props.marginRadioRight
                    }}
                />
                <Text style = { props.radioTextStyle }> 
                    { props.label } 
                </Text>
            </View>
        </Pressable>
    );
}

/**
 * Élément permettant de générer un groupe de bouton radio relatif à une même question.
 * 
 * ---
 * ---
 * 
 * `PropsInputRadioButton` : Interface composée de :
 * * `input` *(InputRadioButtonComponent)* : Instance de la classe InputRadioButtonComponent permettant de stocker les informations relatives à cet input.
 * * `styleContent?` *(StyleProp<ViewStyle>)* : Correspond au style que prendra l'ensemble des boutons radios, par exemple il pourront tous être aligné sur la gauche, centrés, etc. les uns par rapport aux autres.
 * * `styleContainer?` *(StyleProp<ViewStyle>)* : Correspond au style que prendra le contenant par rapport au composant parent s'il y a lieu d'être. Par exemple, il pourra être centré sur une page.
 * * `margin?` (IMargin) : Permet de déterminer les marges correspondantes aux alentours d'un unique bouton radio.
 * * `selectedRadioColor` (string) : Couleur de l'icon associé au bouton radio lorsque celui - ci est sélectionné.
 * * `unselectedRadioColor` (string) : Couleur de l'icon associé au bouton radio lorsque celui - ci n'est pas sélectionné.
 * * `circleRadioSize?` (number) : Taille de l'icon associé au bouton radio.
 * * `marginRadioRight?` (number) : Marge droite de l'icon associé au bouton radio.
 * * `radioTextStyle?` (StyleProp<TextStyle>) : Style relatif au texte associé à un bouton radio.
 * * `errorStyle?` (StyleProp<ViewStyle>) : Le style associé à l'affichage d'une erreur.
 * 
 * ---
 * ---
 * 
 * @param props `PropsInputRadioButton`
 * @returns Élément RadioButtonGroupElement
 */
const InputRadioButton: React.FC<PropsInputRadioButton<InputRadioButtonComponent>> = (props: PropsInputRadioButton<InputRadioButtonComponent>): JSX.Element => {

    const inputRadioButtonController 
        = InputRadioButtonController.getInstance();

    const [error, setError]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState(inputRadioButtonController.initError(props));

    const [userSelection, setUserSelection]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState("");

    return (
        <View style = { props.styleContainer }>
            <Text style = { props.labelStyle }>
                { props.input.getLabel }
            </Text>

            <View style = { props.styleContent }>            
                { props.input!.getAnswers.map((answer: Answer) => {
                    return (
                        <RadioButtonElement
                            key = { answer.getKey }
                            onPress = { (): void => inputRadioButtonController.onClick(
                                props,
                                answer,
                                setError,
                                setUserSelection
                            ) }
                            userSelection = { userSelection }
                            keyId = { answer.getKey }
                            label = { answer.getValue }
                            margin = { props.margin } 
                            selectedRadioColor = { props.selectedRadioColor } 
                            unselectedRadioColor = { props.unselectedRadioColor! } 
                            circleRadioSize = { props.circleRadioSize } 
                            marginRadioRight = { props.marginRadioRight } 
                            radioTextStyle = { props.radioTextStyle }/>
                    );
                }) }
            </View>

            <InputErrorMessage
                errorMessage = { error }
                style = { props.errorStyle }
            />
        </View>
    );
}

/**
 * Style permettant d'aligner l'icon et le label d'un bouton radio
 * 
 * @param margin Différentes marges que l'on peut ou non appliquer à un bouton radio
 * @returns Alignment d'un bouton radio
 */
export const radioButtonRowView = (margin?: IMargin): StyleProp<ViewStyle> => {
    return {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: margin?.bottom,
        marginRight: margin?.right,
        marginTop: margin?.top,
        marginLeft: margin?.left
    }
}

InputRadioButton.defaultProps = {
    unselectedRadioColor: color.tertiary,
    circleRadioSize: 20,
    marginRadioRight: 7,
    margin: {
        bottom: 15
    }
}

export default InputRadioButton;