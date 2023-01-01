import { UndefinedException } from "../exception/required-attribute/undefined-exception";
import { IGameOption } from "../interface/game";
import { Grid } from "./grid";

export class Game {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** Correspond à la grille de jeu. */
    private _grid!: Grid;
    
    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IGameOption
    ) {
        this.grid = options.grid;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer la grille de jeu. */
    public get getGrid() : Grid 
    { return this._grid; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser la grille de jeu. */
    public set grid(grid: Grid) {
        if (grid === undefined || grid === null) throw new UndefinedException("Game", "grid");

        this._grid = grid;
    }

    // --------------------------
    // Méthode
    // --------------------------

    

}