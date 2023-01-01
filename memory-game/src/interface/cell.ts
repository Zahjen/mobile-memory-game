/**
 * Interface relative à la définition d'une cellule, et composée de :
 * * `id` *(number)* : L'id de la cellule.
 * * `icon` *(string)* : Chaine de caractères permettant de déterminer la source de l'image affichée sur la carte
 * * `isClickable` *(boolean)* : Attribut permettant de stipuler si oui ou non il est possible de cliquer sur la carte
 */
export interface ICellOption {

    /** L'id de la cellule */
    id: number;
    /** Chaine de caractères permettant de déterminer la source de l'image affichée sur la carte */
    icon: string;
    /** Attribut permettant de stipuler si oui ou non il est possible de cliquer sur la carte */
    isClickable: boolean

}