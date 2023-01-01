import { UndefinedException } from "../exception/required-attribute/undefined-exception";
import { NumberException } from "../exception/validator/number-exception";
import { ICellOption } from "../interface/cell";

export class Cell {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** L'id de la cellule */
    private _id!: number;
    /** Chaine de caractères permettant de déterminer la source de l'image affichée sur la carte */
    private _icon!: string;
    /** Attribut permettant de stipuler si oui ou non il est possible de cliquer sur la carte */
    private _isClickable!: boolean
    
    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: ICellOption
    ) {
        this.id = options.id;
        this.icon = options.icon;
        this.isClickable = options.isClickable;
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

    /** Méthode permettant de récupérer le fait permettant de savoir si oui ou non il est possible de cliquer sur la carte */
    public get getIsClickable() : boolean
    { return this._isClickable; }

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

    /** Méthode permettant de poser le fait permettant de savoir si oui ou non il est possible de cliquer sur la carte */
    public set isClickable(isClickable: boolean) {
        this._isClickable = (isClickable === null || isClickable === undefined) 
            ? true
            : isClickable;
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