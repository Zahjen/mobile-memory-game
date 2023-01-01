import { errorMessage } from "../../variables/error-message";
import { PropsInputEmail } from "./input-email-props";

export class InputEmailController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputEmailController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputEmailController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputEmailController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputEmailController.
     */
    public static getInstance() : InputEmailController {
        if (!InputEmailController._instance) 
            InputEmailController._instance = new InputEmailController();

        return InputEmailController._instance;
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
        props: PropsInputEmail,
        value: string,
        setError: React.Dispatch<React.SetStateAction<string>>
    ) : void {
        // On stocke la saisie de l'utilisateur dans notre objet.
        props.input.value = value;

        // Si le champ n'est pas requis, et qu'il est vide, on initalise l'erreur comme étant vide.
        if (props.input.isEmptyAndNotRequired()) props.input.error = '';

        // Si le champ est requis et que la saisie est vide, on récupère l'erreur correspondante.
        else if (props.input.isRequiredAndEmpty()) props.input.error = errorMessage.requiredField;

        // Si le champ est une addresse mail, et que celui - ci est incorrecte, on récupère l'erreur correspondante.
        else if (props.input.isNotEmailValid()) props.input.error = errorMessage.invalidEmail;

        // Si tout va bien, on initialise l'erreur comme étant vide.
        else props.input.error = "";

        // On pose l'erreur actuelle qui sera affichée à l'écran de l'utilisateur.
        setError(props.input.getError);
    }

}
