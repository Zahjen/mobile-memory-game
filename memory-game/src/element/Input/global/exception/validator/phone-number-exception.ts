/**
 * Classe d'exception permettant de retourner un message stipulant que le numéro de téléphone entré est invalide.
 */
 export class PhoneNumberException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(keyName: string) {
        super(`${keyName} : Le numéro de téléphone saisie est invalide.`);
        Object.setPrototypeOf(this, PhoneNumberException.prototype);
    }
}