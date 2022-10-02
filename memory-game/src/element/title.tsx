import React from "react";
import { View, Text } from "react-native";
import { TitleProps } from "../interface/props";
import { title, widthHeight } from "../style/global";
import { spacer } from "../variable/spacer";
import Spacer from "./spacer";

/**
 * Composant permettant de générer un titre.
 * 
 * ---
 * 
 * `TitleProps` : Interface composée de :
 * * `title` *(string)* : Titre à associer.
 * * `color?` *(string)* : Couleur appliqué au titre.
 * * `horizontalSpace?` *(number)* : Hauteur appliquée entre le titre et ce qui suit.
 * * `fontSize?` *(number)* : Taille de police du titre.
 * 
 * ---
 * 
 * @param props `TitleProps`
 * @returns Composant Title
 */
const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {

    return (
        <View style = { widthHeight("100%") }>
            <Text style = { title(props.color, props.fontSize) }>
                { props.title }
            </Text>
            <Spacer height = { props.horizontalSpace }/>
        </View>
    );

}



/** Les paramètres par défaut que prendra le composant */
Title.defaultProps = {
    horizontalSpace: spacer.spacerTitle.bottom,
}

export default Title;