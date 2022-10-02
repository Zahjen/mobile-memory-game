import { IInputSetChoiceComponentOption } from "../global/interface/object/input-set-choice";

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
export interface IInputRadioButtonComponentOption extends IInputSetChoiceComponentOption<string> {

    // Interface faite dans le cas où on souhaiterait ajouter d'autres caractéristiques à une sélection par bouton radio.

}