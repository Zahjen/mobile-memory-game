import { UndefinedException } from "../element/Input/global/exception/required-attribute/undefined-exception";
import { NumberException } from "../element/Input/global/exception/validator/number-exception";
import { ICellOption } from "../interface/cell";

export class Cell {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** L'id de la cellule */
    private _id!: number;
    /** Chaine de caractères permettant de déterminer la source de l'image affichée sur la carte */
    private _icon!: string;
    
    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: ICellOption
    ) {
        this.id = options.id;
        this.icon = options.icon!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer l'id de la cellule. */
    public get getId() : number 
    { return this._id; }

    /** Méthode permettant de récupérer la chaine de caractères permettant de déterminer la source de l'image affichée sur la carte. */
    public get getIcon() : string
    { return this._icon; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser l'id de la cellule. */
    public set id(id: number) {
        this.coordinateCheck(id, "id");

        this._id = id;
    }

    /** Méthode permettant de poser la chaine de caractères permettant de déterminer la source de l'image affichée sur la carte. */
    public set icon(icon: string) {
        this._icon = (icon === null || icon === undefined) 
            ? ""
            : icon.trim();
    }

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de déterminer si la valeur est un entier ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un entier.
     */
    private isInteger(value: number) : boolean {
        return Number.isInteger(value);
    }

    /**
     * Méthode permettant de vérifier que la coordonnée fournie est correcte.
     * 
     * @param value La coordonnée x ou y.
     * @param attribute Le nom de l'attribut correspondant.
     */
    private coordinateCheck(value: number, attribute: string) : void {
        if (value === undefined || value === null) throw new UndefinedException("Cell", attribute);

        if (!this.isInteger(value) || value < 0) throw new NumberException(attribute, `L'attribut ${ attribute } doit être un entier positif.`);
    }

}