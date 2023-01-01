import { UndefinedException } from "../../exception/required-attribute/undefined-exception";
import { Validator } from "../../interface/abstraction/validator";
import { IInputBaseComponentOption } from "./input-base";
import { InputComponent } from "../input/input-component";

/**
 * Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 * 
 * @property {`boolean`} _isRequired : Correspond au fait qu'un input puisse ou non être obligatoire à saisir.
 * @property {`string`} _error : Correspond à l'erreur sera affichée si une valeur incorrecte est saisie par l'utilisateur.
 * 
 * @extends {InputComponent<T>} Classe abstraite relative aux diverses caractéristiques "obligatoires" que peut comporter un input.
 * @implements {Validator} Interface permettant d'opérer des validation sur le champ correspondant.
 * 
 * @template T Type de la valeur que peut prendre un input, i.e. string, number, ...
 */
export abstract class InputBaseComponent<T> extends InputComponent<T> implements Validator {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** Correspond au fait qu'un input puisse ou non être obligatoire à saisir. */
    protected _isRequired!: boolean;
    /** Correspond à l'erreur sera affichée si une valeur incorrecte est saisie par l'utilisateur. */
    protected _error!: string;

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputBaseComponentOption<T>
    ) {
        super(options)
        this.error = options.error!;
        this.isRequired = options.isRequired!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer l'erreur que doit générer un input mal rempli. */
    public get getError() : string 
    { return this._error; }

    /** Méthode permettant de récupérer la définition de si l'input est requis ou non.  */
    public get getIsRequired() : boolean 
    { return this._isRequired; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser l'erreur que doit générer un input mal rempli. */
    public set error(error: string) {
        this._error = (error === undefined) ? '' : error.trim();
    }

    /** Méthode permettant de définir si l'input est requis ou non.  */
    public set isRequired(isRequired: boolean) {
        // Par défaut on pose que le champ est requis
        this._isRequired = (isRequired === undefined) ? true : isRequired;
    }

    // --------------------------
    // Implémentation
    // --------------------------

    public validator(): void {
        // Si aucune valeur n'est entrée, on lève une exception.
        if (this._value === undefined || this._value === null) throw new UndefinedException(this.getKey, 'value');
    }

}