import React from "react";
import InputDropdown from "../element/Input/input-set/input-dropdown/input-dropdown";
import { InputDropdownComponent } from "../element/Input/input-set/input-dropdown/input-dropdown-component";
import { dropdownComponent } from "../style/input";

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
            listHeaderComponentStyle = { dropdownComponent.listHeaderComponentStyle }
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