import { EInputType } from "../../enumeration/input-type";

/**
 * Interface d'objet relative à la défintion et à la construction d'un input, et composée de :
 * * `key` *(string)* : Correspond à la clé permettant d'identifier un input.
 * * `label` *(string)* : Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ...
 * * `type` *(EInputType)* : Correspond au type d'un input, i.e. "text", "radio", "dropdown", ...
 * * `value?` *(string)* : Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant.
 * 
 * @param T Le type qui pourra être pris par la valeur, string, number, ClasseName, etc.
 */
export interface IInputComponentOption<T> {

    /** Correspond à la clé permettant d'identifier un input. */
    key: string,
    /** Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ... */
    label: string,
    /** Correspond au type d'un input, i.e. "text", "radio", "dropdown", ... */
    type: EInputType,
    /** Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant. */
    value?: T

}