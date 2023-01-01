/**
 * Classe d'exception permettant de retourner un message stipulant que le type de l'attribut entré n'est pas correcte.
 */
 export class TypeErrorException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(identifier: string, attributeName: string, type: string) {
        super(`${ identifier } : L'attribut ${ attributeName } doit être un ${ type }.`);
        Object.setPrototypeOf(this, TypeErrorException.prototype);
    }
}