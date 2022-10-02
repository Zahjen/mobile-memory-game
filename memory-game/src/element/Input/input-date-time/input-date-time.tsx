import React from "react";
import { Pressable, Text, View } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import Spacer from "../global/element/spacer";
import { InputDateTimeController } from "./input-date-time-controller";
import { PropsInputDateTime } from "./input-date-time-props";

import DateTimePickerModal from "react-native-modal-datetime-picker";

/**
 * Composant permettant de sélectionner une date, une heure ou une date et une heure.
 * 
 * ---
 * ---
 * 
 * `PropsInputDateTime` : Interface composée de :
 * * `date` *(InputDateTime)* : Instance de la classe InputDateTime permettant de stocker les informations relatives à cet input.
 * * `icon` *(string)* : Icon associé à l'input de sélection de date / heure, e.g. un calendrier, une horloge, ...
 * * `mode` *("date" | "time" | "datetime" | undefined)* : Correspond à ce qui doit être séléctionné, i.e. une date, une heure, une date et une heure.
 * * `datePickerContainerStyle?` *(StyleProp<ViewStyle>)* : Style relatif au container (label + date picker) de la saisie d'une date.
 * * `labelTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au label, donc permettant l'affichage d'une indication.
 * * `spaceLabelPicker?` *(number)* : La taille de l'espace séparant le label et le bouton permettant la sélection d'une date / heure.
 * * `openDatePickerPressableStyle?` *(StyleProp<ViewStyle>)* : Style relatif au bouton permettant l'ouverture du modal pour la saisie d'une date / heure.
 * * `datePickerTextStyle?` *(StyleProp<TextStyle>)* : Style relatif à la date sélectionnée et affichée sur le bouton permettant d'ouvrir le modal.
 * * `iconPressableStyle?` *(StyleProp<TextStyle>)* : Style associé à l'icon situé sur le bouton permettant l'ouerture du modal.
 * * `confirmTextButtonColor` *(string)* : Couleur du texte permettant de confinrmer la date / heure sélectionnée.
 * * `confirmButtonBackgroundColor` *(string)* : Couleur de fond du bouton permettant de confirmer la sélection de la date / heure.
 * * `cancelButtonBackgroundColor` *(string)* : Couleur de fond du bouton permettant d'annuler la sélection de la date / heure.
 * * `cancelTextButtonColor` *(string)* : Couleur du texte permettant d'annuler la sélection d'une date / heure.
 * 
 * ---
 * ---
 * 
 * @param props `PropsInputDateTime` 
 * @returns Composant InputDateTime
 */
const InputDateTime: React.FC<PropsInputDateTime> = (props: PropsInputDateTime): JSX.Element => {

    const inputDateTimeController 
        = InputDateTimeController.getInstance();

    const [date, setDate]: [Date, React.Dispatch<React.SetStateAction<Date>>] 
        = React.useState(new Date());
        
    const [open, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] 
        = React.useState(false);

    return (
        <View style = { props.datePickerContainerStyle }>
            <Text style = { props.labelTextStyle }>
                { props.date.getLabel }
            </Text>

            <Spacer height = { props.spaceLabelPicker }/>

            <Pressable
                style = { props.openDatePickerPressableStyle }
                onPress = {() => setOpen(true)}
            >
                <Text style = { props.datePickerTextStyle }> 
                    { inputDateTimeController.format(props, date) } 
                </Text>

                <Fontisto
                    name = { props.icon }
                    style = { props.iconPressableStyle }
                />
            </Pressable>
            
            <DateTimePickerModal
                // Notifie le clique du bouton permettant d'ouvrir la sélection de la date / heure
                isVisible = {open}
                // Correspond à l'affichage de la date ou de l'heure ou de la date et heure à sélectionner
                mode = { props.mode }
                // Détermine la date 
                date = { date }
                // Action à opérer lorsqu'on clique sur Confirmer
                onConfirm = {(date: Date) => {
                    setOpen(false);
                    setDate(date);
                }}
                // Action à opérer lorsqu'on clique sur Annuler
                onCancel={() => setOpen(false) }
                // Le texte de confirmation est en anglais, on le change pour du français
                confirmTextIOS = "Confirmer"
                // Le texte d'annulation est en anglais, on le change pour du français
                cancelTextIOS = "Annuler"
                // Détermine la couleur de texte des boutons confirmer et annuler
                buttonTextColorIOS = { props.confirmTextButtonColor }
                // Permet de changer la coulueur de fond du picker
                pickerContainerStyleIOS = {{ backgroundColor: props.confirmButtonBackgroundColor }}
                // Permet de customiser le bouton d'annulation
                customCancelButtonIOS = {() => {
                    return (
                        <Pressable
                            onPress = { () => setOpen(false) } 
                            style = {{
                                backgroundColor: props.cancelButtonBackgroundColor,
                                paddingHorizontal: 10,
                                paddingVertical: 14,
                                marginBottom: 40,
                                borderRadius: 14
                            }}>
                            <Text style = {{
                                textAlign: "center",
                                fontSize: 20,
                                color: props.cancelTextButtonColor
                            }}>
                                Annuler
                            </Text>
                        </Pressable>
                    );
                }}
                    
            />
        </View>
    )
}

export default InputDateTime;