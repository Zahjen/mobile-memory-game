/**
 * Classe d'exception permettant de retourner un message stipulant que la saisie doit être de type nombre.
 */
 export class AttributeNumberException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(identifier: string, attributeName: string) {
        super(`${ identifier } : L'attribut ${ attributeName } doit être de type nombre.`);
        Object.setPrototypeOf(this, AttributeNumberException.prototype);
    }
}