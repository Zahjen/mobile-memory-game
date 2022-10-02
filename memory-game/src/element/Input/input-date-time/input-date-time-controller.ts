import { PropsInputDateTime } from "./input-date-time-props";

export class InputDateTimeController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputDateTimeController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputDateTimeController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputDateTimeController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputDateTimeController.
     */
    public static getInstance() : InputDateTimeController {
        if (!InputDateTimeController._instance) 
            InputDateTimeController._instance = new InputDateTimeController();

        return InputDateTimeController._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de générer le format de la date / heure à afficher à l'écran de l'utilisateur. Selon le mode choisi, le formattage sera donc différent.
     * 
     * @param props Correspond à l'interface d'objet utilisée dans le composant permettant de générer un input de type date.
     * @param date Correspond à la date sélectionnée par l'utilisateur.
     * 
     * @returns Le formattage de la date / heure.
     */
    public format(
        props: PropsInputDateTime,
        date: Date
    ): string {
        // On assigne la valeur sélectionnée par l'utilisateur
        props.date.value = date;

        // On va déterminer le format en fonction du type de l'input
        let format = "";

        // Si on souhaite sélectionner une date, on la formatte comme suit à l'affichage: '3 août 2022'
        if (props.mode === "date") format = props.date.dateFormatScreen();
        // Si on souhaite sélectionner un horaire, on le formatte comme suit à l'affichage: '09:44'
        else if (props.mode === "time") format = props.date.timeFormatScreen();
        // Si on souhiate saisir une date et une heure en même temps, on la formatte comme suit à l'affichage: '3 août 2022, 09:44'
        else if (props.mode === "datetime") format = props.date.dateTimeFormatScreen();

        return format;
    }

}