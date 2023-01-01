import { Answer } from "../answer/answer";
import { IInputBaseComponentOption } from "../input-base/input-base";

/**
 * Interface d'objet relative à la défintion et à la construction d'un input, et composée de :
 * * `key` *(string)* : Correspond à la clé permettant d'identifier une réponse.
 * * `label` *(string)* : Correpsond au label associé à une question, i.e. "Nom", "Débiteur rencontré", ...
 * * `type` *(EInputType)* : Correspond au type d'un input, i.e. "text", "radio", "dropdown", ...
 * * `error?` *(string)* : Correspond à l'erreur qui aura été catch si une valeur incorrecte est saisie par l'utilisateur.
 * * `answer?` *(Answer[])* : Correspond au différentes réponses possibles que peut prendre un input de type radio ou dropdown par exemple.
 * * `value?` *(string)* : Correspond à la valeur finalement choisie par l'utilisateur pour l'input correspondant.
 * * `isRequired?` *(boolean)* : Correspond au fait qu'un input puisse ou non être obligatoire à saisir.
 */
export interface IInputSetChoiceComponentOption<T> extends IInputBaseComponentOption<T> {

    /** Correspond au différentes réponses possibles que peut prendre un input de type radio ou dropdown par exemple. */
    answers?: Answer[],

}