import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, SafeAreaView, Text, Pressable } from "react-native";
import { InputDropdownComponent } from "../element/Input/input-set/input-dropdown/input-dropdown-component";
import Spacer from "../element/spacer";
import Title from "../element/title";
import { RouteParams } from "../navigation/route-navigator";
import { InputDataService } from "../services/input-data";
import { InputGenerator } from "../services/input-generator";
import { buttonStyle } from "../style/button";
import { homeScreenStyle } from "../style/home-screen";
import { pageView } from "../style/view";
import { color } from "../variable/color";
import { spacer } from "../variable/spacer";

/**
 * Composant relatif à la page d'acceuil
 * 
 * @returns Page d'acceuil `HomeScreen`
 */
const HomeScreen = (): JSX.Element => {

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const cardNumber: InputDropdownComponent = InputDataService.getInstance().getCardNumberDropdownData();

    return (
        <SafeAreaView style = {{ backgroundColor: color.backgroundColor, flex: 1 }}>
            <View style = { pageView.container }>
                <Title 
                    title = 'MEMORY GAME'
                    titleStyle = { homeScreenStyle.title }
                    />
                <Spacer height = { spacer.spacerTitle.bottom }/>
                { InputGenerator.getInstance().renderDropdownInput(cardNumber) }
                <Pressable
                    onPress = {() => {
                        try {
                            cardNumber.validator();
                            navigation.navigate("GridScreen", {
                                cardNumber: cardNumber.getValue.getId
                            })
                        } catch (e: any) {
                            alert("Ce champ est requis pour la génération de la grille.");
                        }
                    }}
                    style = { buttonStyle.fill.container }
                >
                    <Text style = { buttonStyle.fill.text }>
                        Générer la grille
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;