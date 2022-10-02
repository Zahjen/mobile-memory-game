import { RequiredFieldException } from "../global/exception/validator/required-field-exception";
import { InputSetChoiceComponent } from "../global/input/input-set-choice-component";
import { IInputRadioButtonComponentOption } from "./input-radio-button-option";

/**
 * Classe relative à un input de type bouton radio. Il s'agit ici de réponses prédéfinies, où l'utilisateur n'a qu'à sélectionner une réponse par celles pré - déterminées.
 * 
 * @extends {InputSetChoiceComponent<string>} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export class InputRadioButtonComponent extends InputSetChoiceComponent<string> {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputRadioButtonComponentOption
    ) {
        super(options);
        this.answers = options.answers!;
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

    /**
     * Surcharge de la méthode permettant de poser la valeur d'un input. On défini ici simplement que si la valeur n'est pas définie ou null, on la pose comme étant vide.
     */
    public override set value(value: string) {
        this._value = (value === undefined || value === null)
            ? "" 
            : value.trim();
    }

    // --------------------------
    // Implémentation
    // --------------------------

    public override validator(): void {
        // On vérifie que la valeur n'est ni null, ni undefined. 
        super.validator();

        // Si le champs est requis mais rien n'a été saisie, on lève une exception.
        if (this._isRequired && this._value === "") throw new RequiredFieldException(this.getKey);

        this.value = this._value;
    }
   
}