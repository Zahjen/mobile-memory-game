import { UndefinedException } from "../element/Input/global/exception/required-attribute/undefined-exception";
import { NumberException } from "../element/Input/global/exception/validator/number-exception";
import { IGridOption } from "../interface/grid";
import { Cell } from "./cell";
import { cardData } from "../variable/card-data";

export class Grid {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** Le nombre de cartes que doit prendre la grille. */
    private _size!: number;
    /** Les différentes cellules composant la grille. */
    private _cells!: Cell[];
    
    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IGridOption
    ) {
        this.size = options.size!;
        this.cells = options.cells!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer le nombre de cartes composant la grille. */
    public get getSize() : number 
    { return this._size; }

    /** Méthode permettant de récupérer les différentes cellules composant la grille. */
    public get getCells() : Cell[] 
    { return this._cells; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser le nombre de cartes composant la grille. */
    public set size(size: number) {
        this.coordinateCheck(size, "size");

        this._size = size;
    }

    /** Méthode permettant de poser les différentes cellules composant la grille. */
    public set cells(cells: Cell[]) {
        this._cells = (cells === null || cells === undefined)
            ? []
            : cells; 
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
        if (value === undefined || value === null) throw new UndefinedException("Grid", attribute);

        if (!this.isInteger(value) || value < 0) throw new NumberException(attribute, `L'attribut ${ attribute } doit être un entier positif.`);
    }

    /**
     * Méthode permettant d'ajouter une nouvelle cellule à la grille.
     * 
     * @param cell La nouvelle cellule à ajouter.
     * @returns La longueur courante du tableau.
     */
    public addCell(cell: Cell) : number {
        if (cell === null || cell === undefined) throw new UndefinedException("Grid", "cell");
        
        return this._cells.push(cell);
    }

    /**
     * Méthode permettant d'ajouter une nouvelle cellule à la grille. 
     * 
     * @returns Retourne la cellule supprimée ou undefined si le tableau est vide.
     */
    public removeLastCell() : Cell | undefined {       
        return this._cells.pop();
    }

    /**
     * Méthode permettant de mélanger les différents icônes.
     */
    public shuffleCard() : string[] {
        for (let i = this._size - 1; i > 0; i--) {
            let randomIndex: number = Math.floor(Math.random() * (i + 1));
            let currentValue = cardData[i]; 

            cardData[i] = cardData[randomIndex];
            cardData[randomIndex] = currentValue;
        }

        return cardData.slice(0, this._size);
    }

    /**
     * Méthode permettant de générer les différente cellule de la grille.
     */
    public generateCells() : void {
        let array: string[] = this.shuffleCard();

        for (let i = 0 ; i < array.length ; i++) {
            let cell = new Cell({
                id: i,
                icon: array[i]
            });

            this.addCell(cell);
        }
    }

}