export class Utils {

    // -----------------
    // Déclaration des attributs
    // -----------------

    private static _instance: Utils;

    // -----------------
    // Constructeur
    // -----------------

    private constructor() {}


    // -----------------
    // Getter
    // -----------------

    public static getInstance() : Utils {
        if (!this._instance) 
            this._instance = new Utils();

        return this._instance;
    }

    // -----------------
    // Méthode 
    // -----------------

    /**
     * Méthode permettant de vider entièrement un tableau.
     * 
     * @param array Le tableau à vider.
     */
    public clearArray(array: any[]) : void {
        for (let i = 0 ; i <= array.length ; i++) array.pop();
    }


}