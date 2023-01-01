import { EmptyException } from "../../exception/required-attribute/empty-exception";
import { UndefinedException } from "../../exception/required-attribute/undefined-exception";
import { IInputSetChoiceComponentOption } from "./input-set-choice";
import { Answer } from "../answer/answer";
import { InputBaseComponent } from "../input-base/input-base-component";

/**
 * Classe relative à un input ayant des réponses pré - définies, et à caractère de sélection, comme peut l'être un bouton radio, ou une liste déroulante.
 * 
 * @property {`Answer[]`} _answers : Correspond au différentes réponses possibles que peut prendre un input correspondant.
 * 
 * @extends {InputBaseComponent<T>} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export abstract class InputSetChoiceComponent<T> extends InputBaseComponent<T> {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    
    /** Correspond au différentes réponses possibles que peut prendre un input correspondant. */
    protected _answers!: Answer[];

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputSetChoiceComponentOption<T>
    ) {
        super(options);
        this.answers = options.answers!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer les réponses qui peuvent être associées à un input, i.e. si on a un input de type bouton radio, alors on aura par exemple comme réponses possibes ["appartement", "maison"]. */
    public get getAnswers() : Answer[] 
    { return this._answers; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser les réponses qui peuvent être associées à un input, i.e. si on a un input de type bouton radio, alors on aura comme réponses possibes ["appartement", "maison"]. */
    public set answers(answers: Answer[]) {
        // Si les réponses ne sont pas définies on lève une exception
        if (answers === undefined) throw new UndefinedException(this.getKey, "answers");

        // Si un tableau de réponses est donné mais est vide, on lève une exception
        if (answers.length <= 0) throw new EmptyException(this.getKey, "answers");

        this._answers = answers;
    }
   
}