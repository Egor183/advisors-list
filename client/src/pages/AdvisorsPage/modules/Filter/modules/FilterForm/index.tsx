import { Button, Radio } from "@mui/material";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import React from "react";
import { Field, FormSection, InjectedFormProps, reduxForm } from "redux-form";
import { CHECKBOX_ITEMS, RADIO_BUTTON_ITEMS } from "./constants/constants";
import RadioGroup from "../../../../../../components/RadioGroup";
import RadioButton from "../../../../../../components/RadioGroup/modules/RadioButton";
import CheckBoxGroup from "../../../../../../components/CheckBoxGroup";
import CheckBox from "../../../../../../components/CheckBoxGroup/modules/CheckBox";

import styles from "./styles.module.css";
import { FORMS_IDS } from "../../../../../../constants/forms.constants";

const FilterForm: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <Field
          name="status"
          component={RadioGroup}
          type="radio"
          label="Status"
          id={FORMS_IDS.ID_0}
          value="both"
        >
          {RADIO_BUTTON_ITEMS.map((item) => (
            <RadioButton
              value={item.value}
              label={item.label}
              key={item.key}
              control={<Radio />}
            />
          ))}
        </Field>
      </div>

      <div className={styles.checkBoxContainer}>
        <FormSection name="languages">
          <CheckBoxGroup label="Languages" id={FORMS_IDS.ID_1}>
            {CHECKBOX_ITEMS.map((item) => (
              <Field
                name={item.language}
                component={CheckBox}
                type="checkbox"
                label={item.language}
                key={item.key}
              />
            ))}
          </CheckBoxGroup>
        </FormSection>
      </div>

      <Button
        type="submit"
        startIcon={<FilterAltRoundedIcon />}
        variant="contained"
      >
        Filter
      </Button>
    </form>
  );
};

export default reduxForm({
  onSubmit: () => null,
  form: "FilterForm",
})(FilterForm);
