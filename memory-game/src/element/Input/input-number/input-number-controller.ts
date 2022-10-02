import { errorMessage } from "../global/variables/error-message";
import { InputNumberComponent } from "./input-number-component";
import { PropsInputNumber } from "./input-number-props";

export class InputNumberController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputNumberController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputNumberController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputNumberController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputNumberController.
     */
    public static getInstance() : InputNumberController {
        if (!InputNumberController._instance) 
            InputNumberController._instance = new InputNumberController();

        return InputNumberController._instance;
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
    public onInputNumberChange(
        props: PropsInputNumber,
        value: string,
        setError: React.Dispatch<React.SetStateAction<string>>
    ) : void {
        // On stocke la saisie de l'utilisateur dans notre objet.
        props.input.value = value;

        // On récupère l'erreur selon le cas dans lequel on est.
        props.input.error = this.getInputNumberError(props.input);

        // On pose l'erreur actuelle qui sera affichée à l'écran de l'utilisateur.
        setError(props.input.getError);
    }

    /**
     * Méthode permettant de récupérer l'erreur à afficher sur l'écran de l'utilisateur selon le cas dans lequel on est.
     * 
     * @param input L'input permettant de saisir un nombre (entier ou décimal) pour lequel on souhaite récupérer l'erreur correspondante.
     * @returns L'erreur correspondante à afficher à l'écran.
     */
    private getInputNumberError(
        input: InputNumberComponent
    ) : string {
        if (input.isEmptyAndNotRequired()) return '';
        else if (input.isRequiredAndEmpty()) return errorMessage.requiredField;
        else if (input.isNotInteger()) return errorMessage.invalidInteger;
        else if (input.isNotNonNegativeInteger()) return errorMessage.invalidNonNegativeInteger;
        else if (input.isNotNegativeInteger()) return errorMessage.invalidNegativeInteger;
        else if (input.isNotDecimal()) return errorMessage.invalidDecimal;
        else if (input.isNotNonNegativeDecimal()) return errorMessage.invalidNonNegativeDecimal;
        else if (input.isNotNegativeDecimal()) return errorMessage.invalidNegativeDecimal;
        else return '';
    }

}
