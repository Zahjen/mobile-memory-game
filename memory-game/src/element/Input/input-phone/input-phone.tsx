import React from "react";
import { FlatList, Pressable, StyleProp, Text, TextInput, View, ViewStyle } from "react-native";
import { color } from "../../example/variables/color";
import ModalElement from "../global/element/modal-element";
import Spacer from "../global/element/spacer";
import { frenchCountries, IFrenchCountryList } from "../global/variables/french-countries";
import InputErrorMessage from "../input-error/input-error";
import SearchBarComponent from "../search-bar/search-bar";
import { SearchBarController } from "../search-bar/search-bar-controller";
import { InputPhoneController } from "./input-phone-controller";
import { PropsCountryList, PropsInputPhone, PropsItemCountry } from "./input-phone-props";

/**
 * Composant correspondant une ligne d'une flatlist par exemple. Ici, il s'agit d'un drapeau avec le nom du pays sur lequel il est possible de cliquer pour changer la valeur du bouton.
 * 
 * ---
 * ---
 * 
 * `PropsItemCountry` : Interface composée de :
 * * `input` *(InputPhoneComponent)* : Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input.
 * * `item` *(IFrenchCountryList)* : Correspond à un élément de la liste de pays français, et comprend donc un code pays accompagné du nom de pays.
 * * `setTitle` *(string)* : Le titre appliqué au bouton permettant de sélectionner un pays.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* :  L'erreur générer dans le cas où le numéro de téléphone déjà entré n'est pas valide par rapport au pays qui vient d'être choisi.
 * * `selectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item sélectionné.
 * * `unselectedItemStyle?` *(StyleProp<ViewStyle>)* : Le style associé à un item non sélectionné.
 * * `itemTextStyle?` *(StyleProp<TextStyle>)* : Le style du texte associé à un item.
 * 
 * ---
 * ---
 * 
 * @param props `PropsItemCountry`
 * @returns Element ItemCountryElement
 */
const ItemCountryElement: React.FC<PropsItemCountry> = ( props: PropsItemCountry ): JSX.Element => {

    const inputPhoneController 
        = InputPhoneController.getInstance();

    const isSelected: boolean 
        = props.item.code === props.input.getCountryCode;

    const style: StyleProp<ViewStyle> = isSelected 
        ? props.selectedItemStyle
        : props.unselectedItemStyle

    return (
        <Pressable 
            key = { props.item.code } 
            style = { style }
            onPress = { (): void => inputPhoneController.onCountryChange(props) }
        >
            <Text style = { props.itemTextStyle }>
                { props.item.name }
            </Text>
            <Spacer height = { 40 }/>
        </Pressable>
    )
    
}

