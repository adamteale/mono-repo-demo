import { View } from "react-native";
import { FormEvent, useEffect } from "react";
import { AtButton, AtIcon } from "../../atoms";
import { MlFormField } from "../../molecules";
import { OrFormProps } from "./or-form.types";
import {
  formGridClasses,
  spanClasses,
  subtitleClasses,
  titleClasses,
} from "./or-form.variants";

export const OrForm = ({
  title,
  subtitle,
  controls,
  button,
  columns,
  className = "",
  dataTestId = "or-form",
  noValidate = true,
  handleSubmit,
  resetOnSubmit = false,
  id,
  changeControls,
  manager,
}: OrFormProps) => {
  const { state, dispatch, resetForm, clearInput, changeFields } = manager;

  useEffect(() => {
    if (changeControls) {
      changeFields(controls);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, changeControls]);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.isValid) {
      if (handleSubmit) handleSubmit(state);
      if (resetOnSubmit) resetForm();
    }
  };

  const handleFormFieldChange = (key: string, value: string) => {
    const control = controls[key];

    if (control.handleChange) {
      control.handleChange(value);
    }

    dispatch({
      type: "set-value",
      payload: value,
      key,
    });
  };

  return (
    <form
      className={`w-full ${className}`}
      onSubmit={submitForm}
      data-testid={`${dataTestId}-container`}
      noValidate={noValidate}
      id={id}
    >
      {(!!title || !!subtitle) && (
        <View className="text-primary mb-5">
          {!!title && <h4 className={titleClasses({ columns })}>{title}</h4>}
          {!!subtitle && (
            <h6 className={subtitleClasses({ columns })}>{subtitle}</h6>
          )}
        </View>
      )}

      <View className={formGridClasses({ columns })}>
        {Object.keys(controls).map((controlKey, index) => {
          const key = state.values[controlKey] ?? {};
          const value = key.value ?? "";
          const error = key.error;
          const type = key.type;
          return (
            <View
              key={index}
              className={`${
                controls[controlKey].columnClass
                  ? controls[controlKey].columnClass
                  : ""
              }`}
            >
              {controls[controlKey].outsideIcon ? (
                <View className="flex justify-between items-center">
                  <View className="w-full mr-2">
                    <MlFormField {...controls[controlKey]} />
                  </View>
                  <AtIcon
                    type={controls[controlKey].outsideIcon}
                    color="primary"
                    size={34}
                  />
                </View>
              ) : (
                <MlFormField
                  {...controls[controlKey]}
                  handleChange={(value: string) => {
                    handleFormFieldChange(controlKey, value);
                  }}
                  onClearInputClick={() => {
                    clearInput(controlKey);
                  }}
                  onClick={() => {
                    if (type === "checkbox") {
                      controls?.[controlKey].onClick?.(value);
                      dispatch({
                        type: "toggle",
                        payload: controlKey,
                      });
                    }
                  }}
                  checked={type === "checkbox" ? (value as boolean) : undefined}
                  value={value as string}
                  error={error}
                />
              )}
            </View>
          );
        })}
        {button && (
          <View className={spanClasses({ columns })}>
            <AtButton
              buttonType="submit"
              {...button}
              dataTestId="continue-btn"
            />
          </View>
        )}
      </View>
    </form>
  );
};
