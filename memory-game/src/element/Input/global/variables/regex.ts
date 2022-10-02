/**
 * Regex pouvant être utilisée à travers l'application
 */
 export const regex = {

    /**
     * On vérifie que l'on a bien un entier, qu'il soit positif ou négatif.
     * 
     * ```
     * /^\-{0,1}[0-9]{0,}$/
     * ```
     */
    integer : /^\-{0,1}[0-9]{0,}$/,

    /**
     * On vérifie que l'on a bien que des chiffres. On cherche à avoir un nombre positif
     * 
     * ```
     * /^[0-9]{0,}$/
     * ```
     */
    nonNegativeInteger : /^[0-9]{0,}$/,

    /**
     * On vérifie que l'on a bien un entier négatif.
     * 
     * ```
     * /^\-[0-9]{0,}$/
     * ```
     */
    negativeInteger : /^\-[0-9]{0,}$/,

    /**
     * On vérifie que l'on a bien un decimal, qu'il soit positif ou négatif.
     * 
     * ```
     * /^\-{0,1}[0-9]{0,}[,.]{0,1}[0-9]{1,}$/
     * ```
     */
    decimal : /^\-{0,1}[0-9]{0,}[,.]{0,1}[0-9]{1,}$/,

     /**
      * On vérifie que l'on a bien un decimal posittif
      * 
      * ```
      * /^[0-9]{0,}[,.]{0,1}[0-9]{1,}$/
      * ```
      */
    nonNegativeDecimal : /^[0-9]{0,}[,.]{0,1}[0-9]{1,}$/,
 
     /**
      * On vérifie que l'on a bien un decimal négatif.
      * 
      * ```
      * /^\-[0-9]{0,}[,.]{0,1}[0-9]{1,}$/
      * ```
      */
    negativeDecimal : /^\-[0-9]{0,}[,.]{0,1}[0-9]{1,}$/,

    /**
     * On vérifie que dans la première partie de mail on n'a pas de caractère spécial :
     * 
     * ```
     * <>()[]\.,;:\s@"
     * ```
     * 
     * Si un `.` est présent, alors on prend garde à ne pas trouver une nouvelle fois des caractères spéciaux.
     * 
     * On ne veux pas non plus de succession de points.
     * 
     * Après le `@`, il est possible d'avoir le formatage suivant:
     * 
     * `195.128.12.64`
     * 
     * ou le formatage suivant :
     * 
     * `dzea8d9z.com` ou encore `etu.univ.bla.bla.fr`
     * 
     * ---
     * --- 
     * 
     * Explication de la RegEx : 
     * 
     * ```
     * /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/
     * ```
     * 
     * * `^` : Début de la regex
     * * `\.[^<>()\[\]\\.,;:\s@"]+` : On ne veut pas les symboles suivants => `<>()[]\.,;:\s@"`
     * > * `\s` : White space => on ne veut pas de whitespace
     * > * `+` : Un ou plus
     * > * `\.` : Signifie que l'on peut avoir une première partie d'adresse mail du type bla.bla
     * * `|` : Opérateur OR
     * * `(".+")` : Une succession de point
     * * `@` : Le `@` du mail
     * * `(\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])` : Formatage du type 195.128.12.64
     * * `([a-zA-Z\-0-9]+\.)+` : Une succession d'une suite de lettre et de chiffre suivi d'un point, i.e. dzea8d9z. ou encore etu.univ.
     * * `[a-zA-Z]{1,}` : Une suite de lettre minuscule ou majuscule
     * * `$` : Fin de la RegEx
     */   
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,

    /**
     * On vérifie que le numéro de téléphone entré commence ou non par un `+`, et que ce qui suit ne comporte que des chiffres
     */
    phone: /^[\+][0-9]{1,}$/

}