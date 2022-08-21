import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Icon from '../Icon';

const useStyle = style(theme => ({
  root: {
    display: 'inline-flex',
    cursor: 'pointer'
  },

  iconWrapper: {
    position: 'relative',
    transition: theme.methods.transitions.make('transform', { duration: 'xs' }),

    '&:hover': {
      transform: 'scale(1.14)'
    }
  },

  iconWrapper_readOnly: {
    '&:hover': {
      transform: 'none'
    }
  },

  active: {
    display: 'inline-flex',
    position: 'absolute',
    inset: 0,
    overflow: 'hidden',
    height: '100%',
    width: '0px'
  },

  inactive: {
    opacity: 0.24
  },

  readOnly: {
    cursor: 'default'
  },

  disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    cursor: 'default'
  }
}), { name: 'AmauiRating' });

const IconMaterialGradeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRounded'
      short_name='Grade'

      {...props}
    >
      <path d="M12 12.775ZM7.05 21.05Q6.775 21.275 6.463 21.075Q6.15 20.875 6.275 20.525L8.15 14.4L3.275 10.9Q2.975 10.7 3.088 10.35Q3.2 10 3.55 10H9.6L11.525 3.6Q11.575 3.4 11.713 3.325Q11.85 3.25 12 3.25Q12.15 3.25 12.288 3.325Q12.425 3.4 12.475 3.6L14.4 10H20.45Q20.8 10 20.913 10.35Q21.025 10.7 20.725 10.9L15.85 14.4L17.725 20.525Q17.85 20.875 17.538 21.075Q17.225 21.275 16.95 21.05L12 17.3ZM9.6 16.65 12 14.8 14.4 16.65 13.5 13.6 15.75 12H12.95L12 8.9L11.05 12H8.25L10.5 13.6Z" />
    </Icon>
  );
});

const IconMaterialGradeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradeRoundedFilled'
      short_name='Grade'

      {...props}
    >
      <path d="M7.05 21.05Q6.775 21.275 6.463 21.075Q6.15 20.875 6.275 20.525L8.15 14.4L3.275 10.9Q2.975 10.7 3.088 10.35Q3.2 10 3.55 10H9.6L11.525 3.6Q11.575 3.4 11.713 3.325Q11.85 3.25 12 3.25Q12.15 3.25 12.288 3.325Q12.425 3.4 12.475 3.6L14.4 10H20.45Q20.8 10 20.913 10.35Q21.025 10.7 20.725 10.9L15.85 14.4L17.725 20.525Q17.85 20.875 17.538 21.075Q17.225 21.275 16.95 21.05L12 17.3Z" />
    </Icon>
  );
});

// To do

// focus (only on not readOnly, disabled active or first value y)
// keyboard with arrows left, bottom and top, right move value to left or right value y
// enter key as well for updating value y

