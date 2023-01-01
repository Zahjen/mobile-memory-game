import { StyleSheet } from "react-native";
import { color } from "../variable/color";

/**
 * Style relatif au composant permettant l'affichage d'un dropdown.
 */
 export const dropdownComponent = StyleSheet.create({
    labelStyle: { 
        color: color.text, 
        textAlign: "center",
        fontSize: 16,
        marginBottom: 15,
        fontFamily: "PoppinsLight"
    },
    itemTextStyle: {
        color: color.text
    },
    listHeaderComponentStyle: {
        backgroundColor: color.backgroundColor
    },
    inputDropdownCurrentSelectionTextStyle: {
        textAlign: "center",
        fontFamily: "PoppinsLight",
        color: color.text,
    },
    errorStyle: {
        color: color.error, 
        textAlign: "center",
        fontFamily: "PoppinsLight",
        fontSize: 16,
        marginTop: 15
    },
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
        marginRight: 20,
        fontFamily: "PoppinsLight"
    },
    titleModalTextStyle: {
        color: color.text,
        fontFamily: "PoppinsLight"
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
        color: color.text,
        fontFamily: "PoppinsLight"
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
        textAlign: "center",
        fontFamily: "PoppinsLight"
    },
})