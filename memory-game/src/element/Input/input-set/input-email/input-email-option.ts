import { IInputTextComponentOption } from "../input-text/input-text-option";

/**
 * Interface d'objet relative à la défintion et à la construction d'un input, et composée de :
 * * `key` *(string)* : Correspond à la clé permettant d'identifier une réponse.
 * * `label` *(string)* : Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ...
 * * `type` *(EInputType)* : Correspond au type d'un input, i.e. "text", "radio", "dropdown", ...
 * * `value` *(string)* : Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant.
 * * `placeholder?` *(string)* : Correspond à la phrase d'aide pour la saisie.
 * * `error?` *(string)* : Correspond à l'erreur qui aura été catch si une valeur incorrecte est saisie par l'utilisateur.
 * * `isRequired?` *(boolean)* : Correspond au fait qu'un input puisse ou non être obligatoire à saisir.
 * * `keyboardType?` *(KeyboardTypeOptions)* : Permet de déterminer le clavier à afficher, e.g. un clavier fait pour saisir des nombres, un autre pour saisir une addresse mail, etc.
 */
export interface IInputEmailComponentOption extends IInputTextComponentOption {

    

}