import { disableErrorHandling } from "expo";
import { Animated, Easing } from "react-native";
import { SquareCellProps } from "../component/square-cell";
import { Cell } from "../modele/cell";

export class CellController {

    // -----------------
    // Déclaration des attributs
    // -----------------

    private static _instance: CellController;

    // -----------------
    // Constructeur
    // -----------------

    private constructor() {}


    // -----------------
    // Getter
    // -----------------

    public static getInstance() : CellController {
        if (!this._instance) 
            this._instance = new CellController();

        return this._instance;
    }

    // -----------------
    // Méthode 
    // -----------------

    /**
     * Méthode permettant de mettre en place le temps et l'allure que portera l'animation de notre choix. 
     * 
     * @param animation L'animation a réaliser.
     * @param toValue La valeur jusque laquelle l'animation se déroulera (range)
     */
    public animationBase(
        animation: Animated.Value, 
        toValue: number
    ) : void {
        Animated.timing(animation, {
            toValue: toValue,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();
    }   

    /**
     * Méthode permettant de faire apparaître l'icon de la carte couramment sélectionnée.
     * 
     * @param animation L'animation a réaliser.
     */
    public showIcon(animation: Animated.Value) : void {
        this.animationBase(animation, 1);
    }

    /**
     * Méthode permettant de faire disparaître l'icon de la carte couramment sélectionnée.
     * 
     * @param animation L'animation a réaliser.
     */
    public hideIcon(animation: Animated.Value) : void {
        this.animationBase(animation, 0);
    }  
}