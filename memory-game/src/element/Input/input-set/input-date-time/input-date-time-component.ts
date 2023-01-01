import { InputComponent } from "../input/input-component";
import { IInputDateComponentOption } from "./input-date-time-option";


/**
 * Classe relative à un input permettant de sélectionner une date, une heure, ou une date et une heure.
 * 
 * @extends {InputComponent<Date>} Classe abstraite relative aux diverses caractéristiques "obligatoires" que peut comporter un input.
 */
export class InputDateTimeComponent extends InputComponent<Date> {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputDateComponentOption
    ) {
        super(options);
    }

    // --------------------------
    // Surcharge
    // --------------------------

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de formater le mois donné sous forme de nombre sous forme de "Janvier", "Février", ...
     * 
     * @returns Mois sous forme de "Janvier", "Février", ..., i.e. 0 => "Janvier", 1 => "Février", ...
     */
     public getMonth(): string {
        switch (this._value?.getMonth()) {
            case 0 : return 'Janvier';
            case 1 : return 'Février';
            case 2 : return 'Mars';
            case 3 : return 'Avril';
            case 4 : return 'Mai';
            case 5 : return 'Juin';
            case 6 : return 'Juillet';
            case 7 : return 'Août';
            case 8 : return 'Septembre';
            case 9 : return 'Octobre';
            case 10 : return 'Novembre';
            case 11 : return 'Décembre';

            default : return 'Un problème est survenu.'
        }
    }

    /**
     * Méthode permettant de formater une date donnée sous la forme 'JJ mm AAAA', où le mois est sous la forme "Janvier", "Février", ...
     * 
     * @returns Date formatée sous la forme 'JJ mm AAAA', où le mois est sous la forme "Janvier", "Février", ...
     */
    public dateFormatScreen(): string {
        const day: number = this._value?.getDate();
        const month: string = this.getMonth();
        const year: number = this._value?.getFullYear();

        return `${day} ${month} ${year}`;
    }

    /**
     * Méthode permettant de formater une heure donnée sous la forme 'hh : mm'
     * 
     * @returns Heure formatée sous la forme 'hh : mm'
     */
    public timeFormatScreen(): string {
        const hour: number = this._value?.getHours();
        const minutes: number = this._value?.getMinutes();
        const fullHour: string = (hour! < 10 ? '0' : '') + hour;
        const fullMinute: string = (minutes! < 10 ? '0' : '') + minutes;

        return `${fullHour} : ${fullMinute}`;
    }

    /**
     * Méthode permettant de formater une date et une heure données sous la forme 'JJ mm AA, hh : mm'
     * 
     * @returns Date et heure formatée sous la forme 'JJ mm AA, hh : mm'
     */
     public dateTimeFormatScreen(): string {
        const date: string = this.dateFormatScreen();
        const time: string = this.timeFormatScreen();

        return `${date}, ${time}`;
    }

    /**
     * Méthode permettant de formatter comme on le souhaite l'horaire à mettre dans la base de données. On le formatte comme suit : '14:01'.
     * 
     * @returns L'heure correctement formatter à placer dans la base de données.
     */
    public timeFormatDb(): string {
        return this.timeFormatScreen().replace(" ", "");;
    }

}