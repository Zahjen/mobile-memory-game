import { StyleProp, TextStyle } from "react-native";
import { borderRadius } from "../variable/border-radius";
import { color } from "../variable/color";

export const buttonStyle = {

    fill: {
        container: {
            backgroundColor: color.secondary,
            borderRadius: borderRadius.button,
            width: "100%",
            paddingVertical: 10,
            marginVertical: 40
        },
        text: {
            color: color.text,
            fontSize: 16,
            textAlign: "center",
            fontFamily: "PoppinsLight"
        } as StyleProp<TextStyle>
    },

    empty: {
        container: {
            borderColor: color.secondary,
            borderWidth: 1,
            borderRadius: borderRadius.button,
            width: "100%",
            paddingVertical: 10,
            marginVertical: 40
        },
        text: {
            color: color.text,
            fontSize: 16,
            textAlign: "center",
            fontFamily: "PoppinsLight"
        } as StyleProp<TextStyle>
    }

}