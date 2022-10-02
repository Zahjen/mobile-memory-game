import { Answer } from "../global/input/answer";
import { errorMessage } from "../global/variables/error-message";
import { InputRadioButtonComponent } from "./input-radio-button-component";
import { PropsInputRadioButton } from "./input-radio-button-props";

export class InputRadioButtonController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputRadioButtonController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputRadioButtonController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputRadioButtonController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputRadioButtonController.
     */
    public static getInstance() : InputRadioButtonController {
        if (!InputRadioButtonController._instance) 
            InputRadioButtonController._instance = new InputRadioButtonController();

        return InputRadioButtonController._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant d'initialiser les erreurs dès le premier affichage de l'enquête.
     * 
     * @param props Les propriétés prises par un input de type bouton radio.
     * 
     * @returns L'erreur affichée à l'écran.
     */
    public initError(
        props: PropsInputRadioButton<InputRadioButtonComponent>
    ): string {
        // Le champs est requis et qu'une valeur est sélectionnée, aucune erreur n'est à afficher, 
        if (!props.input.getIsRequired || props.input.getValue !== "") return "";

        // Si le champs est requis et qu'aucune valeur n'est sélectionnée, on affiche l'erreur correspondante à l'écran de l'utilisateur.
        props.input.error = errorMessage.optionSelection;

        return props.input.getError;
    }

    /**
     * Méthode permettant d'opérer une action lors du click venant d'un utitlisateur. Cette méthode nous permet pour le moment de mettre à jour la saisie et de gérer l'affichage des erreurs.
     * 
     * @param props Correspond à l'interface d'objet utilisée dans le composant permettant de générer un input de type bouton radio.
     * @param answer Correspond à la réponse choisie par l'utilisateur.
     * @param setError L'erreur a afficher à l'écran de l'utilisateur.
     * @param setUserSelection Permet de mettre à jour la sélection de l'utilisateur.
     */
    public onClick(
        props: PropsInputRadioButton<InputRadioButtonComponent>, 
        answer: Answer,
        setError: React.Dispatch<React.SetStateAction<string>>,
        setUserSelection: React.Dispatch<React.SetStateAction<string>>
    ): void {
        // On stocke la valeur de la réponse choisie par l'utilisateur.
        props.input.value = answer.getKey;

        // On met à jour la sélection de l'utilisateur.
        setUserSelection(props.input.getValue)

        // Si une valeur a bien été sélectionnée, on initialise l'erreur.
        if (props.input.getValue !== "") props.input.error = "";

        setError(props.input.getError);
    }

}
