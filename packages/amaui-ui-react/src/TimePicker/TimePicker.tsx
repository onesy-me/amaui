import React from 'react';

import { is } from '@amaui/utils';
import { AmauiDate, format as formatMethod, set, is as isAmauiDate } from '@amaui/date';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import AdvancedTextField from '../AdvancedTextField';
import useMediaQuery from '../useMediaQuery';
import Modal from '../Modal';
import ClickListener from '../ClickListener';
import Tooltip from '../Tooltip';
import Surface from '../Surface';
import Line from '../Line';
import Type from '../Type';
import ToggleButtons from '../ToggleButtons';
import ToggleButton from '../ToggleButton';
import Button from '../Button';
import Slide from '../Slide';
import Clock from '../Clock';
import { SEPARATOR } from '../DatePicker/DatePicker';
import { TClockUnit } from '../Clock/Clock';
import { IAdvancedTextField } from '../AdvancedTextField/AdvancedTextField';

import { staticClassName, TElementReference, TPropsAny, TValueBreakpoints, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  main: {
    padding: '24px',
    marginInline: '24px',
    borderRadius: '28px'
  },

  main_orientation_vertical: {
    minWidth: '330px'
  },

  main_orientation_horizontal: {
    minWidth: '570px'
  },

  main_orientation_vertical_3: {
    minWidth: '450px'
  },

  main_orientation_horizontal_3: {
    minWidth: '690px'
  },

  main_input_2_12: {
    minWidth: '330px'
  },

  main_input_3_12: {
    minWidth: '450px'
  },

  main_input_2_24: {
    minWidth: '270px'
  },

  main_input_3_24: {
    minWidth: '390px'
  },

  heading: {
    width: '100%'
  },

  inputs: {
    width: '100%'
  },

  middle: {
    width: '100%',
    marginTop: '24px'
  },

  input: {
    maxWidth: '96px',
    flex: '1 1 auto',

    '& .amaui-TextField-input-wrapper': {
      paddingInline: '0px',
      paddingBlock: '11px 8px',
      height: '72px'
    },

    '& .amaui-TextField-input': {
      ...theme.typography.values.d2,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .amaui-TextField-footer': {
      marginTop: '8px',
      padding: '0px'
    },

    '& .amaui-TextField-helper-text': {
      color: theme.palette.text.default.primary
    }
  },

  button: {
    height: '72px',
    width: '96px',
    padding: '0',
    paddingTop: '3px',
    borderRadius: theme.methods.shape.radius.value('sm', 'px'),
    cursor: 'pointer',
    userSelect: 'none',
    flex: '1 1',

    '& .amaui-Button-label': {
      ...theme.typography.values.d2,

      lineHeight: '1',
    }
  },

  inputSeparator: {
    marginTop: '7px',
    paddingInline: '6px',
    userSelect: 'none'
  },

  toggleButtons: {
    '& > *': {
      flex: '1 1 auto'
    }
  },

  toggleButtons_input: {
    width: '52px',
    height: '72px'
  },

  toggleButtons_orientation_vertical: {
    width: '52px',
    height: '72px'
  },

  toggleButtons_orientation_horizontal: {
    height: '38px'
  },

  toggleButton: {

  },

  footer: {
    width: '100%',
    marginTop: '24px'
  }
}), { name: 'amaui-TimePicker' });

const IconMaterialScheduleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleRounded'
      short_name='Schedule'

      {...props}
    >
      <path d="M14.625 16.025Q14.9 16.3 15.3 16.3Q15.7 16.3 16 16Q16.275 15.725 16.275 15.3Q16.275 14.875 16 14.6L13 11.6V7.975Q13 7.55 12.713 7.275Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V11.975Q11 12.175 11.075 12.362Q11.15 12.55 11.3 12.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
    </Icon>
  );
});

const IconMaterialKeyboardAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltRounded'
      short_name='KeyboardAlt'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V6Q1 5.175 1.588 4.588Q2.175 4 3 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V19Q23 19.825 22.413 20.413Q21.825 21 21 21ZM3 19H21Q21 19 21 19Q21 19 21 19V6Q21 6 21 6Q21 6 21 6H3Q3 6 3 6Q3 6 3 6V19Q3 19 3 19Q3 19 3 19ZM9 10H11V8H9ZM5 10H7V8H5ZM8.5 17H15.5Q15.7 17 15.85 16.85Q16 16.7 16 16.5Q16 16.3 15.85 16.15Q15.7 16 15.5 16H8.5Q8.3 16 8.15 16.15Q8 16.3 8 16.5Q8 16.7 8.15 16.85Q8.3 17 8.5 17ZM13 10H15V8H13ZM9 14H11V12H9ZM5 14H7V12H5ZM13 14H15V12H13ZM17 10H19V8H17ZM17 14H19V12H17ZM3 19Q3 19 3 19Q3 19 3 19V6Q3 6 3 6Q3 6 3 6Q3 6 3 6Q3 6 3 6V19Q3 19 3 19Q3 19 3 19Z" />
    </Icon>
  );
});

