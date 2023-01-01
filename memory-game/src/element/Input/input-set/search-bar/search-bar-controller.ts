export class SearchBarController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: SearchBarController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe SearchBarController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe SearchBarController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe SearchBarController.
     */
    public static getInstance() : SearchBarController {
        if (!SearchBarController._instance) 
            SearchBarController._instance = new SearchBarController();

        return SearchBarController._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de filtrer les données d'un tableau.
     * 
     * @param userInput La saisie de l'utilisateur 
     * @param array Le tableau sur lequel on filtre les données 
     * @param setData Permet de mettre à jour les données à afficher
     * @param setValue Permet de mettre à jour la valeur saisir par l'utilisateur
     * @param key La clé selon laquelle les données seront filtrées.
     * @returns void
     */
    public handleSearch(
        userInput: string,
        array: any[],
        setData: React.Dispatch<React.SetStateAction<any>>,
        setValue?: React.Dispatch<React.SetStateAction<any>>,
        key?: string
    ): void {
        // Si aucun tableau n'est fourni on renvoie null
        if(!array) return;
        // Si l'utilistauer n'entre rien, on affiche toutes les valeurs possible d'une liste.
        if(!userInput) setData(array);

        // On récupère la valeur à afficher dans l'input text si celle ci est définie.
        setValue!(userInput);
    
        // On retire les espaces à droite et à gauche puis on mets le tout en majuscule
        userInput = userInput.trim().toUpperCase();

        // On filtre les données selon une clé entré si celle ci est fourni
        let filteredData = array.filter((data: any) => {
            return (key === undefined) 
                ? data.toUpperCase().includes(userInput)
                : data[key].toUpperCase().includes(userInput);
        });
        
        // On associe le nouveau tableau de données selon les données filtrées
        setData(filteredData);
    }

}
