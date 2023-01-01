import { EInputType } from "../element/Input/enumeration/input-type";
import { Answer } from "../element/Input/input-set/answer/answer";
import { InputDropdownComponent } from "../element/Input/input-set/input-dropdown/input-dropdown-component";


/**
 * Cette classe nous permet d'accéder aux diverses données pour les inputs de cette application.
 */
 export class InputDataService {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputDataService;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputDataService 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    public static getInstance() : InputDataService {
        if (!InputDataService._instance)
            InputDataService._instance = new InputDataService();

        return InputDataService._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de récupérer les données relatives au dropdown permettant la saisie du nombre de cartes permettant l'affichage de la grille.
     * 
     * @returns InputDropdownComponent.
     */
    public getCardNumberDropdownData() : InputDropdownComponent {
        return new InputDropdownComponent({
            key: "input_number_of_cards",
            label: "Sélectionner le nombre de cartes",
            type: EInputType.DROPDOWN,
            title: 'Sélectionner le nombre de cartes',
            isRequired: true,
            value: new Answer({
                id: 0,
                key: "option-0",
                value: "Sélectionner le nombre de cartes"
            }),
            answers: [
                new Answer({
                    id: 0,
                    key: "option-0",
                    value: "Sélectionner le nombre de cartes"
                }),
                new Answer({
                    id: 16,
                    key: "option-16",
                    value: "16 cartes"
                }),
                new Answer({
                    id: 24,
                    key: "option-24",
                    value: "24 cartes"
                }),
                new Answer({
                    id: 32,
                    key: "option-32",
                    value: "32 cartes"
                })
            ]            
        })
    }

}