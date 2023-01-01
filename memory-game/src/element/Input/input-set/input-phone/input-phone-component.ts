import { parsePhoneNumber } from "libphonenumber-js/max";
import { CountryCode, E164Number, NumberType } from "libphonenumber-js";
import { isValidPhoneNumber } from "libphonenumber-js/min";
import { EInputType } from "../../enumeration/input-type";
import { InvalidInputTypeException } from "../../exception/required-attribute/invalid-input-type";
import { Utils } from "../../tools/utils";
import { frenchCountries } from "../../variables/french-countries";
import { InputTextComponent } from "../input-text/input-text-component";
import { IInputPhoneComponentOption } from "./input-phone-option";
import { PhoneNumberException } from "../../exception/validator/phone-number-exception";
import { UndefinedException } from "../../exception/required-attribute/undefined-exception";

/**
 * Classe relative à un input de type téléphone.
 * 
 * @property {`CountryCode`} _countryCode : Correspond au code Pays en norme ISO 3166-1 alpha-2, i.e. FR pour France, ...
 * 
 * @extends {InputTextComponent} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export class InputPhoneComponent extends InputTextComponent {

    // --------------------------
    // Constructeur
    // --------------------------

    /** Correspond au code Pays en norme ISO 3166-1 alpha-2, i.e. FR pour France, ... */
    private _countryCode!: CountryCode;

    constructor(
        options: IInputPhoneComponentOption
    ) {
        super(options);
        this.countryCode = options.countryCode!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer le code pays. */
    public get getCountryCode() : CountryCode 
    { return this._countryCode; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser le code pays. */
    public set countryCode(countryCode: CountryCode) {
        // On pose par défaut que le code pays est français
        (countryCode === undefined || countryCode === null) 
            ? this._countryCode = "FR" 
            : this._countryCode = countryCode;
    }

    // --------------------------
    // Surcharge
    // --------------------------

    public override set type(type: EInputType) {
        // Si aucun type n'est entré, on lève une exception
        if (type === null || type === undefined) throw new UndefinedException(this.getKey, "type");
        
        if (type !== EInputType.TEL) throw new InvalidInputTypeException(this.getKey, 'TEL');

        this._type = type;
    }

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de récupèrer le nom d'un pays en utilisant son code pays.
     * Si le code pays est par exemple FR, cette méthode nous retourne France.
     * 
     * @returns Le nom du pays dépendant du code pays entré.
     */
     public getCountryName() : string {
        // On recherche le pays que l'utilisateur à saisie dans la liste de tous les pays à l'aide d'une recherche dichotomique
        const index = Utils
            .getInstance()
            .binarySearchOverObject(frenchCountries, this._countryCode, "code");

        return frenchCountries[index]["name"];
    }

    /**
     * Méthode permettant de récupérer le type d'un numéro de téléphone, i.e. MOBILE, FIXE, VOIP, etc.
     * 
     * @returns Le type d'un numéro de téléphone, i.e. MOBILE, FIXE, VOIP, etc.
     */
     public getPhoneNumberType() : NumberType {
        return parsePhoneNumber(this._value, this._countryCode).getType();
    }

    /**
     * Méthode permettant de récupérer le code d'un pays que le numéro de téphone débute ou non par un indicatif.
     * 
     * @returns Le code d'un pays que le numéro de téphone débute ou non par un indicatif.
     */
    public getCountry() : CountryCode {
        return parsePhoneNumber(this._value, this._countryCode).country!;
    }

    /**
     * Méthode permettant de récupérer le bon formattage d'un numéro de téléphone, i.e. avec l'indicatif
     * 
     * @returns Le bon formattage d'un numéro de téléphone, i.e. avec l'indicatif
     */
    public getPhoneNumberFormat() : E164Number {
        return parsePhoneNumber(this._value, this._countryCode).number;
    }

    /**
     * Méthode permettant de récupérer la validité d'un numéro de téléphone.
     * 
     * @returns La validité d'un numéro de téléphone.
     */
    public getPhoneNumberValidity() : boolean {
        return parsePhoneNumber(this._value, this._countryCode).isValid();
    }

    // --------------------------
    // Implémentation
    // --------------------------

    public override validator(): void {
        // On vérifie que la valeur n'est ni null, ni undefined. On vérifie ensuite que si le champ est requis, il a bien été renseigné.
        super.validator();

        // On stocke la validité du numéro de téléphone saisie vis-à-vis su pays sélectionné.
        const isValid = isValidPhoneNumber(this._value, this._countryCode) === true;

        // Si quelque chose a été fourni mais que la valeur ne concorde pas, on lève une exception.
        if (this._value !== "" && !isValid) throw new PhoneNumberException(this.getKey);

        this.value = this._value;
    }
   
}