import { Animated, Easing } from "react-native";
import { Grid } from "../modele/grid";

export class GridScreenController {

    // -----------------
    // Déclaration des attributs
    // -----------------

    private static _instance: GridScreenController;

    // -----------------
    // Constructeur
    // -----------------

    private constructor() {}


    // -----------------
    // Getter
    // -----------------

    public static getInstance() : GridScreenController {
        if (!this._instance) 
            this._instance = new GridScreenController();

        return this._instance;
    }

    // -----------------
    // Méthode 
    // -----------------

    public generateGrid(size: number) : Grid {
        let grid!: Grid;

        try {
            grid = new Grid({
                size: size
            })

            grid.generateCells();
        } catch (e: any) {
            console.log(e.message)
        }

        return grid;
    }


}