/**
 * Élément permettant de générer une liste de pays ainsi qu'une barre de recherche permettant de filtrer cette liste.
 * 
 * ---
 * ---
 * 
 * `PropsCountryList` : Interface composée de :
 * * `propsInputPhone` *(PropsInputPhone)* : Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Le titre appliqué au bouton permettant de sélectionner un pays.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : L'erreur générer dans le cas où le numéro de téléphone déjà entré n'est pas valide par rapport au pays qui vient d'être choisi.
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
 * @param props `PropsCountryList`
 * @return Élement CountryList 
 */
 const CountryList: React.FC<PropsCountryList> = ( props: PropsCountryList ): JSX.Element => {
    const searchBarController = SearchBarController.getInstance();

    const [value, setValue]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState("");

    const [data, setData]: [IFrenchCountryList[], React.Dispatch<React.SetStateAction<IFrenchCountryList[]>>] 
        = React.useState(frenchCountries);

    return (
        <FlatList
            data = { data }
            renderItem = { ({item}: any) => {
                return <ItemCountryElement
                    item = { item }
                    setTitle = { props.setTitle }
                    input = { props.input }
                    setError = { props.setError }
                    selectedItemStyle = { props.selectedItemStyle }
                    unselectedItemStyle = { props.unselectedItemStyle }
                    itemTextStyle = { props.itemTextStyle }
                />
            } }
            keyExtractor = { country => country.code }
            ListHeaderComponent = { 
                <SearchBarComponent
                    placeholder = "e.g. Luxembourg"
                    value = { value }
                    handleSearch = {(text: string) => searchBarController.handleSearch(text, frenchCountries, setData, setValue, "name")}
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
 * Élement permettant de générer un input de type numéro de téléphone. La disposition est la suivante :
 * * Dans un premier temps on retrouve un bouton permettant d'ouvrir un modal et de séléctionner un pays se rapportant au numéro de téléphone qui pourra être renseigné.
 * * Dans un second temps on retrouve un input de type texte qui permettra à l'utilisateur de saisir le numéro de téléphone souhaité.
 * 
 * ---
 * ---
 * 
 * `PropsInputPhone` : Interface composée de :
 * * `input` *(InputPhoneComponent)* : Instance de la classe InputPhoneComponent permettant de stocker les informations relatives à cet input.
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
 * * `openModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant d'ouvrir le modal.
 * * `textInputPhoneStyle?` *(StyleProp<TextStyle>)* : Style relatif au container permettant la saisie du numéro de téléphone.
 * * `placeholderPhoneTextColor?` *(string)* : Couleur du texte du placeholder permettant de donner une indication sur le numéro de téléphone à saisir.
 * * `searchBarStyleText?` *(StyleProp<TextStyle>)* : Style relatif au texte de la saisie.
 * * `searchBarStyleContainer?` *(StyleProp<ViewStyle>)* : Style relatif au container de l'input permettant la recherche.
 * * `labelStyle?` *(StyleProp<TextStyle>)* : Correspond au style associé au label d'un input.
 * 
 * ---
 * ---
 * 
 * @param props `PropsInputPhone`
 * @returns Élement InputPhone
 */
 const InputPhone: React.FC<PropsInputPhone> = ( props: PropsInputPhone ): JSX.Element => {

    const inputPhoneController 
        = InputPhoneController.getInstance();

    const [borderWidth, setBorderWidth]: [number, React.Dispatch<React.SetStateAction<number>>]
        = React.useState(2);

    const [error, setError]: [string, React.Dispatch<React.SetStateAction<string>>]
        = React.useState('');

    const [title, setTitle]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState(`${ props.input.getCountryCode }`);

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
                    title = "Sélectionner un pays"
                    openModalTitle = { title }
                    closeModalTextStyle = { props.closeModalTextStyle }
                    titleModalTextStyle = { props.titleModalTextStyle }
                    openModalTextStyle = { props.openModalTextStyle }
                    styleOpenModal = { props.styleOpenModal }
                    styleModal = { props.styleModal }>
                        <Text style = { props.inputDropdownCurrentSelectionTextStyle }>
                            Sélection actuelle : <Text style = {{ fontWeight: "bold" }}>{ props.input.getCountryName() }</Text>
                        </Text>

                        <Spacer height = { 10 }/>

                        <CountryList
                            input = { props.input }
                            setTitle = { setTitle }
                            setError = { setError }
                            itemTextStyle = { props.itemTextStyle }
                            listHeaderComponentStyleBackgroundColor = { props.listHeaderComponentStyleBackgroundColor }
                            searchBarStyleText = { props.searchBarStyleText }
                            searchBarStyleContainer = { props.searchBarStyleContainer }
                        />
                </ModalElement>

                <Spacer width = { 15 }/>
                    
                <TextInput
                    style = { [props.textInputPhoneStyle, {borderWidth: borderWidth}] }
                    onChangeText = { (value: string) => inputPhoneController.onTextChange(value, props, setError) }
                    placeholderTextColor = { props.placeholderPhoneTextColor }
                    placeholder = { props.input.getPlaceholder }
                    // Permet de grossir la bordure du bas de l'input lorsqu'il y a focus sur celui - ci.
                    onFocus = { () => setBorderWidth(3) }
                    // Lorsque le focus est levé, on retourne à la largeur de bordure original.
                    onBlur = { () => setBorderWidth(2) } 
                    keyboardType = { props.input.getKeyboardType }
                    returnKeyType = "done"
                />
            </View>
            
            <Spacer height = { 10 }/>

            <InputErrorMessage 
                errorMessage={ error }   
                style = { props.errorStyle }             
            />
        </View>
    )

}

export default InputPhone;

ItemCountryElement.defaultProps = {
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