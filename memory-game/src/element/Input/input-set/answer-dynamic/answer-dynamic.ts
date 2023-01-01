import { EmptyException } from "../../exception/required-attribute/empty-exception";
import { IAnswerDynamic } from "./answer-dynamic-option";
import { TypeInput } from "../../type/input-type";
import { Answer } from "../answer/answer";

/**
 * Classe relative à une réponse possible pour un input du type radio par exemple. On utilisera ce type de réponse lorsque l'une ou plusieurs des réponses possibles d'un input peut donner lieu à de nouveaux inputs. Par exemple, si un input nous permet de savoir s'il y avait présence d'un véhicule lors de l'enquête, et que l'utilisateur répond 'oui', on génère de nouveaux inputs à remplir concernant, par exemple, la couleur, la marque, etc. relative à un véhicule.
 * 
 * @property {`boolean`} _isExtended : Statut d'une réponse sur sa potentielle extension, i.e. savoir si c'est une réponse qui pourra donner lieu à d'autres questions.
 * @property {`TypeInput`} _inputs : Inputs découlant d'une réponse en particulier.
 * 
 * @extends {Answer} Classe relative à une réponse possible pour un input du type radio par exemple.
 */
export class AnswerDynamic extends Answer {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** Statut d'une réponse sur sa potentielle extension, i.e. savoir si c'est une réponse qui pourra donner lieu à d'autres questions. */
    private _isExtended!: boolean;
    /** Inputs découlant d'une réponse en particulier. */
    private _inputs!: TypeInput[];

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IAnswerDynamic
    ) {
        super(options);
        this.isExtended = options.isExtended!;
        this.inputs = options.inputs!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /**  Méthode permettant de savoir récupérer le statut d'une réponse sur sa potentielle extension, i.e. savoir si c'est une réponse qui pourra donner lieu à d'autres questions. */
    public get getIsExtended() : boolean 
    { return this._isExtended; }

    /** Méthode permettant de récupérer les inputs découlant d'une réponse en particulier. */
    public get getInputs() : TypeInput[] 
    { return this._inputs; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser le statut d'une réponse sur sa potentielle extension, i.e. savoir si c'est une réponse qui pourra donner lieu à d'autres questions. */
    public set isExtended(isExtended: boolean) {
        // On pose que par défaut une réponse ne peut donner lieu à de nouveaux inputs
        isExtended === undefined ? isExtended = false : this._isExtended = isExtended;
    }

    /** Méthode permettant de poser les inputs découlant d'une réponse en particulier. */
    public set inputs(inputs: TypeInput[]) {
        // Si aucun input n'est fourni, on a deux possibilités :
        if (inputs === undefined) {
            // Si la réponse peut donner lieu à de nouveaux inputs, on lève une exception
            if (this.getIsExtended) throw new EmptyException("AnswerDynamic", "inputs");
            // Si ce n'est une réponse pouvant donner lieu à de nouveaux inputs, on instancie un tableau vide
            else this._inputs = [];
        }

        this._inputs = inputs;
    }

}