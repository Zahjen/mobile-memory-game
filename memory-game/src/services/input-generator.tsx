import React from "react";
import { View, Text } from "react-native";
import InputDropdown from "../element/Input/input-dropdown/input-dropdown";
import { InputDropdownComponent } from "../element/Input/input-dropdown/input-dropdown-component";
import { dropdownComponent, errorComponent } from "../style/input";

const ERROR = "Oups... Un problème est survenu lors de la génération du Composant! Vérifiez l'input entré!";

export class InputGenerator {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputGenerator;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputGenerator 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputGenerator à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputGenerator.
     */
    public static getInstance() : InputGenerator {
        if (!InputGenerator._instance) {
            InputGenerator._instance = new InputGenerator();
        }

        return InputGenerator._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant d'afficher un message indiquant si un problème est survenu.
     * 
     * @returns Message d'erreur
     */
    public renderErrorComponent(error: string = ERROR): JSX.Element {
        return <View style = { errorComponent.container }>
            <Text style = { errorComponent.text }>
                { error }
            </Text>
        </View>
    }

    /**
     * Méthode permettant d'afficher un input de type dropdown.
     * 
     * @param input Instance de classe InputDropdownComponent.
     * @returns Affiche un input de type dropdown.
     */
     public renderDropdownInput(input: InputDropdownComponent): JSX.Element {
        return <InputDropdown 
            input = { input } 
            labelStyle = { dropdownComponent.labelStyle }
            itemTextStyle = { dropdownComponent.itemTextStyle }
            listHeaderComponentStyleBackgroundColor = { dropdownComponent.listHeaderComponentStyleBackgroundColor }
            inputDropdownCurrentSelectionTextStyle = { dropdownComponent.inputDropdownCurrentSelectionTextStyle }
            errorStyle = { dropdownComponent.errorStyle }
            modalContainer = { dropdownComponent.modalContainer }
            styleModal = { dropdownComponent.styleModal }
            closeModalTextStyle = { dropdownComponent.closeModalTextStyle }
            titleModalTextStyle = { dropdownComponent.titleModalTextStyle }
            searchBarStyleContainer = { dropdownComponent.searchBarStyleContainer }
            searchBarStyleText = { dropdownComponent.searchBarStyleText }
            styleOpenModal = { dropdownComponent.styleOpenModal }
            openModalTextStyle = { dropdownComponent.openModalTextStyle }
        />
    }

}