const Rating = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRating?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    colorInactive = 'default',
    size = 'regular',
    values = 5,
    precision = 1,
    value: value_,
    valueDefault,
    valueActive: valueActive_,
    valueActiveDefault,
    onChange,
    onChangeActive,
    Component = 'span',
    icon,
    icons,
    iconInactive = <IconMaterialGradeRounded />,
    iconActive = <IconMaterialGradeRoundedFilled />,
    onlyValue,
    readOnly,
    disabled,

    className,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);
  const [valueActive, setValueActive] = React.useState<number>(valueActiveDefault !== undefined ? valueActiveDefault : valueActive_);
  const [hover, setHover] = React.useState(false);

  const refs = {
    values: React.useRef<Array<HTMLSpanElement>>([])
  };

  const { classes } = useStyle(props);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init && value_ !== value) setValue(value_);
  }, [value_]);

  React.useEffect(() => {
    if (init && valueActive_ !== valueActive) setValueActive(valueActive_);
  }, [valueActive_]);

  const onClick = React.useCallback(() => {
    if (!disabled && !readOnly) {
      if (value === valueActive) {
        if (props.hasOwnProperty('value')) {
          if (is('function', onChange)) onChange(undefined);
        }
        else setValue(undefined);

        setHover(false);
      }
      else {
        if (props.hasOwnProperty('value')) {
          if (is('function', onChange)) onChange(valueActive);
        }
        else setValue(valueActive);
      }
    }
  }, [disabled, readOnly, value, valueActive]);

  const valuePrecision = (value__: number) => {
    let mod = value__ % precision;

    if (precision >= value__) return precision;
    else if (mod === 0) return value__;
    else {
      let valueNew = value__;

      while (true) {
        // Precision up to decimal hundreds in value
        valueNew += 0.01;

        valueNew = +(valueNew).toFixed(2);

        mod = +(valueNew % precision).toFixed(2);

        if (mod === precision || mod === 0) return valueNew;
        else if (valueNew >= 1) return 0;
      }
    }
  };

  const onMouseMove = React.useCallback((event: React.MouseEvent<any>, index: number) => {
    if (!disabled && !readOnly) {
      if (!hover) setHover(true);

      let value__ = index;

      const { clientX } = event;

      const rect = refs.values.current[index].getBoundingClientRect();

      const width = rect.width;

      // Value to the precision point value
      value__ = valuePrecision((clientX - rect.x) / width);

      // Add index value
      if ([0, 1].includes(value__)) value__ = index;
      else value__ += index;

      if (valueActive !== value__) {
        if (props.hasOwnProperty('valueActive')) {
          if (is('function', onChangeActive)) onChangeActive(value__);
        }
        // Inner controlled value
        else setValueActive(value__);
      }
    }
  }, [disabled, readOnly, hover, valueActive]);

  const onMouseEnter = React.useCallback(() => {
    if (!disabled && !readOnly) setHover(true);
  }, [disabled, readOnly]);

  const onMouseLeave = React.useCallback(() => {
    if (!disabled && !readOnly) {
      if (props.hasOwnProperty('valueActive')) {
        if (is('function', onChangeActive)) onChangeActive(undefined);
      }
      // Inner controlled value
      else setValueActive(undefined);

      setHover(false);
    }
  }, [disabled, readOnly]);

  const width = (index: number) => {
    const value__ = !hover ? value : valueActive;

    if (value__ >= index && value__ < index + 1) {
      if (value__ === index) return '100%';

      return `${(value__ - index) * 100}%`;
    }

    if (value__ !== undefined && index < +(value__).toFixed(1) && !onlyValue) return '100%';
  };

  const getIcon = (index: number, inactive = true) => {
    if (inactive) return icons?.[index]?.iconInactive || icons?.[index]?.icon || icon || iconInactive;

    return icons?.[index]?.iconActive || icons?.[index]?.icon || icon || iconActive;
  };

  return (
    <Component
      ref={ref}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      className={classNames([
        staticClassName('Icon', theme) && [
          'AmauiRating-root',
          `AmauiRating-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
          is('string', size) && `AmauiRating-size-${size}`,
          tonal && `AmauiButton-tonal`,
          readOnly && `AmauiRating-readOnly`,
          disabled && `AmauiRating-disabled`
        ],

        className,
        classes.root,
        readOnly && classes.readOnly,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {new Array(values).fill(undefined).map((item: any, index: number) => {
        const IconInactive = getIcon(index);
        const IconActive = getIcon(index, false);

        return (
          <span
            ref={item => refs.values.current.push(item)}

            onMouseMove={(event: React.MouseEvent<any>) => onMouseMove(event, index)}

            onClick={onClick}

            className={classNames([
              staticClassName('Icon', theme) && [
                'AmauiRating-icon-wrapper'
              ],

              classes.iconWrapper,
              (readOnly || disabled) && classes.iconWrapper_readOnly
            ])}
          >
            <span
              className={classNames([
                staticClassName('Icon', theme) && [
                  'AmauiRating-icon',
                  'AmauiRating-icon-inactive'
                ],

                classes.icon,
                classes.inactive
              ])}
            >
              {React.cloneElement(IconInactive, {
                tonal: IconInactive.props?.tonal !== undefined ? IconInactive.props?.tonal : tonal,
                color: colorInactive,
                size: IconInactive.props?.size !== undefined ? IconInactive.props?.size : size
              })}
            </span>

            <span
              className={classNames([
                staticClassName('Icon', theme) && [
                  'AmauiRating-icon',
                  'AmauiRating-icon-active'
                ],

                classes.icon,
                classes.active
              ])}

              style={{ width: width(index) }}
            >
              {React.cloneElement(IconActive, {
                tonal: IconActive.props?.tonal !== undefined ? IconActive.props?.tonal : tonal,
                color: IconActive.props?.color !== undefined ? IconActive.props?.color : color,
                size: IconActive.props?.size !== undefined ? IconActive.props?.size : size
              })}
            </span>
          </span>
        );
      })}
    </Component>
  );
});

Rating.displayName = 'AmauiRating';

export default Rating;
