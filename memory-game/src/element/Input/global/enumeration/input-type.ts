/**
 * Énumeration correspondant au type que peut prendre un input.
 * 
 * * `RADIO_ROW` : On l'utilisera lorsqu'on souhaite positionner nos boutons radios sur une seule et même ligne.
 * * `RADIO_COLUMN` : On l'utilisera lorsqu'on souhaite positionner nos boutons radios en colonne.
 * * `RADIO_DYNAMIC` : On l'utilisera lorsqu'on souhaite faire apparaître de nouveaux inputs au clique d'un des boutons radios.
 * * `TEXT` : On l'utilisera lorsqu'on souhaite afficher un input de type texte classique. Cela signifie que la seule vérification qui pourra être faite sera le champ vide si le champ est requis.
 * * `DROPDOWN` : On l'utilisera lorsqu'on souhaite afficher un input de type dropdown.
 * * `NUMBER` : On l'utilisera lorsqu'on souhaite afficher un input de type nombre. Cela signifie que les vérifications pouvant être faites seront : Le champ vide si l'input est requis et la présence unique de nombre.
 * * `EMAIL` : On l'utilisera lorsqu'on souhaite afficher un input de type email. Cela signifie qu'on vérifiera que le champ entré est bien un type standard d'adresse mail, et que le champ n'est pas vide si celui - ci est requis.
 * * `DATE` : On l'utilisera lorsqu'on souhaite saisir uniquement une date.
 * * `TIME` : On l'utilisera lorsqu'on souhaite saisir uniquement un horaire.
 * * `DATETIME` : On l'utilisera lorsqu'on souhaite saisir une date et une heure.
 * * `TEL` : On l'utilisera lorsqu'on souhaite saisir un numéro de téléphone.
 *
 */
 export enum EInputType {

    /**  On l'utilisera lorsqu'on souhaite positionner nos boutons radios sur une seule et même ligne. */
    RADIO_ROW,
    /** On l'utilisera lorsqu'on souhaite positionner nos boutons radios en colonne. */
    RADIO_COLUMN,
    /** On l'utilisera lorsqu'on souhaite faire apparaître de nouveaux inputs au clique d'un des boutons radios. */
    RADIO_DYNAMIC,
    /** On l'utilisera lorsqu'on souhaite afficher un input de type texte classique. Cela signifie que la seule vérification qui pourra être faite sera le champ vide si le champ est requis. */
    TEXT,
    /** On l'utilisera lorsqu'on souhaite afficher un input de type dropdown. */
    DROPDOWN,
    /** On l'utilisera lorsqu'on souhaite afficher un input de type nombre. Cela signifie que les vérifications pouvant être faites seront : Le champ vide si l'input est requis et la présence unique de nombre. */
    NUMBER,
    /** On l'utilisera lorsqu'on souhaite afficher un input de type email. Cela signifie qu'on vérifiera que le champ entré est bien un type standard d'adresse mail, et que le champ n'est pas vide si celui - ci est requis. */
    EMAIL,
    /** On l'utilisera lorsqu'on souhaite saisir uniquement une date. */
    DATE,
    /** On l'utilisera lorsqu'on souhaite saisir uniquement un horaire. */
    TIME,
    /** On l'utilisera lorsqu'on souhaite saisir une date et une heure. */
    DATETIME,
    /** On l'utilisera lorsqu'on souhaite saisir un numéro de téléphone. */
    TEL

}