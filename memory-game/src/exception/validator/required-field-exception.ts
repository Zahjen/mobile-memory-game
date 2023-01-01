/**
 * Classe d'exception permettant de retourner un message stipulant que le champ est requis.
 */
 export class RequiredFieldException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(keyName: string) {
        super(`${keyName} : Ce champ est requis.`);
        Object.setPrototypeOf(this, RequiredFieldException.prototype);
    }
}