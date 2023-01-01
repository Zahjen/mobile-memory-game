import { EInputType } from "../../enumeration/input-type";
import { InvalidInputTypeException } from "../../exception/required-attribute/invalid-input-type";
import { UndefinedException } from "../../exception/required-attribute/undefined-exception";
import { RequiredFieldException } from "../../exception/validator/required-field-exception";
import { Answer } from "../answer/answer";
import { InputSetChoiceComponent } from "../input-set-choice/input-set-choice-component";
import { IInputDropdownComponentOption } from "./input-dropdown-option";

/**
 * Classe relative à un input de type dropdown.
 * 
 * @property {`string`} _title : Correspond à toutes les possibles réponses parmi lesquelles il faudra faire un choix de sélection.
 * 
 * @extends {InputSetChoiceComponent<Answer>} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export class InputDropdownComponent extends InputSetChoiceComponent<Answer> {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    
    /** Correspond à toutes les possibles réponses parmi lesquelles il faudra faire un choix de sélection. */
    private _title!: string;

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputDropdownComponentOption
    ) {
        super(options);
        this.title = options.title!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer les possibles réponses parmi lesquelles il faudra faire un choix de sélection. */
    public get getTitle() : string 
    { return this._title; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser les possibles réponses parmi lesquelles il faudra faire un choix de sélection. */
    public set title(title: string) {
        this._title = (title === undefined || title === null) 
            ? ''
            : title.trim();
    }

    // --------------------------
    // Surcharge
    // --------------------------

    /**
     * Surcharge de la méthode permettant de poser les réponses d'un input. On défini ici simplement que si les réponses ne sont pas définies ou null, on les pose comme étant vide.
     */
    public override set answers(answers: Answer[]) {
        this._answers = (answers === undefined || answers === null)
            ? [] 
            : answers;
    }

    public override set type(type: EInputType) {
        // Si aucun type n'est entré, on lève une exception
        if (type === null || type === undefined) throw new UndefinedException(this.getKey, "type");

        if (type !== EInputType.DROPDOWN) throw new InvalidInputTypeException(this._key, 'DROPDOWN');

        this._type = type;
    }

    // --------------------------
    // Implémentation
    // --------------------------

    public override validator(): void {
        // On vérifie que la valeur n'est ni null, ni undefined.
        super.validator();

        // On vérifie que si le champ est requis, une option a bien été sélectionnée.
        if (this._isRequired && this._value.getId === 0) throw new RequiredFieldException(this.getKey);

        this.value = this._value;
    }
}