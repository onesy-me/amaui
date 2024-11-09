import React from 'react';

import { capitalize, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import { add, AmauiDate, endOf, format, remove, set, startOf } from '@amaui/date';

import DayElement from '../Day';
import WeekElement from '../Week';
import CalendarMonthElement from '../CalendarMonth';
import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import TooltipElement from '../Tooltip';
import TypeElement from '../Type';
import SelectElement from '../Select';
import ButtonElement from '../Button';
import IconElement from '../Icon';
import { ICalendar } from '../Calendar/Calendar';
import { staticClassName } from '../utils';

const IconMaterialArrowBackIosNew = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowBackIosNew'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.125 21.1 6.7 12.7q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862 0 .513-.375.888t-.875.375q-.5 0-.875-.375Z" />
    </IconElement>
  );
});

const IconMaterialArrowForwardIos = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowForwardIos'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 21.1q-.375-.375-.375-.888 0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375.512 0 .887.375l8.4 8.425q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35-.513 0-.888-.375Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    padding: '16px',
    color: theme.methods.palette.color.value('primary', 10),
    background: theme.palette.background.default.primary
  },

  main: {
    paddingTop: '4px',
    overflow: 'auto hidden'
  },

  aside: {

  },

  month: {
    position: 'relative',
    width: 'auto',
    minWidth: '100%'
  },

  monthDay: {
    width: '32px',
    height: '32px',
    marginTop: '4px',
    borderRadius: '50%'
  },

  today: {
    background: theme.palette.color.primary[40],
    color: '#fff'
  },

  contentItemsMonth: {
    position: 'relative',
    padding: '0px 4px 8px',
    height: '100px',
    overflow: 'hidden auto'
  },

  calendarMonth: {
    '&.amaui-CalendarMonth-root': {
      width: '100%',
      height: '100%',
      minHeight: '0',
      flex: '0 0 auto',
      minWidth: 'unset',
      overflow: 'unset',
      transition: theme.methods.transitions.make('opacity')
    },

    '& .amaui-CalendarMonth-weeks': {
      position: 'relative',
      top: '0',
      width: 'calc(100% - 2px)',
      height: 'auto',
      marginLeft: '1px',
      gap: '0'
    },

    '& .amaui-CalendarMonth-week': {
      flex: '1 1 auto'
    },

    '& .amaui-CalendarMonth-day': {
      height: 'unset',
      minWidth: '170px',
      minHeight: '100px',
      marginTop: '-1px',
      marginLeft: '-1px',
      border: `1px solid ${theme.palette.light ? '#dadada' : '#575757'}`
    },

    '& .amaui-CalendarMonth-day-name': {
      minWidth: '170px'
    },

    '& .amaui-CalendarMonth-day-out': {
      zIndex: '-1px'
    }
  },

  dayWrapper: {
    height: '100%'
  }
}), { name: 'amaui-CalendarViews' });

export type ICalendarViewsView = 'day' | 'week' | 'month';

export interface ICalendarViews extends ICalendar {
  viewDefault?: ICalendarViewsView;

  dateDefault?: AmauiDate;

  times?: any;

  views?: ICalendarViewsView[];

  render?: (date: AmauiDate, view: ICalendarViewsView) => any;

  onTimeClick?: (date: AmauiDate, view: ICalendarViewsView) => any;

  onChangeView?: (view: ICalendarViewsView) => any;

  onChangeDate?: (value: AmauiDate) => any;

  startLeft?: any;

  endLeft?: any;

  startRight?: any;

  endRight?: any;

  IconPrevious?: any;

  IconNext?: any;

  WeekProps?: any;

  DayProps?: any;

  CalendarMonthProps?: any;
}

