import { InputDateTimeComponent } from "../input-set/input-date-time/input-date-time-component";
import { InputDropdownComponent } from "../input-set/input-dropdown/input-dropdown-component";
import { InputEmailComponent } from "../input-set/input-email/input-email-component";
import { InputNumberComponent } from "../input-set/input-number/input-number-component";
import { InputPhoneComponent } from "../input-set/input-phone/input-phone-component";
import { InputRadioButtonComponent } from "../input-set/input-radio-button/input-radio-button-component";
import { InputTextComponent } from "../input-set/input-text/input-text-component";

/**
 * Ce type permet de regrouper n'importe quel type d'input
 */
export type TypeInput = InputTextComponent 
    | InputEmailComponent
    | InputNumberComponent 
    | InputRadioButtonComponent
    | InputDateTimeComponent
    | InputPhoneComponent
    | InputDropdownComponent;

/**
 * Ce type permet de regrouper les inputs de type radio et radio dynamic, i.e. ceux pouvant donner lieux à de nouveaux inputs.
 */
export type TypeInputRadio = InputRadioButtonComponent;

