import React from "react";
import { TextInput, View } from "react-native";
import { color } from "../../example/variables/color";
import { PropsSearchBarComponent } from "./search-bar-props";

/**
 * Ce composant permet de générer une barre de recherche (que l'on pourra styliser).
 * 
 * ---
 * ---
 * 
 * `PropsSearchBarComponent` :  Interface composée de :
 * * `placeholder?` *(string)* : L'indication à afficher à un utilisateur pour mener à bien la recherche.
 * * `value?` *(string)* : La valeur entrée par l'utilisateur lors de la saisie de texte.
 * * `styleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `styleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 * * `handleSearch?` *((text: string) => void* : Méthode permettant la gestion de la recherche.
 * 
 * ---
 * ---
 * 
 * Par défaut, le props sera définit comme suit :
 * 
 * ```
 * SearchBarComponent.defaultProps = {
 *  styleContainer: {
 *      borderColor: color.text,
 *      borderWidth: 0.5,
 *      borderRadius: 30,
 *      paddingHorizontal: 20,
 *      paddingVertical: 10
 *  }
 * }
 * ```
 * 
 * @param props `PropsSearchBarComponent`
 * @returns Composant SearchBarComponent
 */
const SearchBarComponent: React.FC<PropsSearchBarComponent> = (props: PropsSearchBarComponent): JSX.Element => {
    return (
        <View style = { props.styleContainer }>
            <TextInput
                value = { props.value }
                onChangeText = { props.handleSearch }
                placeholder = { props.placeholder }
                style = { props.styleText }
            />
        </View>
    );
}

SearchBarComponent.defaultProps = {
    styleContainer: {
        borderColor: color.text,
        borderWidth: 0.5,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10
    }
}

export default SearchBarComponent;