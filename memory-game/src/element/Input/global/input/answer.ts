import { UndefinedException } from "../exception/required-attribute/undefined-exception";
import { IAnswer } from "../interface/object/answer";

/**
 * Classe relative à une réponse possible pour un input du type radio par exemple.
 * 
 * @property {`number`} _id : Un id permettant d'identifier une réponse.
 * @property {`string`} _key : Une clé permettant d'identifier une valeur prise par cette réponse. 
 * @property {`string`} _value : La valeur que prendra une réponse.
 */
export class Answer {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** Un id permettant d'identifier une réponse. */
    private _id!: number;
    /** Une clé permettant d'identifier une valeur prise par cette réponse. */
    private _key!: string;
    /** La valeur que prendra une réponse. */
    private _value!: string;

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IAnswer
    ) {
        this.id = options.id;
        this.key = options.key;
        this.value = options.value;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer l'id d'une réponse. */
    public get getId() : number 
    { return this._id; }

    /** Méthode permettant de récupérer la clé permettant d'identifier une réponse. */
    public get getKey() : string 
    { return this._key; }

    /** Méthode permettant de récupérer la valeur d'un réponse. */
    public get getValue() : string 
    { return this._value; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser l'id d'une réponse. */
    public set id(id: number) {
        // Par défaut si aucun id n'est fournis on le pose à -1
        id === undefined ? this._id = -1 : this._id = id;
    }

    /** Méthode permettant de poser la clé d'identifier une réponse. */
    public set key(key: string) {
        // On retire les espaces à droite et à gauche de la valeur
        key = key.trim();

        // Si la clé entrée est vide on lève une exception
        if (key === "") throw new UndefinedException("Answer", "key");

        this._key = key;
    }

    /** Méthode permettant de poser la valeur d'un réponse. */
    public set value(value: string) {
        // On retire les espaces à droite et à gauche de la valeur
        value = value.trim();

        // Si la valeur entrée est vide on lève une exception
        if (value === "") throw new UndefinedException("Answer", "value");

        this._value = value;
    }


}