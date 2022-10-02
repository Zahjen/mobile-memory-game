import React from "react";
import { View, SafeAreaView } from "react-native";
import Title from "../element/title";
import { pageView } from "../style/view";
import { color } from "../variable/color";


/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `HomeScreen`
 */
const HomeScreen = (): JSX.Element => {

    return (
        <SafeAreaView style = {{ backgroundColor: color.backgroundColor, flex: 1 }}>
            <View style = { pageView() }>
                <Title title = 'MEMORY GAME'/>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;