export type TTimePickerValue = AmauiDate | [AmauiDate, AmauiDate];

export interface ITimePicker extends Omit<IAdvancedTextField, 'version'> {
  version?: 'auto' | 'mobile' | 'desktop';

  value?: TTimePickerValue;
  valueDefault?: TTimePickerValue;
  onChange?: (value: TTimePickerValue) => any;

  selecting?: TClockUnit;
  selectingDefault?: TClockUnit;
  onChangeSelecting?: (value: TClockUnit) => any;

  now?: boolean;
  range?: boolean;
  static?: boolean | 'clock';
  valid?: (value: AmauiDate, version: TClockUnit) => boolean;
  validate?: (value: AmauiDate) => boolean;
  min?: AmauiDate;
  max?: AmauiDate;
  autoNext?: boolean | Record<TValueBreakpoints, boolean>;
  autoCloseOnLast?: boolean | Record<TValueBreakpoints, boolean>;
  openMobile?: 'input' | 'select';
  openDesktop?: 'input' | 'select';
  selectModeHeadingText?: string;
  inputModeHeadingText?: string;
  orientation?: 'vertical' | 'horizontal' | Record<TValueBreakpoints, 'vertical' | 'horizontal'>;
  format?: '12' | '24';
  hour?: boolean;
  minute?: boolean;
  second?: boolean;
  switch?: boolean | Record<TValueBreakpoints, boolean>;
  readOnly?: boolean;
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<any>) => any;
  onClose?: (event: React.MouseEvent<any>) => any;
  onCancel?: (event: React.MouseEvent<any>) => any;
  onNow?: (event: React.MouseEvent<any>) => any;
  onOk?: (event: React.MouseEvent<any>) => any;

  renderValue?: (value: AmauiDate, version: TClockUnit, x: number, y: number, valueNumber: number, otherProps: any) => React.ReactNode;

  Icon?: TElementReference;
  IconEnter?: TElementReference;

  MainProps?: TPropsAny;
  ModalProps?: TPropsAny;
  ButtonProps?: TPropsAny;
  TooltipProps?: TPropsAny;
  ToggleButtonsProps?: TPropsAny;
  ToggleButtonProps?: TPropsAny;
  IconButtonProps?: TPropsAny;
  InputProps?: TPropsAny;
  ClockProps?: TPropsAny;
  AdvancedTextFieldProps?: TPropsAny;
}

