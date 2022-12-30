import { Grid } from "../modele/grid";

/**
 * Interface relative une partie de jeu, et composé de :
 * `grid` *(Grid)* : Correspond à la grille de jeu.
 */
export interface IGameOption {

    /** Correspond à la grille de jeu. */
    grid: Grid;

}