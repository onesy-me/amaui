import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Icon from '../Icon';
import Menu from '../Menu';
import Chip from '../Chip';
import TextField from '../TextField';
import IconButton from '../IconButton';
import ListItem from '../ListItem';
import RoundProgress from '../RoundProgress';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    flex: 'unset'
  },

  input_: {
    alignSelf: 'center'
  },

  input: {
    display: 'inline-flex',
    margin: 0,
    border: 0,
    color: theme.palette.text.default.primary,
    background: 'transparent',
    '-webkit-tap-highlight-color': 'transparent',
    textAlign: 'start',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    ...theme.typography.values.b2
  },

  inputWrapper_multiple_size_small: {
    minHeight: '48px',
    columnGap: '6px',
    rowGap: '12px'
  },

  inputWrapper_multiple_size_regular: {
    minHeight: '56px',
    columnGap: '8px',
    rowGap: '16px'
  },

  inputWrapper_multiple_size_large: {
    minHeight: '64px',
    columnGap: '10px',
    rowGap: '20px'
  },

  multiple: {
    height: 'unset !important'
  },

  chipGroup_padding: {
    paddingTop: '4px'
  },

  arrow: {
    transition: theme.methods.transitions.make('transform')
  },

  arrow_open: {
    transform: 'rotate(180deg)'
  },

  open: {},

  readOnly: {
    cursor: 'default !important'
  },

  list: {
    maxHeight: '40vh',
    overflow: 'auto'
  },

  roundProgress: {
    padding: '0 8px'
  },

  disabled: {
    cursor: 'default !important'
  }
}), { name: 'AmauiAutoComplete' });

// To do

// autoSelect
// noOptions = true

// clearOnBlur
// blurOnSelect
// clearOnEscape
// closeOnSelect
// preselectReset
// filterSelectedOptions
// openOnFocus
// optionEqualValue method
// limitTags
// groupBy
// selectOnFocus

// other options...

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseRounded'
      short_name='Close'

      {...props}
    >
      <path d="M12 13.4 7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L12 10.6L16.9 5.7Q17.175 5.425 17.6 5.425Q18.025 5.425 18.3 5.7Q18.575 5.975 18.575 6.4Q18.575 6.825 18.3 7.1L13.4 12L18.3 16.9Q18.575 17.175 18.575 17.6Q18.575 18.025 18.3 18.3Q18.025 18.575 17.6 18.575Q17.175 18.575 16.9 18.3Z" />
    </Icon>
  );
});

const IconMaterialArrowDropDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownRounded'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.3 14.3 8.7 11.7Q8.225 11.225 8.488 10.613Q8.75 10 9.425 10H14.575Q15.25 10 15.512 10.613Q15.775 11.225 15.3 11.7L12.7 14.3Q12.55 14.45 12.375 14.525Q12.2 14.6 12 14.6Q11.8 14.6 11.625 14.525Q11.45 14.45 11.3 14.3Z" />
    </Icon>
  );
});

