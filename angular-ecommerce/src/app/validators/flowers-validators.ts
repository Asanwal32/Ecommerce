import { FormControl, ValidationErrors } from "@angular/forms";

export class FlowersValidators {

    static notOnlyWhitespace(control: FormControl): ValidationErrors{


        //check for whitespace

        if((control.value != null) && (control.value.trim().length ===0))
        {
            //invalid, return error object
            return {'notOnlyWhitespace': true};
        }

        else
        return null;
    }
}
