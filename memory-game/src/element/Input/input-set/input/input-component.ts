import { EInputType } from "../../enumeration/input-type";
import { UndefinedException } from "../../exception/required-attribute/undefined-exception";
import { IInputComponentOption } from "./input";

/**
 * Classe abstraite relative aux diverses caractéristiques "obligatoires" que peut comporter un input.
 * 
 * @property {`T`} _value : Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant.
 * @property {`string`} _key : Correspond à la clé permettant d'identifier un input.
 * @property {`string`} _label : Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ...
 * @property {`EInputType`} _type : Correspond au type d'un input, i.e. "text", "radio", "dropdown", ...
 * 
 * @template T Le type associé à une valeur, i.e. string, number, boolean, etc.
 */
export abstract class InputComponent<T> {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant. */
    protected _value!: T;
    /** Correspond à la clé permettant d'identifier un input. */
    protected _key!: string;
    /** Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ... */
    protected _label!: string;
    /** Correspond au type d'un input, i.e. "text", "radio", "dropdown", ... */
    protected _type!: EInputType;


    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputComponentOption<T>
    ) {
        this.key = options.key;
        this.value = options.value!;
        this.label = options.label;
        this.type = options.type;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer la valeur d'un input. */
    public get getValue() : T 
    { return this._value; }

    /** Méthode permettant de récupérer la clé permettant d'identifier un input spécifique. */
    public get getKey() : string 
    { return this._key; }

    /** Méthode permettant de récupérer le label associé à un input particulier. */
    public get getLabel() : string 
    { return this._label; }

    /** Méthode permettant de récupérer le type d'un input particulier, e.g. 'radio', 'dropdown', 'text', etc. */
    public get getType() : EInputType 
    { return this._type; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser la valeur d'un input. */
    public set value(value: T) {
        // Si aucune valeur n'est entrée, on lève une exception
        if (value === undefined || value === null) throw new UndefinedException(this.getKey, 'value');

        this._value = value;
    }

    /** Méthode permettant de poser la clé permettant d'identifier un input spécifique. */
    public set key(key: string) {
        // Si aucune clé n'est fournie, on lève une exception
        if (key === undefined || key === null) throw new UndefinedException(this._key, 'key');

        // On retire les espaces à droite et à gauche de la valeur
        key = key.trim();

        // Si la clé entrée est vide on lève une exception
        if (key === "") throw new UndefinedException("InputComponent", "key");

        this._key = key;
    }

    /** Méthode permettant de poser le label associé à un input particulier. */
    public set label(label: string) {
        // Si aucun label n'est entré, on lève une exception
        if (label === undefined || label === null) throw new UndefinedException(this.getKey, 'label');

        // On retire les espaces à droite et à gauche de la valeur
        label = label.trim();

        // Si le label entré est vide on lève une exception
        if (label === "") throw new UndefinedException(this.getKey, "label");

        this._label = label;
    }

    /** Méthode permettant de poser le type d'un input particulier, e.g. 'radio', 'dropdown', 'text', etc. */
    public set type(type: EInputType) {
        // Si aucun type n'est entré, on lève une exception
        if (type === null || type === undefined) throw new UndefinedException(this.getKey, "type");

        this._type = type;
    }

}