import { StyleProp, TextStyle } from "react-native";

/**
 * Interface composée de :
 * * `errorMessage` *(string)* : Message d'erreur qu'il faut afficher à l'écran de l'utilisateur..
 * * `style?` *(StyleProp<TextStyle>)* : Style relatif au container du message d'erreur.
 */
 export interface PropsInputError {
    /** Message d'erreur qu'il faut afficher à l'écran de l'utilisateur.. */
    errorMessage: string,
    /** Style relatif au container du message d'erreur. */
    style?: StyleProp<TextStyle>,
}