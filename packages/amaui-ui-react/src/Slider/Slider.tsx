import React from 'react';

import { clamp, equalDeep, is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { percentageWithinRange, staticClassName, valueWithinRangePercentage } from '../utils';

import IconButton from '../IconButton';
import Tooltip from '../Tooltip';

const rail = {
  position: 'absolute',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'inherit'
};

const horizontal = {
  top: '50%',
  transform: 'translateY(-50%)'
};

const vertical = {
  left: '50%',
  transform: 'translateX(-50%)'
};

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    display: 'inline-flex',
    borderRadius: `${theme.shape.radius.unit * 0.75}px`,
    cursor: 'pointer'
  },

  rail: {
    ...rail
  },

  rail_orientation_horizontal: {
    insetInline: 0
  },

  rail_orientation_vertical: {
    insetBlock: 0
  },

  rail_orientation_horizontal_size_small: { height: '3px' },

  rail_orientation_horizontal_size_regular: { height: '4px' },

  rail_orientation_horizontal_size_large: { height: '5px' },

  rail_orientation_vertical_size_small: { width: '3px' },

  rail_orientation_vertical_size_regular: { width: '4px' },

  rail_orientation_vertical_size_large: { width: '5px' },

  track: {
    ...rail,
  },

  track_orientation_horizontal: {
    insetInlineStart: 0
  },

  track_orientation_vertical: {
    insetBlockEnd: 0
  },

  track_orientation_horizontal_size_small: { height: '5px' },

  track_orientation_horizontal_size_regular: { height: '6px' },

  track_orientation_horizontal_size_large: { height: '7px' },

  track_orientation_vertical_size_small: { width: '5px' },

  track_orientation_vertical_size_regular: { width: '6px' },

  track_orientation_vertical_size_large: { width: '7px' },

  // Color
  // rail
  rail_color_default: { background: theme.methods.palette.color.value('default', 90) },

  rail_color_neutral: { background: theme.methods.palette.color.value('default', 90) },

  rail_color_primary: { background: theme.methods.palette.color.value('primary', 90) },

  rail_color_secondary: { background: theme.methods.palette.color.value('secondary', 90) },

  rail_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 90) },

  rail_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 90) },

  rail_color_info: { background: theme.methods.palette.color.value('info', 90) },

  rail_color_success: { background: theme.methods.palette.color.value('success', 90) },

  rail_color_warning: { background: theme.methods.palette.color.value('warning', 90) },

  rail_color_error: { background: theme.methods.palette.color.value('error', 90) },

  // track
  track_color_default: { background: theme.methods.palette.color.value('neutral', 0) },

  track_color_neutral: { background: theme.palette.color.neutral.main },

  track_color_primary: { background: theme.palette.color.primary.main },

  track_color_secondary: { background: theme.palette.color.secondary.main },

  track_color_tertiary: { background: theme.palette.color.tertiary.main },

  track_color_quaternary: { background: theme.palette.color.quaternary.main },

  track_color_info: { background: theme.palette.color.info.main },

  track_color_success: { background: theme.palette.color.success.main },

  track_color_warning: { background: theme.palette.color.warning.main },

  track_color_error: { background: theme.palette.color.error.main },

  // Tonal
  track_tonal_color_neutral: { background: theme.methods.palette.color.value('default', 70) },

  track_tonal_color_primary: { background: theme.methods.palette.color.value('primary', 70) },

  track_tonal_color_secondary: { background: theme.methods.palette.color.value('secondary', 70) },

  track_tonal_color_tertiary: { background: theme.methods.palette.color.value('tertiary', 70) },

  track_tonal_color_quaternary: { background: theme.methods.palette.color.value('quaternary', 70) },

  track_tonal_color_info: { background: theme.methods.palette.color.value('info', 70) },

  track_tonal_color_success: { background: theme.methods.palette.color.value('success', 70) },

  track_tonal_color_warning: { background: theme.methods.palette.color.value('warning', 70) },

  track_tonal_color_error: { background: theme.methods.palette.color.value('error', 70) },

  // iconButton
  iconButton_color_default: { color: [theme.palette.text.default.primary, '!important'] },

  iconButton_color_neutral: { color: [theme.palette.color.neutral.main, '!important'] },

  iconButton_color_primary: { color: [theme.palette.color.primary.main, '!important'] },

  iconButton_color_secondary: { color: [theme.palette.color.secondary.main, '!important'] },

  iconButton_color_tertiary: { color: [theme.palette.color.tertiary.main, '!important'] },

  iconButton_color_quaternary: { color: [theme.palette.color.quaternary.main, '!important'] },

  iconButton_color_info: { color: [theme.palette.color.info.main, '!important'] },

  iconButton_color_success: { color: [theme.palette.color.success.main, '!important'] },

  iconButton_color_warning: { color: [theme.palette.color.warning.main, '!important'] },

  iconButton_color_error: { color: [theme.palette.color.error.main, '!important'] },

  // Tonal
  iconButton_tonal_color_neutral: { color: [theme.methods.palette.color.value('default', 70), '!important'] },

  iconButton_tonal_color_primary: { color: [theme.methods.palette.color.value('primary', 70), '!important'] },

  iconButton_tonal_color_secondary: { color: [theme.methods.palette.color.value('secondary', 70), '!important'] },

  iconButton_tonal_color_tertiary: { color: [theme.methods.palette.color.value('tertiary', 70), '!important'] },

  iconButton_tonal_color_quaternary: { color: [theme.methods.palette.color.value('quaternary', 70), '!important'] },

  iconButton_tonal_color_info: { color: [theme.methods.palette.color.value('info', 70), '!important'] },

  iconButton_tonal_color_success: { color: [theme.methods.palette.color.value('success', 70), '!important'] },

  iconButton_tonal_color_warning: { color: [theme.methods.palette.color.value('warning', 70), '!important'] },

  iconButton_tonal_color_error: { color: [theme.methods.palette.color.value('error', 70), '!important'] },

  square: {
    borderRadius: '0px'
  },

  iconButton: {
    position: 'absolute'
  },

  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: `calc(${theme.shape.radius.unit / 8} * 0.5em)`
  },

  icon_size_small: {
    width: '16px',
    height: '16px',
  },

  icon_size_regular: {
    width: '20px',
    height: '20px',
  },

  icon_size_large: {
    width: '24px',
    height: '24px',
  },

  marks: {
    inset: 0,
    ...rail
  },

  mark: {
    position: 'absolute',
    width: '2px',
    height: '2px',
    borderRadius: '50%'
  },

  orientation_horizontal: {
    ...horizontal
  },

  orientation_vertical: {
    ...vertical
  },

  labels: {
    position: 'absolute',
    userSelect: 'none'
  },

  labels_orientation_horizontal: {
    width: '100%',
    left: 0,
    top: '15px'
  },

  labels_orientation_vertical: {
    height: '100%',
    top: 0,
    insetInlineStart: '21px'
  },

  label: {
    position: 'absolute',
    ...theme.typography.values.b2,
    transition: theme.methods.transitions.make('color', { duration: 'xs' }),
    color: theme.palette.text.default.secondary
  },

  label_orientation_horizontal: {
    transform: 'translateX(-50%)'
  },

  label_orientation_horizontal_rtl: {
    transform: 'translateX(50%)'
  },

  label_orientation_vertical: {
    transform: 'translateY(50%)'
  },

  label_active: {
    color: theme.palette.text.default.primary
  },

  readOnly: {
    cursor: 'default'
  },

  disabled: {
    cursor: 'default',
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'AmauiSlider' });


