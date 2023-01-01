import React from "react";
import { View } from "react-native";

/**
 * Interface composée de :
 * * `width` *(number)* : Espace horizontal appliqué entre deux éléments.
 * * `height` *(number)* : Espace vertical appliqué entre deux éléments.
 */
interface Props {
    /** Espace horizontal appliqué entre deux éléments. */    
    width?: number,
    /** Espace vertical appliqué entre deux éléments. */
    height?: number
}

/**
 * Composant permettant de générer un espace horizontal et / ou vertical.
 * 
 * ---
 * ---
 * 
 * `Props` : Interface composée de :
 * * `width` *(number)* : Espace horizontal appliqué entre deux éléments.
 * * `height` *(number)* : Espace vertical appliqué entre deux éléments.
 * 
 * ---
 * ---
 * 
 * @param props `Props`
 * @returns Composant Spacer
 */
const Spacer: React.FC<Props> = (props: Props): JSX.Element => {

    return (
        <View style = {{
            width: props.width === undefined ? 0 : props.width,
            height: props.height === undefined ? 0 : props.height
        }}/>
    );

}

export default Spacer;