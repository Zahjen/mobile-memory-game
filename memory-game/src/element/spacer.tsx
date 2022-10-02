import React from "react";
import { View } from "react-native";
import { SpacerProps } from "../interface/props";

/**
 * Composant permettant de générer un espace horizontal et / ou vertical.
 * 
 * ---
 * 
 * `SpacerProps` : Interface composée de :
 * * `width` *(number)* : Espace horizontal appliqué entre deux éléments.
 * * `height` *(number)* : Espace vertical appliqué entre deux éléments.
 * 
 * ---
 * 
 * @param props `SpacerProps`
 * @returns Composant Spacer
 */
const Spacer: React.FC<SpacerProps> = (props: SpacerProps): JSX.Element => {

    return (
        <View style = {{
            width: props.width === undefined ? 0 : props.width,
            height: props.height === undefined ? 0 : props.height
        }}/>
    );

}

export default Spacer;