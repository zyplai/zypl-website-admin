import React from "react";
import classNames from "classnames";
// import DatePicker from "react-datepicker";
import * as math from "mathjs";

import Icon from "icons";
import styles from "./input.module.scss";
import input from "./input";
import { CSSTransition } from "react-transition-group";

const Input: React.FC<input.props> = ({
  title,
  type,
  id,
  value,
  onInput,
  step,
  onSelect,
  min,
  max,
  onSetDate,
  options,
  placeholder,
  error,
  warning,
  hasFilterText = false,
  unit = "",
}) => {
  const inputRef = React.useRef<HTMLDivElement | null>(null);

  const [selectOpened, setSelectOpened] = React.useState(false);
  const [visibility, setVisibility] = React.useState(false);

  const [filteredOptions, setFilteredOptions] = React.useState(options ?? []);
  const [selectFilterText, setSelectFilterText] = React.useState("");
  const selectFilter = React.useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input_value = event.target.value;
    if (type === "integer" && Number.isInteger(+input_value))
      if (input_value.length > 1 && input_value[0] === "0")
        onInput?.(input_value.slice(1).replace(".", ""));
      else onInput?.(input_value.replace(".", ""));
    if (
      type === "float" &&
      input_value.split(".").length - 1 <= 1 &&
      Number.isInteger(+input_value.replace(".", ""))
    )
      onInput?.(input_value);
    if (type === "number" && (/^\d+$/.test(input_value) || input_value === ""))
      onInput?.(input_value.replace(".", ""));
    if (type === "string") onInput?.(input_value);
    if (type === "password") onInput?.(input_value);
  };

  const handleIncrease = () => {
    if (!step || (type !== "float" && type !== "integer")) return;
    onInput?.(
      String(
        math.min(
          math.max(math.round(+value + step, 4), min ?? Number.MIN_VALUE),
          max ?? Number.MAX_VALUE
        )
      )
    );
  };

  const handleDecrease = () => {
    if (!step || (type !== "float" && type !== "integer")) return;
    onInput?.(
      String(
        math.max(
          math.min(math.round(+value - step, 4), max ?? Number.MAX_VALUE),
          min ?? Number.MIN_VALUE
        )
      )
    );
  };

  React.useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.addEventListener(
      "mousedown",
      (event) => {
        if (event.detail > 1) event.preventDefault();
      },
      false
    );
  }, []);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#select-" + id))
        setSelectOpened(false);
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [id]);

  React.useEffect(() => {
    if (!options) return;
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(selectFilterText.toLowerCase())
      )
    );
  }, [selectFilterText, options]);

  React.useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (selectOpened) selectFilter?.current?.focus();
    else timeout = setTimeout(() => setSelectFilterText(""), 100);
    return () => clearTimeout(timeout);
  }, [selectOpened]);

  return (
    <div
      className={classNames(
        styles.input,
        error && error !== "" && styles.error,
        warning && warning !== "" && styles.warning
      )}
    >
      {title && <div className={styles.legend}>{title}</div>}
      {type === "number" && (
        <div className={styles.short_text} ref={inputRef}>
          <input
            step={step}
            type="text"
            className={classNames(
              styles.short_text__field,
              step && styles.with_arrows
            )}
            value={value as string}
            onChange={handleChange}
          />
        </div>
      )}
      {(type === "integer" ||
        type === "float" ||
        type === "string" ||
        type === "password") && (
        <>
          <div className={styles.short_text} ref={inputRef}>
            <input
              step={step}
              placeholder={placeholder}
              type={type === "password" && !visibility ? "password" : "text"}
              className={classNames(
                styles.short_text__field,
                unit && styles.with_unit,
                step && styles.with_arrows,
                type === "password" && styles.with_visibility_button
              )}
              value={value as string}
              onChange={handleChange}
              onBlur={(e) => {
                if (e.target.value === "") onInput?.("");
                else if (
                  max !== undefined &&
                  Number(value !== "" ? value : 0) >= max
                )
                  onInput?.(String(max));
                else if (
                  min !== undefined &&
                  Number(value !== "" ? value : 0) <= min
                ) {
                  onInput?.(String(min));
                } else if (type === "float")
                  onInput?.(value === "" ? "" : String(math.round(+value, 4)));
              }}
            />
            {(type === "float" || type === "integer") && step && (
              <>
                <div className={styles.short_text__arrows}>
                  <div
                    className={classNames(
                      +value >= (max ?? Number.MAX_VALUE) && styles.disabled,
                      styles.arrow__top
                    )}
                    onClick={handleIncrease}
                  >
                    {/* <Icon name="arrowUp" size={14} /> */}
                  </div>
                  <div
                    className={classNames(
                      +value <= (min ?? Number.MIN_VALUE) && styles.disabled,
                      styles.arrow__bottom
                    )}
                    onClick={handleDecrease}
                  >
                    <Icon name="arrowDown" size={14} />
                  </div>
                </div>
                <div className={styles.unit}>{unit}</div>
              </>
            )}
            {type === "password" && (
              <button
                type="button"
                className={styles.visibility_button}
                onClick={() => setVisibility(!visibility)}
              >
                <Icon name="visibility" />
              </button>
            )}
          </div>
        </>
      )}
      {type === "select" && (
        <div
          id={"select-" + id}
          className={classNames(styles.select, selectOpened && styles.opened)}
        >
          <button
            type="button"
            className={styles.select__label}
            onClick={() => setSelectOpened(!selectOpened)}
          >
            {options?.find((option) => option === value) ?? (
              <div className={styles.placeholder}>{placeholder}</div>
            )}
            <Icon size={14} name="arrowDown" className={styles.select__arrow} />
          </button>
          <CSSTransition
            in={selectOpened}
            timeout={80}
            unmountOnExit
            classNames={{
              enter: styles.select__options__enter,
              enterActive: styles.select__options__enter_active,
              exit: styles.select__options__exit,
              exitActive: styles.select__options__exit_active,
            }}
          >
            <div
              className={classNames(
                styles.select__options,
                hasFilterText && styles.withSearchText
              )}
            >
              {hasFilterText && (
                <div className={styles.selectFilterTextWrap}>
                  <input
                    ref={selectFilter}
                    type="text"
                    placeholder="Search.."
                    value={selectFilterText}
                    className={styles.selectFilterText}
                    onChange={(event) =>
                      setSelectFilterText(event.target.value)
                    }
                  />
                </div>
              )}
              {filteredOptions?.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={styles.select__option}
                  onClick={() => {
                    onSelect?.(option);
                    setSelectOpened(false);
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </CSSTransition>
        </div>
      )}
      {/* {type === "date" && (
        <DatePicker
          selected={value as Date}
          onChange={(date) => onSetDate?.(date ?? new Date())}
          customInput={<CustomDateInput />}
        />
      )} */}
      {error && error !== "" && (
        <div className={styles.error_text}>{error}</div>
      )}
      {warning && warning !== "" && (
        <div className={styles.warning_text}>{warning}</div>
      )}
    </div>
  );
};

interface CustomDateInputProps {
  value?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const CustomDateInput = React.forwardRef<
  HTMLButtonElement,
  CustomDateInputProps
>(({ value, onClick }, ref) => (
  <button className={styles.date} onClick={onClick} ref={ref}>
    {value}
    <Icon name="calendar" size={20} />
  </button>
));

export default Input;
