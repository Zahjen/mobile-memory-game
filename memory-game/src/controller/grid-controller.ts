import { Animated, Easing } from "react-native";
import { Cell } from "../modele/cell";
import { Grid } from "../modele/grid";
import { Utils } from "../tools/utils";
import { CellController } from "./cell-controller";

export class GridController {

    // -----------------
    // Déclaration des attributs
    // -----------------

    private static _instance: GridController;

    // -----------------
    // Constructeur
    // -----------------

    private constructor() {}


    // -----------------
    // Getter
    // -----------------

    public static getInstance() : GridController {
        if (!this._instance) 
            this._instance = new GridController();

        return this._instance;
    }

    // -----------------
    // Méthode 
    // -----------------

    /**
     * Méthode permettant de générer une grille de jeu selon la taille fournie.
     * 
     * @param size La taille de la grille.
     * @returns La grille de jeu.
     */
    public generateGrid(size: number) : Grid {
        let grid!: Grid;

        try {
            // On tente de créer une grille de jeu avec la taille fournie en paramètre.
            grid = new Grid({
                size: size
            })

            // On génère les cases de la grille.
            grid.generateCells();
        } catch (e: any) {
            alert(e.message);
        }

        return grid;
    }

    public onCellClick(
        currentCell: Cell,
        grid: Grid,
        setGrid: React.Dispatch<React.SetStateAction<Cell[]>>,
        animation: Animated.Value,
        flippedCardAnimation: Animated.Value[],
        flippedCards: Cell[]
    ) : void {
        if (!flippedCards.includes(currentCell) && flippedCards.length < 2) {
            flippedCardAnimation.push(animation)
            flippedCards.push(currentCell)

            CellController.getInstance().showIcon(animation);
        }

        if (flippedCardAnimation.length === 2) {
            if (flippedCards[0].getIcon === flippedCards[1].getIcon) 
                this.sameCards(flippedCardAnimation, flippedCards, grid, setGrid)
            else
                this.notSameCards(flippedCardAnimation, flippedCards)   
        }
    }

    /**
     * Méthode permettant de mettre en oeuvre ce qui doit être fait lorsqu'aucune paire n'a été trouvée.
     * 
     * @param flippedCardAnimation Le tableau d'animation à vider, et permettant de retourner les cartes.
     * @param flippedCards Le tableau de cartes sélectionnées à vider.
     */
    private notSameCards(
        flippedCardAnimation: Animated.Value[],
        flippedCards: Cell[]
    ) : void {
        const utils = Utils.getInstance();

        setTimeout(() => {
            // On retourne les cartes
            for (let animation of flippedCardAnimation) {
                CellController.getInstance().hideIcon(animation);
            }    
            
            // On reset le tableau des cartes ayant été tournées
            utils.clearArray(flippedCardAnimation);
            utils.clearArray(flippedCards)
            
        }, 600)
    }

    /**
     * Méthode permettant de mettre en oeuvre ce qui doit être fait lorsqu'une paire a été trouvée.
     * 
     * @param flippedCardAnimation Le tableau d'animation à vider.
     * @param flippedCards Le tableau de cartes sélectionnées devant restées retournée.
     * @param grid La grille de jeu.
     * @param setGrid Ce qui permet de mettre à jour la grille de jeu.
     */
    private sameCards(
        flippedCardAnimation: Animated.Value[],
        flippedCards: Cell[],
        grid: Grid,
        setGrid: React.Dispatch<React.SetStateAction<Cell[]>>,
    ) : void {
        const utils = Utils.getInstance();

        for (let card of flippedCards) {
            card.isClickable = false
        }

        this.updateGrid(flippedCards, grid, setGrid);

        utils.clearArray(flippedCardAnimation);
        utils.clearArray(flippedCards);
    }

    /**
     * Méthode permettant de mettre à jour la grille de jeu en rendant non - cliquable les cartes ayant déjà été trouvées.
     * 
     * @param flippedCards Le tableau de cartes actuellement retournées.
     * @param grid La grille de jeu.
     * @param setGrid Ce qui permet de mettre à jour la grille de jeu.
     */
    private updateGrid(
        flippedCards: Cell[],
        grid: Grid,
        setGrid: React.Dispatch<React.SetStateAction<Cell[]>>
    ) : void {
        // On met à jour la grille avec les cartes qui ne sont plus cliquable.
        setGrid(grid.getCells.map((cell: Cell) => {
            // Si la carte est dans le tableau des cartes retournées, on rend cette carte non - cliquable.
            if (flippedCards.includes(cell)) {
                cell.isClickable = false;

                return cell;
            }
            
            return cell;
        }));
    }


}