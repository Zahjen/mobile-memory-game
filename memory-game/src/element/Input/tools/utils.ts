import { EInputType } from "../enumeration/input-type";
import { TypeInput } from "../type/input-type";

export class Utils {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static instance: Utils;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe Utils 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe Utils à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe Utils
     */
    public static getInstance() : Utils {
        if (!Utils.instance) Utils.instance = new Utils();

        return Utils.instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de faire une recherche dichotomique sur une tableau d'objets selon un attribut donné.
     * 
     * Soit par exemple un tableau composé d'objets du type : 
     * 
     * ``` 
     * {id: number, label: string, score: number}
     * ``` 
     * 
     * Cette méthode permettra de faire une recherche uniquement sur l'id, ou uniquement sur le label, ou uniquement sur le score à condition que l'on ait au préalable trier le tableau d'ojets selon l'attribut souhaité. 
     * 
     * @param array Tableau d'objet dans lequel s'opère la recherche
     * @param target L'élément que l'on recherche
     * @param key La clé sur laquelle la recherche va s'opérer
     * @param start La borne inf de l'intervalle de recherche. Par défaut, cette borne sera à 0.
     * @param end La borne sup de l'intervalle de recherche. Par défaut cette borne sera à la longueur du tableau précédemment entré en paramètre `array`.
     * @returns L'ndice de la position de l'objet dans le tableau ou -1 selon que la recherche ait aboutit
    */
    public binarySearchOverObject(array: any[], target: any, key: any, start: number = 0, end: number = array.length) : any {
        // Si la borne inf de l'intervalle est supérieur à a born sup, cela signifie que l'objet recherché n'appartient pas au tableau. On renvoie -1
        if (start >= end) return -1; 
        else {
            // On détermine l'indice médian du tableau.
            let mean: number = Math.floor((start + end - 1) / 2);
        
            // Si l'objet est égale à l'élément situé au milieu, cela signifie que l'objet appartient au tableau. On renvoie l'indice de sa position dans ce tableau
            if (target === array[mean][key]) return mean;
            // Si l'objet est inférieur à l'élément situé au milieu, cela signifie que l'objet se trouve dans la partie inférieure du tableau. On réexecute alors la méthode dans la partie inférieure du tableau
            else if (target < array[mean][key]) return this.binarySearchOverObject(array, target, key, start, mean);
            // Si l'objet est supérieur à l'élément situé au milieu, cela signifie que l'objet se trouve dans la partie supérieure du tableau. On réexecute alors la méthode dans la partie supérieure du tableau
            else return this.binarySearchOverObject(array, target, key, mean + 1, end);
        }
    }

    /**
     * Méthode permettant de trier un tableau d'objets selon un attribut donné.
     * 
     * Soit par exemple un tableau composé d'objets du type : 
     * 
     * {id: number, label: string, score: number}. 
     * 
     * Cette méthode permettra d'opérer un tri selon l'id, ou selon le label, ou selon le score. 
     * 
     * @param array : tableau d'objet que l'on souhaite trier
     * @param key : l'attribut selon lequel la recherche va s'opérer
     * @returns any[] : tableau d'objets trier
    */
     public sortObjectByKey(array: any[], key: any) : any[] {
        return array.sort((obj_1: any, obj_2: any) => {
            let element_1 = obj_1[key];
            let element_2 = obj_2[key];
        
            return (element_1 < element_2) ? -1 : ((element_1 > element_2) ? 1 : 0);
        })
    }

    /**
     * Méthode permettant de déterminer si la saisie est un nombre ou pas.
     * 
     * @param str La saisie pour laquelle il faut déterminer si c'est un nombre ou pas.
     * @returns Booléen déterminant si oui ou non la saisie est un nombre.
     */
    public isStringNumber(str: string): boolean {
        // Si la saisie n'est pas de type string, on ne peut pas évaluer la saisie
        if (typeof str !== 'string') return false;
        // Si, après avoir retirer les espaces à droite et à gauche, la saisie est vide on ne peut pas évaluer la saisie.
        if (str.trim() === '') return false;
      
        // On tente de parser la saisie sous forme de nombre. 
        // Selon la saisie, on se retrouvera soit avec un nombre, soit avec l'esxpression NaN.
        // On fait finalement la négation car dans le cas où la saisie est un nombre isNAN retournera false.
        return !Number.isNaN(Number(str));
    }

    /**
     * Méthoide permettant de déterminer si l'input est de type texte ou email.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input est de type texte ou email.
     */
    public isTextType(input: TypeInput) {
        return input.getType === EInputType.TEXT;
    }

    /**
     * Méthoide permettant de déterminer si l'input est de type email.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input est de type email.
     */
     public isEmailType(input: TypeInput) {
        return input.getType === EInputType.EMAIL;
    }


    /**
     * Méthoide permettant de déterminer si l'input est de type texte ou email.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input est de type texte ou email.
     */
     public isTextOrEmailType(input: TypeInput) {
        return this.isTextType(input)
            || this.isEmailType(input);
    }

    /**
     * Méthoide permettant de déterminer si l'input est de type nombre.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input est de type nombre.
     */
    public isNumberType(input: TypeInput) {
        return input.getType === EInputType.NUMBER;
    }

    /**
     * Méthoide permettant de déterminer si l'input est un bouton radio.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input est un bouton radio.
     */
     public isRadioClassicType(input: TypeInput) {
        return input.getType === EInputType.RADIO_COLUMN 
            || input.getType === EInputType.RADIO_ROW;
    }

    /**
     * Méthoide permettant de déterminer si l'input est un bouton radio, qu'il soit dynamique ou non.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input est un bouton radio, qu'il soit dynamique ou non.
     */
    public isRadioType(input: TypeInput) {
        return this.isRadioClassicType(input);
    }

    /**
     * Méthoide permettant de déterminer si l'input permet la saisie d'une date, heure ou date et heure.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input permet la saisie d'une date, heure ou date et heure.
     */
    public isDateTimeType(input: TypeInput) {
        return input.getType === EInputType.DATE 
            || input.getType === EInputType.TIME 
            || input.getType === EInputType.DATETIME; 
    }

    /**
     * Méthoide permettant de déterminer si l'input permet la saisie d'un numéro de télépone.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input permet la saisie d'un numéro de télépone.
     */
    public isPhoneNumberType(input: TypeInput) {
        return input.getType === EInputType.TEL;
    }

    /**
     * Méthoide permettant de déterminer si l'input est une saisie via une liste déroulante.
     * 
     * @param input L'input qu'on souhaite évaluer
     * @returns Booléen déterminant si l'input est une saisie via une liste déroulante.
     */
    public isDropdownType(input: TypeInput) {
        return input.getType === EInputType.DROPDOWN;
    }
    
}