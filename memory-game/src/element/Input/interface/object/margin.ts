/**
 * Interface composée de :
 * * `left` *(number)* : Marge appliquée à gauche d'un élément.
 * * `right` *(number)* : Marge appliquée à droite d'un élément.
 * * `top` *(number)* : Marge appliquée en haut d'un élément.
 * * `bottom?` *(number)* : Marge appliquée en bas d'un élément.
 */
 export interface IMargin {

    /** Marge appliquée à gauche d'un élément */
    left?: number,
    /** Marge appliquée à droite d'un élément */
    right?: number,
    /** Marge appliquée en haut d'un élément */
    top?: number,
    /** Marge appliquée en bas d'un élément */
    bottom?: number
    
}