import { Button, Radio } from "@mui/material";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import React from "react";
import { Field, FormSection, InjectedFormProps, reduxForm } from "redux-form";
import RadioGroup from "../../../../../../components/RadioGroup";
import RadioButton from "../../../../../../components/RadioGroup/modules/RadioButton";
import CheckBoxGroup from "../../../../../../components/CheckBoxGroup";
import CheckBox from "../../../../../../components/CheckBoxGroup/modules/CheckBox";

import styles from "./styles.module.css";

const FilterForm: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <Field
          name="status"
          component={RadioGroup}
          type="radio"
          label="Status"
          id="1"
          value="both"
        >
          <RadioButton value="both" label="Both" control={<Radio />} />
          <RadioButton value="online" label="Online" control={<Radio />} />
          <RadioButton value="offline" label="Offline" control={<Radio />} />
        </Field>
      </div>
      <div className={styles.checkBoxContainer}>
        <FormSection name="languages">
          <CheckBoxGroup label="Languages" id="2">
            <Field
              name="English"
              component={CheckBox}
              type="checkbox"
              label="English"
            />
            <Field
              name="Spanish"
              component={CheckBox}
              type="checkbox"
              label="Spanish"
            />
            <Field
              name="France"
              component={CheckBox}
              type="checkbox"
              label="France"
            />
            <Field
              name="German"
              component={CheckBox}
              type="checkbox"
              label="German"
            />
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
