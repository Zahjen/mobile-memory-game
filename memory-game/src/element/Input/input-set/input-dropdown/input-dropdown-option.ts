import { Answer } from "../answer/answer";
import { IInputSetChoiceComponentOption } from "../input-set-choice/input-set-choice";

/**
 * Interface d'objet relative à la défintion et à la construction d'un input, et composée de :
 * * `key` *(string)* : Correspond à la clé permettant d'identifier une réponse.
 * * `label` *(string)* : Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ...
 * * `type` *(EInputType)* : Correspond au type d'un input, i.e. "text", "radio", "dropdown", ...
 * * `value` *(string)* : Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant.
 * * `answer` *(Answer[])* : Correspond à toutes les possibles réponses parmi lesquelles il faudra faire un choix de sélection.
 * * `error?` *(string)* : Correspond à l'erreur qui aura été catch si une valeur incorrecte est saisie par l'utilisateur.
 * * `isRequired?` *(boolean)* : Correspond au fait qu'un input puisse ou non être obligatoire à saisir.
 * * `title?` *(string)* : Permet de donner un titre à la liste déroulante.
 */
export interface IInputDropdownComponentOption extends IInputSetChoiceComponentOption<Answer> {

    /** Permet de donner un titre à la liste déroulante. */
    title?: string

}