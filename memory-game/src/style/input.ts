import { StyleProp, TextStyle } from "react-native";
import { color } from "../variable/color";

/**
 * Style relatif à un composant permettant l'affichage d'une erreur.
 */
 export const errorComponent = {
    container: { 
        backgroundColor: color.error,
        padding: 10,
        borderRadius: 7
    },

    text: {
        color: color.text
    }
}

/**
 * Style relatif au composant permettant l'affichage d'un dropdown.
 */
 export const dropdownComponent = {
    labelStyle: { 
        color: color.text, 
        textAlign: "center",
        fontSize: 16,
        marginBottom: 15,
    } as StyleProp<TextStyle>,
    itemTextStyle: {
        color: color.text
    },
    listHeaderComponentStyleBackgroundColor: color.backgroundColor,
    inputDropdownCurrentSelectionTextStyle: {
        textAlign: "center",
        color: color.text,
    } as StyleProp<TextStyle>,
    errorStyle: {
        color: color.error, 
        textAlign: "center",
        fontSize: 16,
        marginTop: 15
    } as StyleProp<TextStyle>,
    modalContainer: {
        width: "100%"
    },
    styleModal: {
        height: "70%",
        marginTop: "auto",
        backgroundColor: color.backgroundColor,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 30,
        borderRadius: 50
    },
    closeModalTextStyle: {
        color: color.tertiary,
        marginRight: 20
    },
    titleModalTextStyle: {
        color: color.text,
    },
    searchBarStyleContainer: {
        borderColor: color.text,
        borderWidth: 0.5,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 15
    },
    searchBarStyleText: {
        color: color.text
    },
    styleOpenModal: {
        borderColor: color.secondary,
        borderWidth: 2,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    openModalTextStyle: {
        color: color.text,
        fontSize: 16,
        textAlign: "center"
    } as StyleProp<TextStyle>,
}