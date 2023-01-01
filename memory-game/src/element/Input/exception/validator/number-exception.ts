/**
 * Classe d'exception permettant de retourner un message stipulant que la saisie doit être de type nombre.
 */
 export class NumberException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(keyName: string, message: string) {
        super(`${keyName} : ${message}`);
        Object.setPrototypeOf(this, NumberException.prototype);
    }
    
}