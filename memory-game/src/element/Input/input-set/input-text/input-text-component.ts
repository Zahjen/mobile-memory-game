import { KeyboardTypeOptions } from "react-native";
import { EInputType } from "../../enumeration/input-type";
import { InvalidInputTypeException } from "../../exception/required-attribute/invalid-input-type";
import { UndefinedException } from "../../exception/required-attribute/undefined-exception";
import { RequiredFieldException } from "../../exception/validator/required-field-exception";
import { InputBaseComponent } from "../input-base/input-base-component";
import { IInputTextComponentOption } from "./input-text-option";

/**
 * Classe relative à un input de type texte.
 * 
 * @property {`string`} _placeholder : Correspond à la phrase d'aide, notamment utile pour les input de type text par exemple.
 * @property {`KeyboardTypeOptions`} _keyboardType : Permet de déterminer le clavier à afficher, e.g. un clavier fait pour saisir des nombre, un autre pour saisir une addresse mail, etc.
 * 
 * @extends {InputBaseComponent<string>} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export class InputTextComponent extends InputBaseComponent<string> {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    
    /** Correspond à la phrase d'aide, notamment utile pour les input de type text par exemple. */
    private _placeholder!: string;
    /** Permet de déterminer le clavier à afficher, e.g. un clavier fait pour saisir des nombre, un autre pour saisir une addresse mail, etc. */
    private _keyboardType!: KeyboardTypeOptions;

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputTextComponentOption
    ) {
        super(options);
        this.placeholder = options.placeholder!;
        this.keyboardType = options.keyboardType!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer le placeholder d'un input. */
    public get getPlaceholder() : string 
    { return this._placeholder; }

    /** Méthode permettant de récupérer le type de clavier associé à un input. */
    public get getKeyboardType() : KeyboardTypeOptions 
    { return this._keyboardType; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser le placeholder d'un input. */
    public set placeholder(placeholder: string) {
        this._placeholder = (placeholder === undefined || placeholder === null)
            ? ""
            : placeholder.trim();
    }

    /** Méthode permettant de poser le type de clavier associé à un input. */
    public set keyboardType(keyboardType: KeyboardTypeOptions) {
        this._keyboardType = (keyboardType === undefined || keyboardType === null)
            ? "default" 
            : keyboardType;
    }

    // --------------------------
    // Surcharge
    // --------------------------

    /**
     * Surcharge de la méthode permettant de poser la valeur d'un input, et ena ccord avec le fait que l'input est de type texte.
     */
    public override set value(value: string) {
        this._value = (value === undefined || value === null)
            ? "" 
            : value.trim();
    }

    public override set type(type: EInputType) {
        // Si aucun type n'est entré, on lève une exception
        if (type === null || type === undefined) throw new UndefinedException(this.getKey, "type");
        
        if (type !== EInputType.TEXT) throw new InvalidInputTypeException(this.getKey, 'TEXT');

        this._type = type;
    }

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de déterminer si le champ est vide alors qu'il est requis.
     * 
     * @returns Un booléen déterminant si le champ est vide alors qu'il est requis.
     */
    public isRequiredAndEmpty() : boolean {
        return this._isRequired && this._value === "";
    }

    /**
     * Méthode permettant de déterminer si le champ est vide et qu'il n'est pas requis.
     * 
     * @returns Un booléen déterminant si le champ est vide et qu'il n'est pas requis.
     */
     public isEmptyAndNotRequired() : boolean {
        return !(this._isRequired) && this._value === "";
    }

    // --------------------------
    // Implémentation
    // --------------------------

    public override validator(): void {
        // On vérifie que la valeur n'est ni null, ni undefined.
        super.validator();

        // On retire les espaces à droite et à gauche de la saisie.
        this._value = this._value.trim();

        // Si la valeur est de type string, et que la valeur saisie est vide après avoir retirer les espaces à droite et à gauche, alors que le champ est requis, on lève une eception.
        if (this._isRequired && this._value === "") throw new RequiredFieldException(this.getKey);

        this.value = this._value;
    }
   
}