const AutoComplete = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAutoComplete?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    multiple,
    valueInput: valueInput_,
    valueInputDefault,
    value: value_,
    valueDefault,
    size = 'regular',
    version = 'filled',
    prefix,
    sufix,
    startIcon,
    endIcon,
    autoWidth,
    readOnly,
    getLabel,
    renderValues: renderValues_,
    renderOption,
    chip,
    filter,
    options: options_ = [],
    clear = true,
    selectOnFocus,
    clearOnBlur,
    loading,
    disabled,

    onChangeInput,
    onChange,

    IconClear = IconMaterialCloseRounded,
    ChipGroupProps = {},
    ListProps = {},
    MenuProps = {},

    className,
    style,

    children: children_,

    ...other
  } = props;

  const children = React.Children.toArray(children_);

  const [valueInput, setValueInput] = React.useState(valueInputDefault !== undefined ? valueInputDefault : valueInput_);
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || []);
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [options, setOptions] = React.useState(options_);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    input: React.useRef<HTMLInputElement>()
  };

  const styles: any = {
    root: {},
    menu: {}
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose(true);
    };

    window.addEventListener('keydown', method);

    window.addEventListener('mouseup', onMouseUp as any);

    return () => {
      // Clean up
      window.removeEventListener('mouseup', onMouseUp as any);

      window.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    const item = (options_ || []).find(item_ => item_.label === valueInput);

    if (!!valueInput?.length && !open && !item && !disabled && !readOnly) setOpen(true);
  }, [valueInput]);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== valueInput) setValueInput(value_);
  }, [value_]);

  React.useEffect(() => {
    if (focus) {
      if (!!(multiple ? value.length : valueInput) && selectOnFocus) setTimeout(() => refs.input.current.select());
    }
  }, [focus]);

  React.useEffect(() => {
    if (loading) setOpen(true);
  }, [loading]);

  const updateOptions = (newValue: any = valueInput, newOptions: any = undefined) => {
    let optionsValue = options_;

    if (loading) optionsValue = [{ label: 'Loading...', version: 'text' }];
    else if (newOptions) optionsValue = newOptions;
    else optionsValue = is('function', filter) ? filter(newValue, options_) : options_.filter(item => item?.label?.toLowerCase().includes(newValue?.toLowerCase()));

    if (!optionsValue.length) optionsValue.push({ label: 'No options', version: 'text', noOptions: true });

    setOptions(optionsValue);
  };

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(true);
  }, []);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(false);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(true);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(false);
  }, []);

  const onClick = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open => {
      if (!open) refs.input.current.focus();

      return !open;
    });
  }, []);

  const onClickArrowDown = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open => {
      if (!open) refs.input.current.focus();

      return !open;
    });
  }, []);

  const onEnterKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !disabled && !readOnly) setOpen(open => {
      if (!open) refs.input.current.focus();

      return !open;
    });
  }, []);

  const onClose = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      setOpen(open => {
        if (open) {
          if (refocus) refs.input.current.focus();
        }

        return false;
      });
    }
  }, []);

  const onExited = () => {
    if (!disabled && !readOnly) {
      if (!open) {
        const item = (options_ || []).find(item_ => item_.label === valueInput);

        // Update options to all values
        // if value is one of the option values
        if (item || !valueInput || options[0]?.noOptions) updateOptions(undefined, options_);
      }
    }
  };

  const onChangeValue = React.useCallback((newValue: any) => {
    if (!disabled && !readOnly) {
      setValueInput(newValue);

      updateOptions(newValue);
    }
  }, []);

  const onClear = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      setValueInput('');
      setValue([]);

      if (refocus) refs.input.current.focus();
    }
  }, []);

  const onSelect = (newValue: any) => {
    let values = multiple ? is('array', value) ? value : [value] : valueInput;

    values = multiple ? unique([...values, newValue]) : newValue;

    if (!multiple) {
      if (is('function', onChange)) onChange(newValue);
    }
    else {
      if (is('function', onChangeInput)) onChangeInput(newValue);

      if (is('function', onChange)) onChange(values);
    }

    // Inner controlled value
    if (!props.hasOwnProperty('value')) {
      if (!multiple) setValueInput(newValue);
      else setValue(values);
    }
  };

  const onUnselect = (itemValue: any) => {
    if (multiple) {
      let values = is('array', value) ? value : [value];

      values = values.filter(item => item !== itemValue);

      if (is('function', onChange)) onChange(values);

      // Inner controlled value
      if (!props.hasOwnProperty('value')) setValue(values);
    }
  };

  if (refs.root.current) {
    const rect = refs.root.current.getBoundingClientRect();

    if (!autoWidth) {
      styles.menu.minWidth = rect.width;
    }
  }

  const renderValue = (value_: any) => {
    const item: any = children.find((item_: any) => item_.props?.value === value_);

    const getItemLabel = getLabel || (() => {
      return (item.props?.label || item.props?.primary || item.props?.secondary || item.props?.tertiary || item.props?.children);
    });

    return item ? getItemLabel(item, props) : value_;
  };

  const renderValues = renderValues_ || (() => {
    if (multiple) {
      if (chip) {
        return (
          value.map(item => (
            <Chip
              key={item}

              onClick={(event: React.MouseEvent<any>) => {
                event.preventDefault();
                event.stopPropagation();
              }}

              onRemove={(event: React.MouseEvent<any>) => {
                event.preventDefault();
                event.stopPropagation();

                onUnselect(item);
              }}

              input
            >
              {renderValue(item)}
            </Chip>
          ))
        );
      }

      return value.map(item => renderValue(item)).join(', ');
    }

    return renderValue(value);
  });

  const MenuValue = (children && (
    <Menu
      open={open}

      portal={false}

      onClose={() => onClose(false)}

      onExited={onExited}

      anchorElement={refs.root.current}

      transformOrigin='center top'

      transformOriginSwitch='center bottom'

      maxWidth='unset'

      ModalProps={{
        // focus: !MenuProps.portal

        freezeScroll: false
      }}

      style={styles.menu}

      ListProps={{
        menu: true,

        size,

        className: classNames([
          classes.list
        ]),

        ...ListProps
      }}

      {...MenuProps}
    >
      {options.map((item: any, index: number) => {
        let other_: any = {};

        const button = item.version === undefined || item.version === 'button';

        if (button) {
          other_ = {
            primary: item.label,

            value: item.label,

            button,

            selected: multiple ? value.includes(item.label) : valueInput === item.label,

            onClick: (event: React.MouseEvent) => {
              if (multiple && value.includes(item.label)) onUnselect(item.label);
              else onSelect(item.label);

              if (is('function', item.props?.onClick)) item.props?.onClick(event);

              if (!multiple) {
                setOpen(false);

                refs.input.current.focus();
              }
            },

            onKeyDown: (event: React.KeyboardEvent) => {
              if (event.key === 'Enter') {
                if (multiple && value.includes(item.label)) onUnselect(item.label);
                else onSelect(item.label);

                if (is('function', item.props?.onClick)) item.props?.onClick(event);

                if (!multiple) {
                  setOpen(false);

                  refs.input.current.focus();
                }
              }
            }
          };
        }
        else {
          other_.secondary = item.label;
        }

        other_.onMouseUp = onMouseUp;

        other_.onMouseDown = onMouseDown;

        return (
          is('function', renderOption) ?
            renderOption(item, index, { ...other_, ...item.props }) :

            <ListItem
              key={index}

              {...other_}

              {...item.props}
            />
        );
      })}
    </Menu>
  ));

  const endIcons = [
    endIcon,

    ...(!readOnly ? [
      ...(loading ? [
        <RoundProgress
          className={classes.roundProgress}

          size='small'
        />
      ] : []),

      !!(multiple ? value.length : valueInput) && (
        <IconButton
          onClick={onClear}
        >
          <IconClear />
        </IconButton>
      ),

      <IconButton
        onClick={onClickArrowDown}

        InteractionProps={{
          clear: !!(multiple ? value.length : valueInput)
        }}
      >
        <IconMaterialArrowDropDownRounded
          className={classNames([
            classes.arrow,
            open && classes.arrow_open
          ])}
        />
      </IconButton>
    ] : [])
  ].filter(Boolean);

  if (mouseDown) refs.input.current.focus();

  return (
    <TextField
      ref={refs.input}

      rootRef={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      onBlur={onBlur}

      onFocus={onFocus}

      value={valueInput}

      onChange={onChangeValue}

      enabled={open || focus || mouseDown || !!(multiple ? (value.length || valueInput) : valueInput)}

      focus={open || focus || mouseDown}

      className={
        classNames([
          staticClassName('AutoComplete', theme) && [
            'AmauiAutoComplete-root',
            open && `AmauiAutoComplete-open`,
            disabled && `AmauiAutoComplete-disabled`
          ],

          classes.root,
          className,
          open && classes.open,
          disabled && classes.disabled
        ])
      }

      tonal={tonal}

      color={color}

      size={size}

      version={version}

      prefix={prefix}

      sufix={sufix}

      startIcon={startIcon}

      endIcon={endIcons}

      readOnly={readOnly}

      endIconVerticalAlign='center'

      disabled={disabled}

      InputWrapperProps={{
        className: classNames([
          staticClassName('AutoComplete', theme) && [
            'AmauiAutoComplete-inputWrapper',
            `AmauiAutoComplete-size-${size}`,
            chip && `AmauiAutoComplete-chip`,
            open && `AmauiAutoComplete-open`,
            readOnly && `AmauiAutoComplete-readOnly`
          ],

          classes.inputWrapper,
          multiple && [
            classes.multiple,
            classes[`inputWrapper_multiple_size_${size}`]
          ],
          chip && classes.chip,
          open && classes.open,
          readOnly && classes.readOnly
        ]),

        tabIndex: 0,

        onMouseDown,
        onMouseUp,

        onFocus,
        onBlur,

        onClick,

        onKeyDown: onEnterKeyDown
      }}

      inputProps={{
        className: classNames([
          multiple && classes.input_
        ]),

        disabled: multiple,

        readOnly: multiple
      }}

      footer={MenuValue}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {multiple && !chip && !!value.length && (
        <div
          ref={refs.value}

          tabIndex={0}

          onFocus={onFocus}

          onBlur={onBlur}

          onMouseDown={onMouseDown}

          onKeyDown={onEnterKeyDown}

          className={classNames([
            staticClassName('AutoComplete', theme) && [
              'AmauiAutoComplete-input',

              multiple && [
                chip && `AmauiAutoComplete-chip`,
                open && `AmauiAutoComplete-open`,
                readOnly && `AmauiSelect-readOnly`
              ],
            ],

            multiple && [
              classes.input,
              chip && classes.chip,
              open && classes.open,
              readOnly && classes.readOnly
            ],
          ])}
        >
          {renderValues()}
        </div>
      )}

      {multiple && chip && !!value.length && renderValues()}
    </TextField>
  );
});

AutoComplete.displayName = 'AmauiAutoComplete';

export default AutoComplete;
