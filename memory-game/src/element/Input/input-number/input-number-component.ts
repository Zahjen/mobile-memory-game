import { EInputType } from "../global/enumeration/input-type";
import { ENumericalDataType } from "../global/enumeration/numerical-data-type";
import { InvalidInputTypeException } from "../global/exception/required-attribute/invalid-input-type";
import { UndefinedException } from "../global/exception/required-attribute/undefined-exception";
import { NumberException } from "../global/exception/validator/number-exception";
import { errorMessage } from "../global/variables/error-message";
import { regex } from "../global/variables/regex";
import { InputTextComponent } from "../input-text/input-text-component";
import { IInputNumberComponentOption } from "./input-number-option";

/**
 * Classe relative à un input de type nombre.
 * 
 * @property {`ENumericalDataType`} _numericalDataType : Correspond au type de données numérique que l'on peut associer à un inpuit de type NUMBER.
 * 
 * @extends {InputTextComponent} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export class InputNumberComponent extends InputTextComponent {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    
    /** Correspond au type de données numérique que l'on peut associer à un inpuit de type NUMBER. */
    private _numericalDataType!: ENumericalDataType;

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputNumberComponentOption
    ) {
        super(options);
        this.numericalDataType = options.numericalDataType!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer le type de données numérique d'un input. */
    public get getNumericalDataType() : ENumericalDataType 
    { return this._numericalDataType; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser le type de données numérique d'un input. */
    public set numericalDataType(numericalDataType: ENumericalDataType) {
        this._numericalDataType = (numericalDataType === undefined || numericalDataType === null)
            ? ENumericalDataType.DECIMAL
            : numericalDataType;
    }

    // --------------------------
    // Surcharge
    // --------------------------

    public override set type(type: EInputType) {
        // Si aucun type n'est entré, on lève une exception
        if (type === null || type === undefined) throw new UndefinedException(this.getKey, "type");
        
        if (type !== EInputType.NUMBER) throw new InvalidInputTypeException(this.getKey, 'NUMBER');

        this._type = type;
    }

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un entier ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un entier.
     */
    public isNotInteger() : boolean {
        return this._numericalDataType === ENumericalDataType.INTEGER 
            && !this._value.match(new RegExp(regex.integer));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un entier positif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un entier positif.
     */
    public isNotNonNegativeInteger() : boolean {
        return this._numericalDataType === ENumericalDataType.NON_NEGATIVE_INTEGER 
            && !this._value.match(new RegExp(regex.nonNegativeInteger));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un entier négatif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un entier négatif.
     */
    public isNotNegativeInteger() : boolean {
        return this._numericalDataType === ENumericalDataType.NEGATIVE_INTEGER 
            && !this._value.match(new RegExp(regex.negativeInteger));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un nombre à virgule ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un nombre à virgule.
     */
     public isNotDecimal() : boolean {
        return this._numericalDataType === ENumericalDataType.DECIMAL 
            && !this._value.match(new RegExp(regex.decimal));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un nombre à virgule positif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un nombre à virgule positif.
     */
    public isNotNonNegativeDecimal() : boolean {
        return this._numericalDataType === ENumericalDataType.NON_NEGATIVE_DECIMAL 
            && !this._value.match(new RegExp(regex.nonNegativeDecimal));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un nombre à virgule négatif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un nombre à virgule négatif.
     */
    public isNotNegativeDecimal() : boolean {
        return this._numericalDataType === ENumericalDataType.NEGATIVE_DECIMAL 
            && !this._value.match(new RegExp(regex.negativeDecimal));
    }

    // --------------------------
    // Implémentation
    // --------------------------

    public override validator(): void {
        // On vérifie que la valeur n'est ni null, ni undefined. On vérifie ensuite que si le champ est requis, il a bien été renseigné.
        super.validator();

        // Si la saisie n'est pas un entier, on lève une exception
        if (this._value !== "" && this.isNotInteger()) 
            throw new NumberException(this.getKey, errorMessage.invalidInteger);

        // Si la saisie n'est pas un entier positif, on lève une exception
        else if (this._value !== "" && this.isNotNonNegativeInteger()) 
            throw new NumberException(this.getKey, errorMessage.invalidNonNegativeInteger);

        // Si la saisie n'est pas un entier négatif, on lève une exception
        else if (this._value !== "" && this.isNotNegativeInteger()) 
            throw new NumberException(this.getKey, errorMessage.invalidNegativeInteger);

        // Si la saisie n'est pas un décimal, on lève une exception
        else if (this._value !== "" && this.isNotDecimal()) 
            throw new NumberException(this.getKey, errorMessage.invalidDecimal);

        // Si la saisie n'est pas un décimal positif, on lève une exception
        else if (this._value !== "" && this.isNotNonNegativeDecimal()) 
            throw new NumberException(this.getKey, errorMessage.invalidNonNegativeDecimal);

        // Si la saisie n'est pas un décimal négatif, on lève une exception
        else if (this._value !== "" && this.isNotNegativeDecimal()) 
            throw new NumberException(this.getKey, errorMessage.invalidNegativeDecimal);

        this.value = this._value;
    }


   
}