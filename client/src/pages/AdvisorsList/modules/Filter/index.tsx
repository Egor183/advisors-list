import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import CheckBoxGroup from "../../../../components/CheckBoxGroup";
import CheckBox from "../../../../components/CheckBoxGroup/modules/CheckBox";
import RadioGroup from "../../../../components/RadioGroup";
import RadioButton from "../../../../components/RadioGroup/modules/RadioButton";

const Filter: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="status"
          component={RadioGroup}
          type="radio"
          label="Status"
          id="1"
        >
          <RadioButton value="both" label="Both" />
          <RadioButton value="online" label="Online" />
          <RadioButton value="offline" label="Offline" />
        </Field>
      </div>

      <div>
        <CheckBoxGroup label="Languages" id="2">
          <Field
            name="english"
            component={CheckBox}
            type="checkbox"
            label="English"
          />
          <Field
            name="spanish"
            component={CheckBox}
            type="checkbox"
            label="Spanish"
          />
          <Field
            name="france"
            component={CheckBox}
            type="checkbox"
            label="France"
          />
          <Field
            name="german"
            component={CheckBox}
            type="checkbox"
            label="German"
          />
        </CheckBoxGroup>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: "Filter",
})(Filter);
