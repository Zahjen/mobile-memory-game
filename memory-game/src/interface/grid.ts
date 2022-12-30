import { Cell } from "../modele/cell";

/**
 * Interface relative aux caractéristiques d'une grille de jeux, et composée de :
 * * `size?` *(number)* : Le nombre de cartes que doit prendre la grille.
 * * `cells` *(Cell[])* : Les différentes cellules composant la grille.
 */
export interface IGridOption {

    /** Le nombre de cartes que doit prendre la grille. */
    size?: number;
    /** Les différentes cellules composant la grille. */
    cells?: Cell[];

}