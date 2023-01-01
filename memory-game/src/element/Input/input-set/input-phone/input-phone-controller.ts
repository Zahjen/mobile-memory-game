import parsePhoneNumberFromString, { AsYouType } from "libphonenumber-js";
import { errorMessage } from "../../variables/error-message";
import { PropsInputPhone, PropsItemCountry } from "./input-phone-props";


export class InputPhoneController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputPhoneController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputPhoneController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputPhoneController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputPhoneController.
     */
    public static getInstance() : InputPhoneController {
        if (!InputPhoneController._instance) 
            InputPhoneController._instance = new InputPhoneController();

        return InputPhoneController._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de stocker la saisie de l'utilisateur, et de gérer les erreurs à afficher à l'écran de l'utilisateur. 
     * 
     * @param value La valeur saisie par l'utilisateur.
     * @param props Correspond à l'interface d'objet utilisée dans le composant permettant de générer un input de saisie de téléphone.
     * @param setError L'erreur a afficher à l'écran de l'utilisateur.
     */
    public onTextChange(
        value: string,
        props: PropsInputPhone,
        setError: React.Dispatch<React.SetStateAction<string>>
    ): void {
        // On intancie la classe AsYouType avec le pays choisi par l'utilisateur. Par défaut le pays est la France.
        const asYouType = new AsYouType(props.input.getCountryCode);

        // On récupère le numéro de téléphone (en temps réel) que l'utilisateur a saisie.
        asYouType.input(value);

        // On sotcke cette saisie dans notre input.
        props.input.value = value;

        // Si le champ est requis et que la valeur est vide, on affiche une erreur
        if (props.input.getIsRequired === true && value === "") props.input.error = errorMessage.requiredField;
        // Si le numéro de téléphone n'est pas valide par rapport au drapeau sélectionné, on affiche une erreur
        else if (!asYouType.getNumber()?.isValid()) props.input.error = errorMessage.invalidPhoneNumber;
        else props.input.error = "";

        setError(props.input.getError);
    }

    /**
     * Méthode permettant de mettre à jour le titre du bouton permettant de sélectionner un pays.
     * 
     * @param props Correspond à l'interface d'objet utilisée dans le composant permettant la sélection de pays pour le numéro de téléphone.
     */
     public onCountryChange(
        props: PropsItemCountry,
    ): void {
        // On stocke la valeur saisie par l'utilisateur.
        props.input.countryCode = props.item.code;

        // On met à jour le titre du bouton permettant d'ouvrir le modal.
        props.setTitle(`${ props.item.code }`); 

        // On parse le numéro de téléphone selon le pays choisi, pour vérifier de la validité du numéro de téléphone.
        let parse = parsePhoneNumberFromString(props.input.getValue, props.input.getCountryCode);

        // Si le numéro de téléphone n'est pas valide, on met à jour l'erreur à afficher à l'écran.
        if (!parse?.isValid()) props.input.error = errorMessage.invalidPhoneNumber;
        else props.input.error = "";

        props.setError(props.input.getError);
    }

}

