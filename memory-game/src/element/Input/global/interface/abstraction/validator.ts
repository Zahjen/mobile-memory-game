/**
 * Interface permettant d'opérer des vérifications sur les différents inputs. Il s'agit de pouvoir lever des exceptions dans le cas ou une erreur serait présente dans un input au clique d'un bouton. On pourrait par exemple, se trouver avec un champs requis, non renseigné par l'utilisateur.  
 */
export interface Validator {

    /**
     * Méthode permettant d'opérer des vérifications sur les différents inputs. Il s'agit de pouvoir lever des exceptions dans le cas ou une erreur serait présente dans un input au clique d'un bouton. On pourrait par exemple, se trouver avec un champs requis, non renseigné par l'utilisateur..
     * 
     * @param args Permet de passer un nombre n variables de paramètre dans une fonction.
     */
    validator(...args: any) : void;

}