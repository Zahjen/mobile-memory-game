import React from "react";
import { StyleSheet, View } from "react-native";
import { IMargin } from "../interface/object/margin";

/**
 * Interface composée de :
 * * `color?` *(string)* : Permet de déterminer la couleur de la ligne.
 * * `margin?` *(IMargin)* : Permet de déterminer les marges autour de la ligne.
 */
interface Props {
    /** Permet de déterminer la couleur de la ligne. */
    color?: string,
    /** Permet de déterminer les marges autour de la ligne. */
    margin?: IMargin
}

/**
 * Composant permettant de tracer une ligne pouvant par exemple servir de separateur.
 * 
 * ---
 * ---
 * 
 * `Props` : Interface composée de :
 * * `color?` *(string)* : Permet de déterminer la couleur de la ligne.
 * * `margin?` *(IMargin)* : Permet de déterminer les marges autour de la ligne.
 * 
 * ---
 * ---
 * 
 * Par défaut la ligne aura les propriétés suivantes :
 * 
 * ```
 * Line.defaultProps = {
 *   color: color.gray,
 *   margin: {
 *       left: 0,
 *       right: 0,
 *       bottom: 0,
 *       top: 0
 *   }
 * }
 * ```
 * 
 * @param props `Props`
 * @returns Composant Line
 */
const Line: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <View style = {{
            marginBottom: props.margin?.bottom,
            marginRight: props.margin?.right,
            marginLeft: props.margin?.left,
            marginTop: props.margin?.top,
            borderBottomColor: props.color,
            borderBottomWidth: StyleSheet.hairlineWidth,
        }}/>
    );
}

/** Les paramètres par défaut que prendra le composant */
Line.defaultProps = {
    color: "#f0f0f0",
    margin: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
}

export default Line;