const TimePicker = React.forwardRef((props__: ITimePicker, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTimePicker?.props?.default, ...props__ }), [props__]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    version: version_ = 'auto',

    value: value_,
    valueDefault,
    onChange,

    selecting: selecting_,
    selectingDefault,
    onChangeSelecting,

    range,
    now = true,
    label,
    min,
    max,
    validate,
    autoNext: autoNext_,
    autoCloseOnLast: autoCloseOnLast_,
    openMobile = 'select',
    openDesktop = 'select',
    selectModeHeadingText = 'Select time',
    inputModeHeadingText = 'Enter time',
    orientation: orientation_,
    format = '12',
    hour = true,
    minute = true,
    second = false,
    switch: switch__,
    static: static_,
    readOnly,
    disabled,

    valid: valid_,

    onClick: onClick_,
    onClose: onClose_,
    onCancel: onCancel_,
    onNow: onNow_,
    onOk: onOk_,

    renderValue,

    Icon: Icon_ = IconMaterialScheduleRounded,
    IconEnter = IconMaterialKeyboardAltRounded,

    MainProps,
    ModalProps,
    ButtonProps,
    TooltipProps,
    ToggleButtonsProps,
    ToggleButtonProps,
    IconButtonProps,
    InputProps,
    ClockProps,
    AdvancedTextFieldProps,

    className,

    ...other
  } = props;

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const orientation = valueBreakpoints(orientation_, 'vertical', breakpoints, theme);
  const autoNext = valueBreakpoints(autoNext_, undefined, breakpoints, theme);
  const autoCloseOnLast = valueBreakpoints(autoCloseOnLast_, undefined, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    mode: React.useRef<any>(),
    value: React.useRef<any>(),
    dayTime: React.useRef<any>()
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [value, setValue] = React.useState(() => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new AmauiDate(), new AmauiDate()] : [new AmauiDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<AmauiDate>).filter(Boolean);
  });
  const [selecting, setSelecting] = React.useState((selectingDefault !== undefined ? selectingDefault : selecting_) || 'hour');
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : openDesktop) || 'select');
  const [error, setError] = React.useState(false);
  const [dayTime, setDayTime] = React.useState('am');

  refs.value.current = value;

  refs.mode.current = mode;

  refs.dayTime.current = dayTime;

  const valueToInput = React.useCallback((valueNew: any = refs.value.current) => {
    let result = '';

    const [from, to] = valueNew as [AmauiDate, AmauiDate];

    const method = (item: AmauiDate) => {
      let formatValue = '';

      if (format === '12') formatValue += `hh`;
      else formatValue += `HH`;

      if (minute) formatValue += `:mm`;

      if (second) formatValue += `:ss`;

      if (format === '12') formatValue += ` a`;

      return formatMethod(item, formatValue);
    };

    result += `${method(from)}`;

    if (range && to) result += `${SEPARATOR}${method(to)}`;

    return result;
  }, [value, format, hour, minute, second]);

  const [input, setInput] = React.useState(valueToInput());

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  const errorCheck = React.useCallback((valueNew: any = value) => {
    // Error
    setError((valueNew || []).some((item: any, index: number) => !valid(item)));
  }, [value]);

  // Init
  React.useEffect(() => {
    // Error
    errorCheck();
  }, []);

  // Value
  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue((is('array', value_) ? value_ : [value_]) as any);
  }, [value_]);

  const onUpdate = React.useCallback((valueNew_: AmauiDate) => {
    const valueNew = resolve(valueNew_);

    // Inner update
    if (!props.hasOwnProperty('value')) setValue(valueNew as any);

    if (is('function', onChange)) onChange(!range ? valueNew[0] : valueNew);
  }, [value, range, onChange]);

  const onUpdateSelecting = React.useCallback((valueNew: TClockUnit) => {
    // Inner update
    if (!props.hasOwnProperty('selecting')) setSelecting(valueNew);

    if (is('function', onChangeSelecting)) onChangeSelecting(valueNew);
  }, [onChangeSelecting]);

  const valid = React.useCallback((...args: [AmauiDate, any?]) => {
    if (is('function', valid_)) return valid_(...args);

    const amauiDate = args[0];

    if (min || max || validate) {
      let response = true;

      if (is('function', validate)) response = validate(amauiDate);

      if (min !== undefined) response = response && isAmauiDate(amauiDate, 'after or same', min);

      if (max !== undefined) response = response && isAmauiDate(amauiDate, 'before or same', max);

      return response;
    }

    return true;
  }, [valid_, min, max, validate]);

  // ie. 07:40:04 am
  const textToAmauiDate = React.useCallback((valueNew: string) => {
    const [times, dayTime_] = (valueNew || '').split(' ');
    const values = times.split(':');

    let valueTime: any;

    let amauiDate = new AmauiDate();

    if (hour) {
      valueTime = values[0];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set((format === '12' && dayTime_ === 'pm') ? valueTime + 12 : valueTime, 'hour', amauiDate);
    }

    if (minute) {
      valueTime = values[!hour ? 0 : 1];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set(valueTime, 'minute', amauiDate);
    }

    if (second) {
      valueTime = values[!(hour && minute) ? 0 : !hour ? 1 : 2];

      if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

      valueTime = +valueTime;

      amauiDate = set(valueTime, 'second', amauiDate);
    }

    return amauiDate;
  }, [format, hour, minute, second]);

  const onInputModalChange = React.useCallback((valueNew: string, unit = selecting, index = 0) => {
    let valueTime: any = valueNew;

    if (is('string', valueTime) && valueTime.startsWith('0')) valueTime = valueTime.slice(1);

    valueTime = +valueTime;

    value[index] = set(valueTime, unit, value[index]);

    setValue(resolve(value) as any);
  }, [value, selecting]);

  const resolve = React.useCallback((valueNew = refs.value.current, dayTimeNew = refs.dayTime.current) => {
    const values = valueNew.map(item => {
      const valueHour = item.hour;

      if (format === '12') {
        if (dayTimeNew === 'am' && valueHour > 12) return set(valueHour - 12, 'hour', item);

        if (dayTimeNew === 'pm' && valueHour < 12) return set(valueHour + 12, 'hour', item);
      }

      return item;
    });

    return values;
  }, [value, dayTime, format]);

  const updateDayTime = React.useCallback((valueNew: string) => {
    setDayTime(valueNew[0]);

    setValue(resolve(value, valueNew[0]) as any);
  }, [value, format]);

  const inputToValue = React.useCallback((valueNew_: string = input) => {
    let valueNew = valueNew_;

    let [from, to] = valueNew.split(SEPARATOR) as any;

    from = textToAmauiDate(from);

    if (to) to = textToAmauiDate(to);

    valueNew = [from, to].filter(Boolean) as any;

    return valueNew as unknown as TTimePickerValue;
  }, [input]);

  const onInputChange = React.useCallback((valueNew_: any) => {
    const valueNew = inputToValue(valueNew_);

    const validValues = (valueNew as [AmauiDate, AmauiDate]).every(item => item.valid);

    // Only update values if input is valid
    // format used to make the value
    if (validValues) {
      // Error
      errorCheck(valueNew);

      // Update value
      onUpdate(valueNew as any);
    }

    // Update input for free typing
    setInput(valueNew_);
  }, []);

  const onChangeClock = React.useCallback((valueNew_: any, index: number = 0) => {
    const valueNew = [...value];

    if (valueNew_ !== value[index]) {
      valueNew[index] = valueNew_;

      setValue(resolve(valueNew) as any);

      // Error
      errorCheck(valueNew);
    }
  }, [value]);

  const onChangeSelectingClock = React.useCallback((valueNew: TClockUnit) => {
    if (valueNew !== selecting) setSelecting(valueNew);
  }, [selecting]);

  const onDoneSelecting = React.useCallback((valueNew: any, selectingNew: any) => {
    // AutoCloseOnLast
    if (autoCloseOnLast && refs.mode.current === 'select') {
      if (['hour', 'minute', 'second'].includes(selectingNew)) {
        if (
          (selectingNew === 'second') ||
          (selectingNew === 'minute' && !second) ||
          (selectingNew === 'hour' && !minute)
        ) return onOk();
      }
    }
  }, [mode, autoCloseOnLast, hour, minute, second]);

  const onMode = React.useCallback(() => {
    setMode((version === 'mobile' ? openMobile : openDesktop) || 'select');
  }, [version, openMobile, openDesktop]);

  const onModeSwitch = React.useCallback(() => {
    setMode(refs.mode.current === 'select' ? 'input' : 'select');
  }, []);

  const onOpen = React.useCallback(() => {
    onMode();

    setOpen(previous => !previous);
  }, [open, openMobile, version]);

  const onClose = React.useCallback((event: React.MouseEvent<any>) => {
    setOpen(false);

    if (is('function', onClose_)) onClose_(event);
  }, [onClose_]);

  const onReset = React.useCallback(() => {
    const valueNew = inputToValue() as any;

    // Update value
    onUpdate(valueNew);
  }, [input]);

  const onOk = React.useCallback((event?: React.MouseEvent) => {
    // Error
    errorCheck();

    // Update value
    onUpdate(refs.value.current as any);

    // Update input
    setInput(valueToInput(refs.value.current));

    onClose(event);

    if (is('function', onOk_)) onOk_(event);
  }, [value, onOk_]);

  const onCancel = React.useCallback((event: React.MouseEvent) => {
    onReset();

    onClose(event);

    if (is('function', onCancel_)) onCancel_(event);
  }, [input, onCancel_]);

  const mask: any = [];

  let placeholder = '';

  if (hour) {
    if (format === '12') {
      mask.push(
        { pattern: '[0-1]' },

        (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
      );
    }

    if (format === '24') {
      mask.push(
        { pattern: '[0-2]' },

        (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput),
      );
    }

    placeholder += 'hh';

    if (minute || second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (minute) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'mm';

    if (second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (second) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'ss';
  }

  if (format === '12') {
    mask.push(
      ' ',

      { pattern: '[ap]' },

      'm'
    );

    placeholder += ' (a|p)m';
  }

  const clock = (
    <Clock
      format={format}

      value={value[0]}

      dayTime={dayTime}

      selecting={selecting}

      onChange={onChangeClock}

      onChangeSelecting={onChangeSelectingClock}

      onDoneSelecting={onDoneSelecting}

      renderValue={renderValue}

      valid={valid}

      hour={hour}

      minute={minute}

      second={second}

      autoNext={autoNext}

      disabled={disabled}

      {...ClockProps}
    />
  );

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        tonal={tonal}

        color={color}

        version='text'

        onClick={onOpen}

        aria-label='Choose time'

        disabled={disabled || readOnly}

        {...IconButtonProps}
      >
        <Icon_ />
      </IconButton>
    );
  }

  const inputProps = {
    tonal,
    color,
    version: 'outlined',
    size: 'large',

    className: classNames([
      staticClassName('TimePicker', theme) && [
        'amaui-TimePicker-input'
      ],

      classes.input,
      classes[`input_version_${version}`]
    ]),

    ...InputProps
  };

  const toggleButtonProps = {
    icon: false,

    ...ToggleButtonProps,

    className: classNames([
      staticClassName('TimePicker', theme) && [
        'amaui-TimePicker-toggle-button'
      ],

      ToggleButtonProps?.className,
      classes.toggleButton
    ])
  };

  const buttonProps = {
    tonal: 'secondary',
    color,
    version: 'filled',
    backgroundOpacity: theme.palette.light ? 0.24 : 0.14,
    elevation: false,

    className: classNames([
      staticClassName('TimePicker', theme) && [
        'amaui-TimePicker-button'
      ],

      classes.button
    ])
  };

  const separator = (
    <Type
      version='d2'

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-input-separator'
        ],

        classes.inputSeparator
      ])}
    >
      :
    </Type>
  );

  const buttons = [];
  const inputs = [];

  if (hour) {
    buttons.push(
      <Button
        {...buttonProps}

        selected={selecting === 'hour'}

        onClick={() => onUpdateSelecting('hour')}
      >
        {formatMethod(value[0], format === '12' ? 'hh' : 'HH')}
      </Button>
    );

    inputs.push(
      <AdvancedTextField
        key={0}

        helperText='Hour'

        value={formatMethod(value[0], format === '12' ? 'hh' : 'HH')}

        onChange={(valueNew: any) => onInputModalChange(valueNew, 'hour', 0)}

        placeholder='00'

        mask={[
          ...(format === '12' ? [
            { pattern: '[0-1]' },

            (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
          ] : [
            { pattern: '[0-2]' },

            (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput)
          ])
        ]}

        {...inputProps}
      />
    );
  }

  if (minute) {
    if (hour) {
      buttons.push(separator);
      inputs.push(separator);
    }

    buttons.push(
      <Button
        {...buttonProps}

        selected={selecting === 'minute'}

        onClick={() => onUpdateSelecting('minute')}
      >
        {formatMethod(value[0], 'mm')}
      </Button>
    );

    inputs.push(
      <AdvancedTextField
        helperText='Minute'

        value={formatMethod(value[0], 'mm')}

        onChange={(valueNew: any) => onInputModalChange(valueNew, 'minute', 0)}

        placeholder='00'

        mask={[
          { pattern: '[0-5]' },

          { pattern: '[0-9]' }
        ]}

        {...inputProps}
      />
    );
  }

  if (second) {
    if (hour || minute) {
      buttons.push(separator);
      inputs.push(separator);
    }

    buttons.push(
      <Button
        {...buttonProps}

        selected={selecting === 'second'}

        onClick={() => onUpdateSelecting('second')}
      >
        {formatMethod(value[0], 'ss')}
      </Button>
    );

    inputs.push(
      <AdvancedTextField
        helperText='Second'

        value={formatMethod(value[0], 'ss')}

        onChange={(valueNew: any) => onInputModalChange(valueNew, 'second', 0)}

        placeholder='00'

        mask={[
          { pattern: '[0-5]' },

          { pattern: '[0-9]' }
        ]}

        {...inputProps}
      />
    );
  }

  const orientationValue = mode === 'select' ? orientation : 'vertical';

  const element = (
    <Surface
      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Line}

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-main'
        ],

        MainProps?.className,
        classes.main,
        classes[`main_orientation_${orientationValue}${(hour && minute && second) ? '_3' : ''}`],
        mode === 'input' && classes[`main_input_${(hour && minute && second) ? 3 : 2}_${format}`]
      ])}
    >
      {/* Heading */}
      <Type
        version='l2'

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-heading'
          ],

          classes.heading
        ])}
      >
        {selectModeHeadingText}
      </Type>

      {/* Middle */}
      <Line
        gap={4.5}

        direction={orientationValue === 'vertical' ? 'column' : 'row'}

        align='center'

        justify='unset'

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-middle'
          ],

          classes.middle
        ])}
      >
        {/* Inputs, am, pm */}
        <Line
          gap={orientationValue === 'vertical' ? 1.5 : 2}

          direction={orientationValue === 'vertical' ? 'row' : 'column'}

          align='unset'

          justify='center'

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'amaui-TimePicker-inputs'
            ],

            classes.inputs
          ])}
        >
          <Line
            gap={0}

            direction='row'

            wrap='wrap'

            align='flex-start'

            justify='center'
          >
            {(mode === 'select' ? buttons : inputs).map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index
              })
            ))}
          </Line>

          {format === '12' && (
            <ToggleButtons
              tonal={tonal}

              color='inherit'

              version='outlined'

              orientation={orientationValue}

              value={dayTime}

              onChange={updateDayTime}

              select='single'

              {...ToggleButtonsProps}

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'amaui-TimePicker-toggle-buttons'
                ],

                ToggleButtonsProps?.className,
                classes.toggleButtons,
                classes[`toggleButtons_orientation_${orientationValue}`]
              ])}
            >
              <ToggleButton
                value='am'

                {...toggleButtonProps}
              >
                AM
              </ToggleButton>

              <ToggleButton
                value='pm'

                {...toggleButtonProps}
              >
                PM
              </ToggleButton>
            </ToggleButtons>
          )}
        </Line>

        {/* Watch */}
        {mode === 'select' && clock}
      </Line>

      {/* Footer */}
      <Line
        direction='row'

        wrap='wrap'

        align='center'

        justify={switch_ ? 'space-between' : 'flex-end'}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'amaui-TimePicker-footer'
          ],

          classes.footer
        ])}
      >
        {switch_ && (
          <Tooltip
            label={mode === 'select' ? 'Enter time' : 'Select time'}
          >
            <IconButton
              tonal={tonal}

              color='inherit'

              onClick={onModeSwitch}

              aria-label={mode === 'select' ? 'Enter time' : 'Select time'}
            >
              {mode === 'select' ? <IconEnter /> : <Icon_ />}
            </IconButton>
          </Tooltip>
        )}

        <Line
          gap={0}

          direction='row'

          align='center'
        >
          <Button
            tonal={tonal}

            color={color}

            version='text'

            onClick={onCancel}

            {...ButtonProps}
          >
            Cancel
          </Button>

          <Button
            tonal={tonal}

            color={color}

            version='text'

            onClick={onOk}

            {...ButtonProps}
          >
            Ok
          </Button>
        </Line>
      </Line>
    </Surface>
  );

  if (version === 'mobile') {
    if (!readOnly) moreProps.onClick = onOpen;
  }

  if (static_) {
    if (static_ === 'clock') return clock;

    return element;
  }

  return (
    <Line
      gap={0}

      direction='column'

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'amaui-TimePicker-root',
          readOnly && `amaui-TimePicker-read-only`,
          disabled && `amaui-TimePicker-disabled`
        ],

        className,
        classes.root
      ])}
    >
      <AdvancedTextField
        rootRef={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        tonal={tonal}

        color={color}

        version='outlined'

        label={label}

        mask={mask}

        placeholder={placeholder}

        value={input}

        onChange={onInputChange}

        error={error}

        readOnly={readOnly}

        disabled={disabled}

        {...moreProps}

        {...other}

        {...AdvancedTextFieldProps}
      />

      {/* Mobile */}
      {version === 'mobile' && (
        <Modal
          open={open}

          modalWrapperSurface={false}

          TransitionComponent={Slide}

          onClose={onClose}

          {...ModalProps}
        >
          {element}
        </Modal>
      )}

      {/* Desktop */}
      {version === 'desktop' && (
        <Tooltip
          open={open}

          portal={false}

          anchorElement={refs.root.current}

          alignment='center'

          position='bottom'

          hover={false}

          focus={false}

          longPress={false}

          maxWidth='unset'

          noMargin

          label={(
            <ClickListener
              onClickOutside={onCancel}

              includeParentQueries={['.amaui-TimePicker-main']}
            >
              {element}
            </ClickListener>
          )}

          {...TooltipProps}
        />
      )}
    </Line>
  );
});

TimePicker.displayName = 'amaui-TimePicker';

export default TimePicker;
