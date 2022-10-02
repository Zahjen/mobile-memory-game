import { EInputType } from "../global/enumeration/input-type";
import { InvalidInputTypeException } from "../global/exception/required-attribute/invalid-input-type";
import { UndefinedException } from "../global/exception/required-attribute/undefined-exception";
import { InvalidEmailException } from "../global/exception/validator/invalid-email-exception";
import { regex } from "../global/variables/regex";
import { InputTextComponent } from "../input-text/input-text-component";
import { IInputEmailComponentOption } from "./input-email-option";

/**
 * Classe relative à un input permettant la saisie d'un email..
 * 
 * @extends {InputTextComponent} Classe relative à un input de type texte.
 */
export class InputEmailComponent extends InputTextComponent {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    
    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputEmailComponentOption
    ) {
        super(options);
    }

    // --------------------------
    // Getter
    // --------------------------

    // --------------------------
    // Setter
    // --------------------------

    // --------------------------
    // Surcharge
    // --------------------------

    public override set type(type: EInputType) {
        // Si aucun type n'est entré, on lève une exception
        if (type === null || type === undefined) throw new UndefinedException(this.getKey, "type");
        
        if (type !== EInputType.EMAIL) throw new InvalidInputTypeException(this.getKey, 'EMAIL');

        this._type = type;
    }

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de déterminer si oui ou non l'email est invalide.
     * 
     * @returns Un booléen déterminant si oui ou non l'email est invalide.
     */
    public isNotEmailValid() : boolean {
        return this.getType === EInputType.EMAIL && !this._value.match(new RegExp(regex.email));
    }

    // --------------------------
    // Implémentation
    // --------------------------

    public override validator(): void {
        // On vérifie que la valeur n'est ni null, ni undefined. On vérifie ensuite que si le champ est requis, il a bien été renseigné.
        super.validator();

        // Si l'email fourni n'a pas le bon format, on lève une exception
        if (this._value !== "" && this.isNotEmailValid()) throw new InvalidEmailException(this.getKey);

        this.value = this._value;
    }
   
}