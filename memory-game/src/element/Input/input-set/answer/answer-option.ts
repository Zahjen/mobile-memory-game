/**
 * Interface composée de :
 * * `id` *(number)* : Un id permettant d'identifier une réponse.
 * * `key` *(string)* : Une clé permettant d'identifier une valeur prise par cette réponse.
 * * `value` *(string)* : La valeur que prendra une réponse.
 */
 export interface IAnswer {
    
    /** Un id permettant d'identifier une réponse. */
    id: number,
    /** Une clé permettant d'identifier une valeur prise par cette réponse. */
    key: string,
    /** La valeur que prendra une réponse. */
    value: string,

}