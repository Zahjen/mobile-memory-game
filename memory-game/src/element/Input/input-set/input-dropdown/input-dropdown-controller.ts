import { PropsItemInputDropDown } from "./input-dropdown-props";


export class InputDropdownController {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputDropdownController;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputDropdownController 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputDropdownController à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputDropdownController.
     */
    public static getInstance() : InputDropdownController {
        if (!InputDropdownController._instance) 
            InputDropdownController._instance = new InputDropdownController();

        return InputDropdownController._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant d'opérer certaines actions lorsque l'utilisateur fait une sélection.
     */
    public onDropdownChange(
        props: PropsItemInputDropDown
    ) : void {
        // On assigne la valeur sélectionnée par l'utilisateur à notre objet.
        props.input.value = props.item;

        // On met à jour le titre du modal selon la sélection faite par l'utilisateur.
        props.setTitle(props.input.getValue.getValue);
        
        // Changer ca pour généraliser => si c'est requi est que 'est vide ou égale a 0 alors error
        if (props.input.getIsRequired && props.input.getValue.getId === 0) 
            props.input.error = 'Veuillez sélectionner une option';
        
        else props.input.error = "";
        
        // On met à jour l'erreur à afficher à l'écran de l'utiisateur
        props.setError(props.input.getError);
    }

}
