import { Animated, Easing } from "react-native";

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
    private animationBase(
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
    private showIcon(animation: Animated.Value) : void {
        this.animationBase(animation, 1);
    }

    /**
     * Méthode permettant de faire disparaître l'icon de la carte couramment sélectionnée.
     * 
     * @param animation L'animation a réaliser.
     */
    private hideIcon(animation: Animated.Value) : void {
        this.animationBase(animation, 0);
    }  

    /**
     * Méthode permettant de gérer l'animation lorsque la carte est cliquée. Le paramètre `flipRotation` permettant de déterminer si l'icon présent sur la carte est visible :
     * * `0`: La carte ne montre pas l'icon de la carte
     * * `1`: La carte montre l'icon de la carte
     * 
     * @param flipRotation Nombre permettant de se réperer et savoir si l'icon de la carte sélectionnée est visible.
     * @param animation L'animation a réaliser
     * @returns Le nombre correspondant à l'affichae ou non de l'icon présent sur la carte.
     */
    public onCellClicked(flipRotation: number, animation: Animated.Value) : number {
        flipRotation = (flipRotation === 0) ? 1 : 0;

        !!flipRotation 
            ? this.showIcon(animation)
            : this.hideIcon(animation);

        return flipRotation;
    }


}