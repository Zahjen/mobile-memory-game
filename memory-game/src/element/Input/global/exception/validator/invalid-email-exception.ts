/**
 * Classe d'exception permettant de retourner un message stipulant que l'e-mail entré est invalide.
 */
 export class InvalidEmailException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(keyName: string) {
        super(`${keyName} : Cet e-mail est invalide.`);
        Object.setPrototypeOf(this, InvalidEmailException.prototype);
    }
}