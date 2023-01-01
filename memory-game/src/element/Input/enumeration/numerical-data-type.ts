/**
 * Enumeration correspondant au type de données numérique associé à un input de type NUMBER.
 * 
 * * `INTEGER` : Données numériques donnant accès à un entier, qu'il soit positif ou négatif.
 * * `NON_NEGATIVE_INTEGER` : Données numériques donnant accès à un entier positif.
 * * `NEGATIVE_INTEGER` : Données numériques donnant accès à un entier négatif.
 * * `DECIMAL` : Données numériques donnant accès à un nombre à virgule, qu'il soit positif ou négatif.
 * * `NON_NEGATIVE_DECIMAL` : Données numériques donnant accès à un nombre à virgule positif.
 * * `NEGATIVE_DECIMAL` : Données numériques donnant accès à un nombre à virgule négatif.
 */
 export enum ENumericalDataType {

    /** Données numériques donnant accès à un entier, qu'il soit positif ou négatif. */
    INTEGER,
    /** Données numériques donnant accès à un entier positif. */
    NON_NEGATIVE_INTEGER,
    /** Données numériques donnant accès à un entier négatif. */
    NEGATIVE_INTEGER,
    /** Données numériques donnant accès à un nombre à virgule, qu'il soit positif ou négatif. */
    DECIMAL,
    /** Données numériques donnant accès à un nombre à virgule positif. */
    NON_NEGATIVE_DECIMAL,
    /** Données numériques donnant accès à un nombre à virgule négatif. */
    NEGATIVE_DECIMAL,

}