const CalendarViews: React.FC<ICalendarViews> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCalendarViews?.props?.default, ...props_ }), [props_]);

  const CalendarMonth = React.useMemo(() => theme?.elements?.CalendarMonth || CalendarMonthElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const Week = React.useMemo(() => theme?.elements?.Week || WeekElement, [theme]);

  const Day = React.useMemo(() => theme?.elements?.Day || DayElement, [theme]);

  const {
    viewDefault,

    dateDefault,

    times: timesProps,

    views: viewsProps = ['month', 'week', 'day'],

    render,

    onTimeClick,

    onChangeView: onChangeViewProps,

    onChangeDate: onChangeDateProps,

    startLeft,

    endLeft,

    startRight,

    endRight,

    IconPrevious = IconMaterialArrowBackIosNew,

    IconNext = IconMaterialArrowForwardIos,

    WeekProps,

    DayProps,

    CalendarMonthProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const [now, setNow] = React.useState(new AmauiDate());
  const [date, setDate] = React.useState(dateDefault || new AmauiDate());
  const [view, setView] = React.useState<ICalendarViewsView>(viewDefault || 'month');

  const refs = {
    interval: React.useRef<any>()
  };

  React.useEffect(() => {
    // 1 minute
    refs.interval.current = setInterval(() => {
      setNow(new AmauiDate());
    }, 60 * 1e3);

    return () => {
      clearInterval(refs.interval.current);
    };
  }, []);

  const hours = React.useMemo(() => {
    return Array.from({ length: 24 }).map((item, index) => set(index, 'hour', date));
  }, [date]);

  const days = React.useMemo(() => {
    const weekStart = set(4, 'hour', startOf(date, 'week'));

    return Array.from({ length: 7 }).map((item, index) => add(index, 'day', weekStart));
  }, [date]);

  const viewOptions = React.useMemo(() => {
    return viewsProps?.map(item => ({
      name: capitalize(item),
      value: item
    }));
  }, [viewsProps]);

  const formattedDate = React.useMemo(() => {
    if (view === 'day') return format(date, `MMMM DD, YYYY`);

    if (view === 'week') return `${format(startOf(date, 'week'), `MMM DD, YYYY`)} – ${format(endOf(date, 'week'), `MMM DD, YYYY`)}`;

    if (view === 'month') return format(date, `MMMM YYYY`);
  }, [view, date]);

  const onChangeView = React.useCallback((valueNew: any) => {
    setView(valueNew);

    if (is('function', onChangeViewProps)) onChangeViewProps(valueNew);
  }, [onChangeViewProps]);

  const onToday = React.useCallback(() => {
    const valueNew = new AmauiDate();

    setDate(valueNew);

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [onChangeDateProps]);

  const onPrevious = React.useCallback(() => {
    let valueNew = new AmauiDate();

    setDate(previous => {
      valueNew = remove(1, view, previous);

      return valueNew;
    });

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [view, onChangeDateProps]);

  const onNext = React.useCallback(() => {
    let valueNew = new AmauiDate();

    setDate(previous => {
      valueNew = add(1, view, previous);

      return valueNew;
    });

    if (is('function', onChangeDateProps)) onChangeDateProps(valueNew);
  }, [view, onChangeDateProps]);

  const renderDay = React.useCallback((valueCalendarMonth: AmauiDate, propsDay: any, day: any, outside: boolean) => {

    return (
      <Line
        gap={0.5}

        direction='column'

        align='center'

        flex

        fullWidth

        className={classes.dayWrapper}
      >
        <Line
          direction='row'

          justify='center'

          align='center'

          fullWidth

          className={classNames([
            classes.monthDay,
            day.today && classes.today
          ])}
        >
          <Type
            version='b2'
          >
            {format(valueCalendarMonth, 'D')}
          </Type>
        </Line>

        <Line
          gap={0.5}

          flex

          fullWidth

          className={classes.contentItemsMonth}
        >
          {render && render(valueCalendarMonth, view)}
        </Line>
      </Line>
    );
  }, [render, view]);

  const renderDayName = React.useCallback((order: number) => {
    const values: any = {
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
      7: 'Sun'
    };

    return values[order];
  }, []);

  const ui: any = {
    month: <>
      <Line
        gap={0}

        className={classes.month}
      >
        <CalendarMonth
          value={now as any}

          calendar={date as any}

          renderDay={renderDay as any}

          renderDayName={renderDayName}

          size='large'

          dayNamesFull

          noTransition

          outside={false}

          DayNameProps={{
            version: 'l1',
            weight: 200
          }}

          {...CalendarMonthProps}

          className={classNames([
            CalendarMonthProps?.className,
            classes.calendarMonth
          ])}
        />
      </Line>
    </>,

    week: (
      <Week
        date={date}

        times={timesProps}

        {...WeekProps}
      />
    ),

    day: (
      <Day
        date={date}

        times={timesProps}

        {...DayProps}
      />
    )
  };

  const iconProps: any = {
    size: 'regular'
  };

  const iconButtonProps: any = {
    size: 'regular'
  };

  return (
    <Line
      ref={ref}

      flex

      fullWidth

      className={classNames([
        staticClassName('CalendarViews', theme) && [
          'amaui-CalendarViews-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={2}

        direction='row'

        wrap='wrap'

        justify='space-between'

        align='center'

        fullWidth
      >
        <Line
          gap={1.5}

          direction='row'

          wrap='wrap'

          align='center'

          className={classes.aside}
        >
          {startLeft}

          <Button
            color='inherit'

            version='outlined'

            size='small'

            onClick={onToday}

            selected={now.days === date.days}
          >
            Today
          </Button>

          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <Tooltip
              name={`Previous ${view}`}
            >
              <IconButton
                onClick={onPrevious}

                {...iconButtonProps}
              >
                <IconPrevious
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>

            <Tooltip
              name={`Next ${view}`}
            >
              <IconButton
                onClick={onNext}

                {...iconButtonProps}
              >
                <IconNext
                  {...iconProps}
                />
              </IconButton>
            </Tooltip>
          </Line>

          <Type
            version='h2'

            weight={500}

            whiteSpace='nowrap'
          >
            {formattedDate}
          </Type>

          {endLeft}
        </Line>

        <Line
          gap={1.5}

          direction='row'

          align='center'

          className={classes.aside}
        >
          {startRight}

          <Select
            name='View'

            value={view}

            onChange={onChangeView}

            options={viewOptions}

            size='small'

            MenuProps={{
              portal: true,
              size: 'regular'
            }}

            style={{
              minWidth: 140
            }}
          />

          {endRight}
        </Line>
      </Line>

      <Line
        flex

        fullWidth

        className={classes.main}
      >
        {ui[view]}
      </Line>
    </Line>
  );
});

CalendarViews.displayName = 'amaui-CalendarViews';

export default CalendarViews;
