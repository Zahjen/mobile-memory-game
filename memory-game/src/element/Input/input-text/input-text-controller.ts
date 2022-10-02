import { errorMessage } from "../global/variables/error-message";
import { PropsInputText } from "./input-text-props";

export class InputTextController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputTextController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputTextController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputTextController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputTextController.
     */
    public static getInstance() : InputTextController {
        if (!InputTextController._instance) 
            InputTextController._instance = new InputTextController();

        return InputTextController._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant d'opérer certaines actions lorsque l'utilisateur fait une saisie.
     * 
     * @param props Les différentes propriétés prises par l'input de type texte.
     * @param value La valeur saisie par l'utilisateur.
     * @param setError L'erreur à afficher à l'écran de l'utilisateur.
     */
    public onInputTextChange(
        props: PropsInputText,
        value: string,
        setError: React.Dispatch<React.SetStateAction<string>>
    ) : void {
        // On stocke la saisie de l'utilisateur dans notre objet.
        props.input.value = value;

        // Si le champ est requis et que la saisie est vide, on récupère l'erreur correspondante.
        if (props.input.isRequiredAndEmpty()) props.input.error = errorMessage.requiredField;

        // Si tout va bien, on initialise l'erreur comme étant vide.
        else props.input.error = "";

        // On pose l'erreur actuelle qui sera affichée à l'écran de l'utilisateur.
        setError(props.input.getError);
    }

}
