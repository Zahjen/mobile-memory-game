import React from "react";
import { FlatList, Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { color } from "../../../variable/color";
import ModalElement from "../global/element/modal-element";
import Spacer from "../global/element/spacer";
import { Answer } from "../global/input/answer";
import InputErrorMessage from "../input-error/input-error";
import SearchBarComponent from "../search-bar/search-bar";
import { SearchBarController } from "../search-bar/search-bar-controller";
import { InputDropdownController } from "./input-dropdown-controller";
import { PropsInputDropdown, PropsItemInputDropDown, PropsItemListInputDropDown } from "./input-dropdown-props";

/**
 * Composant correspondant une ligne d'une flatlist par exemple. 
 * 
 * ---
 * ---
 * 
 * `PropsItemInputDropDown` : Interface composée de :
 * * `item` *(any)* : Correspond à un élément de la liste des réponses pré - faites.
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * 
 * ---
 * ---
 * 
 * @param props `PropsItemInputDropDown`
 * @returns Element ItemElement
 */
const ItemElement: React.FC<PropsItemInputDropDown> = ( props: PropsItemInputDropDown ): JSX.Element => {

    const inputDropdownController
        = InputDropdownController.getInstance();

    const isSelected: boolean 
        = props.item === props.input.getValue;

    const style: StyleProp<ViewStyle> = isSelected 
        ? props.selectedItemStyle 
        : props.unselectedItemStyle;

    return (
        <Pressable 
            key = { props.item.getId } 
            style = { style }
            onPress = { () => inputDropdownController.onDropdownChange(props) }
        >
            <Text style = { props.itemTextStyle }>
                {props.item.getValue}
            </Text>
            <Spacer height = { 40 }/>
        </Pressable>
    )
    
}

/**
 * Élément permettant de générer une liste d'item ainsi qu'une barre de recherche permettant de filtrer cette liste.
 * 
 * ---
 * ---
 * 
 * `PropsItemListInputDropDown` : Interface composée de :
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * * `listHeaderComponentStyleBackgroundColor?` *(string)* : La couleur de fond associé au header de la flatlist.
 * * `searchBarStyleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `searchBarStyleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 * 
 * ---
 * ---
 * 
 * @param props `PropsItemListInputDropDown`
 * @return Élement ItemList 
 */
 const ItemList: React.FC<PropsItemListInputDropDown> = ( props: PropsItemListInputDropDown ): JSX.Element => {
    const searchBarController = SearchBarController.getInstance();

    const [value, setValue]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState('');

    const [data, setData]: [Answer[], React.Dispatch<React.SetStateAction<Answer[]>>] 
        = React.useState(props.input.getAnswers);

    return (
        <FlatList
            data = { data }
            renderItem = { ({item}: any) => {
                return <ItemElement
                    item = { item }
                    setTitle = { props.setTitle }
                    input = { props.input }
                    setError = { props.setError }
                    selectedItemStyle = { props.selectedItemStyle }
                    unselectedItemStyle = { props.unselectedItemStyle }
                    itemTextStyle = { props.itemTextStyle }
                />
            } }
            keyExtractor = { data => `${data.getKey + data.getId}` }
            ListHeaderComponent = { 
                <SearchBarComponent
                    placeholder = "Recherche ..."
                    handleSearch = {(text: string) => searchBarController.handleSearch(text, props.input.getAnswers, setData, setValue, "_value")}
                    value = { value }
                    styleText = { props.searchBarStyleText }
                    styleContainer = { props.searchBarStyleContainer }
                /> 
            }
            ListHeaderComponentStyle = {{ backgroundColor: props.listHeaderComponentStyleBackgroundColor, paddingBottom: 15 }}
            stickyHeaderIndices = {[0]}
        />
    );
}

/**
 * Élement permettant de générer un input de type dropdown. On y retrouve un bouton permettant d'ouvrir un modal et de séléctionner un item.
 * 
 * ---
 * ---
 * 
 * `PropsInputDropdown` : Interface composée de :
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * * `listHeaderComponentStyleBackgroundColor?` *(string)* : La couleur de fond associé au header de la flatlist.
 * * `inputDropdownCurrentSelectionTextStyle` *(StyleProp<TextStyle>)* : Le style du texte associée à la sélection actuelle du dropdown.
 * * `inputDropdownTextFontSize` *(number)* : LA taille de police du texte associée à la sélection actuelle du dropdown.
 * * `errorStyle?` *(StyleProp<TextStyle>)* : Le style associé à l'affichage de l'erreur généré par le dropdown.
 * * `styleModal?` *(StyleProp<ViewStyle>)* : Style relatif à un Modal.
 * * `styleOpenModal?` *(StyleProp<ViewStyle>)* : Style relatif au bouton permettant d'ouvrir le Modal.
 * * `closeModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant de fermer le modal.
 * * `titleModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte associé au titre du modal.
 * * `openModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au contenant d'un modal.
 * * `searchBarStyleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `searchBarStyleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 * * `labelStyle?` *(StyleProp<TextStyle>)* : Correspond au style associé au label d'un input.
 * * `modalContainer?` *(StyleProp<ViewStyle>)* : Correspond au style associé au label d'un input.
 * 
 * ---
 * ---
 * 
 * @param props `PropsInputDropdown`
 * @returns Élement InputDropdown
 */
const InputDropdown: React.FC<PropsInputDropdown> = ( props: PropsInputDropdown ): JSX.Element => {

    const [error, setError]: [string, React.Dispatch<React.SetStateAction<string>>]
        = React.useState('Veuillez Sélectionner un intervenant');

    const [title, setTitle]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState(`${ props.input.getValue.getValue }`);

    return (
        <View>
            <Text style = { props.labelStyle }>
                { props.input.getLabel }
            </Text>
            
            <View style = {{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
            }}>
                <ModalElement
                    title = { props.input.getTitle }
                    openModalTitle = { title }
                    closeModalTextStyle = { props.closeModalTextStyle }
                    titleModalTextStyle = { props.titleModalTextStyle }
                    openModalTextStyle = { props.openModalTextStyle }
                    styleOpenModal = { props.styleOpenModal }
                    styleModal = { props.styleModal }
                    modalContainer = { props.modalContainer }>
                        <Text style = { props.inputDropdownCurrentSelectionTextStyle }>
                            Sélection actuelle :  
                            <Text style = {{ fontWeight: "bold" }}> { props.input.getValue.getValue }</Text>
                        </Text>

                        <Spacer height = { 10 }/>

                        <ItemList
                            input = { props.input }
                            setTitle = { setTitle }
                            setError = { setError }
                            selectedItemStyle = { props.selectedItemStyle }
                            unselectedItemStyle = { props.unselectedItemStyle }
                            itemTextStyle = { props.itemTextStyle }
                            listHeaderComponentStyleBackgroundColor = { props.listHeaderComponentStyleBackgroundColor }
                            searchBarStyleText = { props.searchBarStyleText }
                            searchBarStyleContainer = { props.searchBarStyleContainer }
                        />
                </ModalElement>
            </View>

            <InputErrorMessage
                errorMessage = { error }
                style = { props.errorStyle }
            />
        </View>
    )

}

export default InputDropdown;

ItemElement.defaultProps = {
    selectedItemStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: color.dropdownBackgroundSelection,
        borderColor: color.dropdownBorderSelection,
        borderWidth: 0.5,
        borderRadius: 7,
        paddingHorizontal: 10
    },
    unselectedItemStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    }
}