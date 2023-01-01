import { IInputComponentOption } from "../input/input";


/**
 * Interface composée de :
 * * `value` *(Date)* : Correspond à la date finalement choisie par l'utilisateur pour l'input correspondant..
 * * `key` *(string)* : Correspond à la clé permettant d'identifier un input de type date.
 * * `label` *(string)* : Correspond au label donné associé à un input de type date, i.e. 'date'., 'time', ...
 * * `type` *(EInputType)* : Permet de déterminer le type d'affichage et de sélection, i.e. s'il faut afficher une date, une heure, ou une date et une heure.
 */
export interface IInputDateComponentOption extends IInputComponentOption<Date> {

    // Interface faite dans le cas où on souhaiterait ajouter d'autres caractéristiques à une saisie de date / heure

}