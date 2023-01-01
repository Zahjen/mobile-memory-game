import React from "react";
import { TextInput, View, Text } from "react-native";
import InputErrorMessage from "../input-error/input-error";
import { InputTextController } from "./input-text-controller";
import { PropsInputText } from "./input-text-props";

/**
 * Élément permettant de récupérer un input de type texte, accompagné d'un style prédéfini, et de pouvoir stocker la valeur de l'utilisateur en le stockant dans une instance de la classe InputText
 * 
 * ---
 * ---
 * 
 * `PropsInputText` : Interface composée de :
 * * `input` *(InputTextComponent)* : Instance de la classe InputTextComponent permettant de stocker les informations relatives à cet input.
 * * `containerStyle?` *(StyleProp<ViewStyle>)* : Correspond au style contenant l'entièreté de l'input, i.e. le label, la saisie et l'erreur.
 * * `labelStyle?` *(StyleProp<TextStyle>)* : Correspond au style associé au label d'un input.
 * * `textInputStyle?` *(StyleProp<TextStyle>)* : Correpond au style relatif à la saisie.
 * * `placeholderTextColor?` *(ColorValue)* : Correspond au style associé au placeholder.
 * * `errorStyle?` *(StyleProp<TextStyle>)* : Correspond au style relatif à un message d'erreur.
 * 
 * ---
 * ---
 * 
 * @param props `PropsInputText`
 * @returns Composant InputText
 */
const InputText: React.FC<PropsInputText> = (props: PropsInputText): JSX.Element => {

    const inputTextController: InputTextController
        = InputTextController.getInstance();

    const [borderWidth, setBorderWidth]: [number, React.Dispatch<React.SetStateAction<number>>]
        = React.useState(2)

    const [error, setError]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState('');

    return (
        <View style = { props.containerStyle }>
            <Text style = { props.labelStyle }>
                { props.input.getLabel }
            </Text>
            <TextInput
                style = { [props.textInputStyle, {borderWidth: borderWidth}] }
                onChangeText = { (value: string) => inputTextController.onInputTextChange(props, value, setError) }
                placeholderTextColor = { props.placeholderTextColor }
                placeholder = { props.input.getPlaceholder }
                // Permet de grossir la bordure du bas de l'input lorsqu'il y a focus sur celui - ci.
                onFocus = { () => setBorderWidth(3) }
                // Lorsque le focus est levé, on retourne à la largeur de bordure original.
                onBlur = { () => setBorderWidth(2) } 
                keyboardType = { props.input.getKeyboardType }
            />

            <InputErrorMessage
                errorMessage = { error }
                style = { props.errorStyle }
            />
        </View>
    );
    
}

export default InputText;