// To do

// multiple value y
// inverted

// focus and keyboard

// examples
// update rating

// wrap up

const Slider = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSlider?.props?.default }), [props_]);

  const {
    tonal,
    color: color_ = 'primary',
    size = 'regular',
    orientation = 'horizontal',
    value: value_,
    valueDefault,
    onChange,
    readOnly,
    marks,
    precision = 0.001,
    min = 0,
    max = 100,
    tooltip,
    labels,
    onlyMarks,
    makeLabelTooltip,
    noTrack,
    noButton,
    square,
    disabled,

    IconButtonProps = {},
    TooltipProps = {},
    Component = 'span',

    style,
    className,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || 0);
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLSpanElement>(),
    value: React.useRef<any>(),
    props: React.useRef<any>(),
    mouseDown: React.useRef<any>(),
    direction: React.useRef<any>()
  };

  refs.value.current = value;
  refs.props.current = props;
  refs.mouseDown.current = mouseDown;
  refs.direction.current = theme.direction;

  const { classes } = useStyle(props);

  let color = color_;

  if (disabled) color = 'default';

  const valueDecimals = (String(precision).includes('e-') ? +String(precision).split('e-')[1] : String(precision).split('.')[1]?.length) || 0;

  const valuePrecision = (valueMouse: number) => {
    let value__ = valueWithinRangePercentage(valueMouse * 100, min, max);

    if (refs.direction.current === 'rtl' && orientation === 'horizontal') value__ = (max + min) - value__;

    if (value__ <= min) return min;

    if (value__ >= max) return max;

    // previous value
    let previous = clamp(+(value__ - (value__ % precision)).toFixed(valueDecimals), min, max);

    if (value__ < 0) previous -= precision;

    if (onlyMarks && is('array', marks)) {
      const previousMark = marks.map(item => item.value).sort((a, b) => b - a).find(item => item <= value__);

      previous = previousMark !== undefined ? previousMark : min;
    }

    // next value
    let next = clamp(+(previous + precision).toFixed(valueDecimals), min, max);

    if (onlyMarks && is('array', marks)) {
      const nextMark = marks.map(item => item.value).sort((a, b) => a - b).find(item => item >= value__);

      next = nextMark !== undefined ? nextMark : max;
    }

    return value__ < previous + ((next - previous) / 2) ? previous : next;
  };

  React.useEffect(() => {
    const onMouseUp = () => {
      if (!disabled && !readOnly) setMouseDown(false);
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!refs.props.current.disabled && !refs.props.current.readOnly && refs.mouseDown.current) {
        const { clientX, clientY } = event;

        const rect = refs.root.current.getBoundingClientRect();

        const { width, height } = rect;

        // Value to the precision point value
        const value__ = valuePrecision(orientation === 'horizontal' ? (clientX - rect.x) / width : (1 - (clientY - rect.y) / height));

        if (!equalDeep(value__, refs.value.current)) {
          if (props.hasOwnProperty('value')) {
            if (is('function', refs.props.current.onChange)) refs.props.current.onChange(value__);
          }
          // Inner controlled value
          else setValue(value__);
        }
      }
    };

    window.document.addEventListener('mouseup', onMouseUp);
    window.document.addEventListener('touchend', onMouseUp, { passive: true });
    window.document.addEventListener('mousemove', onMouseMove);

    setInit(true);

    return () => {
      window.document.removeEventListener('mouseup', onMouseUp);
      window.document.removeEventListener('touchend', onMouseUp);
      window.document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  React.useEffect(() => {
    if (init && value_ !== value) setValue(value_);
  }, [value_]);

  const move = React.useCallback((x: number, y: number) => {
    if (!disabled && !readOnly) {
      const rect = refs.root.current.getBoundingClientRect();

      const { width, height } = rect;

      // Value to the precision point value
      const value__ = valuePrecision(orientation === 'horizontal' ? (x - rect.x) / width : (1 - (y - rect.y) / height));

      if (!equalDeep(value__, refs.value.current)) {
        if (props.hasOwnProperty('value')) {
          if (is('function', onChange)) onChange(value__);
        }
        // Inner controlled value
        else setValue(value__);
      }
    }
  }, [disabled, readOnly, onChange, value]);

  const onFocus = React.useCallback(() => {
    if (!disabled && !readOnly && !mouseDown) setFocus(true);
  }, [disabled, readOnly, mouseDown]);

  const onBlur = React.useCallback(() => {
    if (!disabled && !readOnly) setFocus(false);
  }, [disabled, readOnly]);

  const onMouseDown = React.useCallback((event: React.TouchEvent<any> | React.MouseEvent<any>) => {
    if (!disabled && !readOnly) {
      setMouseDown(true);

      const x = (event as React.MouseEvent<any>).clientX ? (event as React.MouseEvent<any>).clientX : (event as React.TouchEvent<any>).touches?.[0]?.clientX;

      const y = (event as React.MouseEvent<any>).clientY ? (event as React.MouseEvent<any>).clientY : (event as React.TouchEvent<any>).touches?.[0]?.clientY;

      move(x, y);
    }
  }, [disabled, readOnly]);

  const styles: any = {
    root: {},
    icon: {},
    iconButton: {},
    rail: {},
    track: {},
    markRail: {},
    markTrack: {}
  };

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!theme.palette.color[color] && color !== 'default') {
    styles.markRail.background = styles.rail.background = theme.methods.palette.color.value(undefined, 90, true, palette);

    styles.markTrack.background = styles.icon.background = styles.track.background = styles.iconButton.color = !tonal ? palette.main : theme.methods.palette.color.value(undefined, 70, true, palette);
  }

  const values = (is('array', value) ? value : [value]);

  const valueValue = (value__: any = values[0]) => {
    let valueNew = value__;

    if (value__ === min) valueNew = 0;

    else if (value__ === max) valueNew = 100;

    else valueNew = percentageWithinRange(value__, min, max);

    return valueNew;
  };

  const valueMark = (value__: any) => {
    if (value__ === min) return 0;

    if (value__ === max) return `calc(100% - 2px)`;

    return `calc(${valueValue(value__)}% - 1px)`;
  };

  const propInset = orientation === 'horizontal' ? 'insetInlineStart' : 'insetBlockEnd';

  const iconButtonStyles = (value__: number) => {
    const style = {};

    if (size === 'small') {
      style[propInset] = `calc(${valueValue(value__)}% - 15px)`;
    }

    if (size === 'regular') {
      style[propInset] = `calc(${valueValue(value__)}% - 20px)`;
    }

    if (size === 'large') {
      style[propInset] = `calc(${valueValue(value__)}% - 25px)`;
    }

    return style;
  };

  const propTrac = orientation === 'horizontal' ? 'width' : 'height';

  if (values.length === 1) styles.track[propTrac] = `${valueValue()}%`;
  else {
    const start = values[0];
    const end = values[values.length - 1];

    if (orientation === 'horizontal') {
      styles.track.insetInlineStart = `${valueValue(start)}%`;
      styles.track.insetInlineEnd = `${100 - valueValue(end)}%`;
    }

    if (orientation === 'vertical') {
      styles.track.insetBlockStart = `${100 - valueValue(end)}%`;
      styles.track.insetBlockEnd = `${valueValue(start)}%`;
    }
  }

  const marksValue = Math.ceil((max - min) / precision);

  let marks_ = [];

  if (!!marks) {
    if (is('array', marks)) marks_ = marks;
    else if (marksValue <= 1e3) {
      let markSum = min;
      let index = 1;

      marks_.push({ value: min, label: min });

      while (markSum <= max) {
        markSum = min + (precision * index++);

        if (markSum < max) marks_.push({ value: markSum, label: markSum });
      }

      marks_.push({ value: max, label: max });
    }
  }

  const labelMethod = is('function', makeLabelTooltip) ? makeLabelTooltip : (value__: number) => +(value__).toFixed();

  console.log(1, value, focus, hover);
  return (
    <Component
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      onTouchStart={onMouseDown}

      onMouseDown={onMouseDown}

      className={classNames([
        staticClassName('Slider', theme) && [
          'AmauiSlider-root',
          `AmauiSlider-orientation-${orientation}`,
          `AmauiSlider-color-${!classes[color] ? 'new' : color}`,
          tonal && `AmauiSlider-tonal`,
          square && `AmauiSlider-square`,
          readOnly && `AmauiSlider-readOnly`,
          disabled && `AmauiSlider-disabled`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        tonal && classes[`tonal_color_${color}`],
        square && classes.square,
        readOnly && classes.readOnly,
        disabled && classes.disabled
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      <span
        className={classNames([
          staticClassName('Slider', theme) && [
            'AmauiSlider-rail'
          ],

          classes.rail,
          classes[`orientation_${orientation}`],
          classes[`rail_orientation_${orientation}`],
          classes[`rail_color_${color}`],
          classes[`rail_orientation_${orientation}_size_${size}`]
        ])}

        style={styles.rail}
      />

      {!noTrack && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'AmauiSlider-track'
            ],

            classes.track,
            classes[`orientation_${orientation}`],
            classes[`track_orientation_${orientation}`],
            classes[`track_color_${color}`],
            tonal && classes[`track_tonal_color_${color}`],
            classes[`track_orientation_${orientation}_size_${size}`]
          ])}

          style={styles.track}
        />
      )}

      {!!marks_.length && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'AmauiSlider-marks'
            ],

            classes.marks,
            classes[`orientation_${orientation}`],
            classes[`track_size_${size}`]
          ])}
        >
          {marks_.map((item: any, index: number) => (
            <span
              key={index}

              className={classNames([
                staticClassName('Slider', theme) && [
                  'AmauiSlider-mark'
                ],

                classes.mark,
                item.value <= value ? classes[`rail_color_${color}`] : [
                  classes[`track_color_${color}`],
                  tonal && classes[`track_tonal_color_${color}`]
                ]
              ])}

              style={{
                ...(item.value <= value ? styles.markRail : styles.markTrack),

                [propInset]: valueMark(item.value)
              }}
            />
          ))}
        </span>
      )}

      {labels && !!marks_.length && (
        <span
          className={classNames([
            staticClassName('Slider', theme) && [
              'AmauiSlider-labels'
            ],

            classes.labels,
            classes[`labels_orientation_${orientation}`]
          ])}
        >
          {marks_.map((item: any, index: number) => (
            <span
              key={index}

              className={classNames([
                staticClassName('Slider', theme) && [
                  'AmauiSlider-label'
                ],

                classes.label,
                classes[`label_orientation_${orientation}`],
                theme.direction === 'rtl' && classes[`label_orientation_${orientation}_rtl`],
                item.value <= value && classes.label_active
              ])}

              style={{
                [propInset]: valueMark(item.value)
              }}
            >
              {item.label}
            </span>
          ))}
        </span>
      )}

      {!noButton && values.map((value__: number) => (
        <Tooltip
          key={value__}

          {...(tooltip === 'always' ? { open: true } : tooltip === undefined ? { open: false } : {})}

          label={labelMethod(value__)}

          position={orientation === 'horizontal' ? 'top' : theme.direction === 'ltr' ? 'left' : 'right'}

          alignment='center'

          arrow

          noMargin

          {...TooltipProps}
        >
          <IconButton
            size={size}

            color='inherit'

            onBlur={onBlur}

            onFocus={onFocus}

            className={classNames([
              staticClassName('Slider', theme) && [
                'AmauiSlider-iconButton'
              ],

              classes.iconButton,
              classes[`orientation_${orientation}`],
              !tonal && classes[`iconButton_color_${color}`],
              tonal && classes[`iconButton_tonal_color_${color}`],
            ])}

            style={iconButtonStyles(value__)}

            {...IconButton}
          >
            <span
              className={classNames([
                staticClassName('Slider', theme) && [
                  'AmauiSlider-icon'
                ],

                classes.icon,
                classes[`track_color_${color}`],
                tonal && classes[`track_tonal_color_${color}`],
                classes[`icon_size_${size}`]
              ])}

              style={styles.icon}
            />
          </IconButton>
        </Tooltip>
      ))}
    </Component>
  );
});

Slider.displayName = 'AmauiSlider';

export default Slider;
