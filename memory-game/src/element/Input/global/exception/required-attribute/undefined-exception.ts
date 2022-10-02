/**
 * Classe d'exception permettant de retourner un message stipulant qu'un attribut requis n'a pas été saisi.
 */
 export class UndefinedException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(identifier: string, attributeName: string) {
        super(`${ identifier } : L'attribut ${ attributeName } doit être renseigné.`);
        Object.setPrototypeOf(this, UndefinedException.prototype);
    }
}