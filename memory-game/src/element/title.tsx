import React from "react";
import { View, Text } from "react-native";
import { TitleProps } from "../interface/props";
import { title, widthHeight } from "../style/global";
import { color } from "../variable/color";
import { fontSize } from "../variable/font-size";
import { spacer } from "../variable/spacer";
import Spacer from "./spacer";

/**
 * Composant permettant de générer un titre.
 * 
 * ---
 * 
 * `TitleProps` : Interface composée de :
 * * `title` *(string)* : Titre à associer.
 * * `containerStyle?` *(StyleProp<ViewStyle>)* : Style associé au container du titre.
 * * `titleStyle?` *(StyleProp<TextStyle>)* : Style associé au titre lui - même.
 * 
 * ---
 * 
 * @param props `TitleProps`
 * @returns Composant Title
 */
const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {

    return (
        <View style = { props.containerStyle }>
            <Text style = { props.titleStyle }>
                { props.title }
            </Text>
        </View>
    );

}



/** Les paramètres par défaut que prendra le composant */
Title.defaultProps = {
    containerStyle: {
        width: "100%"
    },
    titleStyle: {
        color: color.text,
        fontSize: fontSize.title,
        fontWeight: "bold"
    }
}

export default Title;