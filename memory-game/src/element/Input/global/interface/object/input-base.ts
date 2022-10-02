import { IInputComponentOption } from "./input";

/**
 * Interface d'objet relative à la défintion et à la construction d'un input, et composée de :
 * * `key` *(string)* : Correspond à la clé permettant d'identifier un input.
 * * `label` *(string)* : Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ...
 * * `type` *(EInputType)* : Correspond au type d'un input, i.e. "text", "radio", "dropdown", ...
 * * `value?` *(string)* : Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant.
 * * `error?` *(string)* : Correspond à l'erreur affichée à l'écran de l'utilisateur
 * * `isRequired?` *(boolean)* : Correspond au fait qu'un input puisse ou non être obligatoire à saisir.
 * 
 * @param T Le type qui pourras être pris par la valeur, string, number, ClasseName, etc.
 * @extends IInputComponentOption<T>
 */
export interface IInputBaseComponentOption<T> extends IInputComponentOption<T> {

    /** Correspond à l'erreur affichée à l'écran de l'utilisateur */
    error?: string,
    /** Correspond au fait qu'un input puisse ou non être obligatoire à saisir. */
    isRequired?: boolean

}