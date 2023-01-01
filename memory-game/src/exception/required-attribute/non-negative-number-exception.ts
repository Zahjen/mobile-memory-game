/**
 * Classe d'exception permettant de retourner un message stipulant que la saisie doit être un nombre positif.
 */
 export class NonNegativeNumberException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(identifier: string, attributeName: string) {
        super(`${ identifier } : L'attribut ${ attributeName } ne peut être négatif.`);
        Object.setPrototypeOf(this, NonNegativeNumberException.prototype);
    }
}