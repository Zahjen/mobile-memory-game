/**
 * Classe d'exception permettant de retourner un message stipulant que l'attribut type ne correspond pas à la classe du composant.
 */
 export class InvalidInputTypeException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(keyName: string, type: string) {
        super(`${ keyName } : L'attribut type pour cette instance de classe doit être ${ type }.`);
        Object.setPrototypeOf(this, InvalidInputTypeException.prototype);
    }
}