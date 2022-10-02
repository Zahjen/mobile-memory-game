import { IAnswer } from "./answer";

/**
 * Interface composée de :
 * * `id` *(number)* : Un id permettant d'identifier une réponse.
 * * `key` *(string)* : Une clé permettant d'identifier une valeur prise par cette réponse.
 * * `value` *(string)* : La valeur que prendra une réponse.
 * * `isExtended` *(boolean) : Statut d'une réponse sur sa potentielle extension, i.e. savoir si c'est une réponse qui pourra donner lieu à d'autres questions.
 * * `inputs` *(any)* : Inputs découlant d'une réponse en particulier. 
 */
 export interface IAnswerDynamic extends IAnswer {
    
    /** Statut d'une réponse sur sa potentielle extension, i.e. savoir si c'est une réponse qui pourra donner lieu à d'autres questions. */
    isExtended?: boolean,
    /** Inputs découlant d'une réponse en particulier. */
    inputs?: any[],

}