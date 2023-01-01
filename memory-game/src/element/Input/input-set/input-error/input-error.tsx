import { PropsInputError } from "./input-error-props";
import { Text } from "react-native";

/**
 * Composant permettant de génèrer un composant Text affichant une erreur. 
 * 
 * ---
 * ---
 * 
 * `PropsInputText` : Interface composée de :
 * * `errorMessage` *(string)* : Message d'erreur qu'il faut afficher à l'écran de l'utilisateur..
 * * `style?` *(StyleProp<TextStyle>)* : Style relatif au container du massage d'erreur.
 * 
 * ---
 * ---
 * 
 * 
 * @param props `PropsInputError`
 * @returns Composant InputErrorMessage
 */
const InputErrorMessage: React.FC<PropsInputError> = (props: PropsInputError): JSX.Element | null => {
    return (props.errorMessage === "" || props.errorMessage === undefined) 
        ? null  
        : <Text style = { props.style }>{ props.errorMessage }</Text> 
}

export default InputErrorMessage;