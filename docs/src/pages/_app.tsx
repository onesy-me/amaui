import type { AppProps } from 'next/app';

import { Widgets, ScreenCapture, Timer, Countdown, Watch, Reset } from '@amaui/ui-react';
import { AmauiStyleProvider, AmauiThemeProvider, valueObject, prefix, rtl, unit, makeClassName, useAmauiStyle } from '@amaui/style-react';

import IconMaterialTimerRounded from '@amaui/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/build/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@amaui/icons-material-react/build/IconMaterialAvTimerRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightAnalogRounded';

const FONT_FAMILY = {
  primary: ['Montserrat', 'Helvetica', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'].join(', '),
  secondary: ['Lato', 'Helvetica', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'].join(', '),
  tertiary: ['Roboto Mono', 'monospace'].join(', ')
};

const widgets = [
  {
    label: 'Regular Clock',
    Icon: IconMaterialNestClockFarsightDigitalRounded,
    element: <Watch />
  },
  {
    label: 'Modern Clock',
    Icon: IconMaterialNestClockFarsightAnalogRounded,
    element: <Watch version='minimal' size='small' />
  },
  // {
  //   label: 'Weather',
  //   Icon: IconMaterialWeatherRounded,
  //   element: <Weather temperature={14} weather='clear' />
  // },
  {
    label: 'Screen Capture',
    Icon: IconMaterialVideocamRounded,
    move: false,
    element: <ScreenCapture />
  },
  {
    label: 'Timer',
    Icon: IconMaterialTimerRounded,
    element: <Timer />
  },
  {
    label: 'Countdown',
    Icon: IconMaterialAvTimerRounded,
    element: <Countdown />
  }
];

export default function App({ Component, pageProps }: AppProps) {
  const amauiStyle = useAmauiStyle();

  amauiStyle.plugins.add = [
    unit,
    prefix,
    rtl,
    valueObject,
    {
      method: makeClassName,
      arguments: [
        {
          production: ['prod', 'production'].includes(process.env.NODE_ENV)
        }
      ]
    }
  ];

  const valueAmauiTheme: any = {
    typography: {
      font_family: {
        primary: FONT_FAMILY.primary,
        secondary: FONT_FAMILY.secondary,
        tertiary: FONT_FAMILY.tertiary
      },

      values: {
        d1: { fontFamily: FONT_FAMILY.primary },

        d2: { fontFamily: FONT_FAMILY.primary },

        d3: { fontFamily: FONT_FAMILY.primary },

        h1: { fontFamily: FONT_FAMILY.primary },

        h2: { fontFamily: FONT_FAMILY.primary },

        h3: { fontFamily: FONT_FAMILY.primary },

        t1: { fontFamily: FONT_FAMILY.primary },

        t2: { fontFamily: FONT_FAMILY.primary },

        t3: { fontFamily: FONT_FAMILY.primary },

        l1: {
          fontFamily: FONT_FAMILY.secondary,
          fontWeight: 700
        },

        l2: {
          fontFamily: FONT_FAMILY.secondary,
          fontWeight: 700
        },

        l3: {
          fontFamily: FONT_FAMILY.secondary,
          fontWeight: 700
        },

        b1: { fontFamily: FONT_FAMILY.secondary },

        b2: { fontFamily: FONT_FAMILY.secondary },

        b3: { fontFamily: FONT_FAMILY.secondary },

        m1: { fontFamily: FONT_FAMILY.tertiary },

        m2: { fontFamily: FONT_FAMILY.tertiary },

        m3: { fontFamily: FONT_FAMILY.tertiary }
      }
    }
  };

  return (
    <AmauiStyleProvider
      value={amauiStyle}
    >
      <AmauiThemeProvider
        value={valueAmauiTheme}
      >
        <Widgets
          widgets={widgets}
        >
          <Reset />

          <Component {...pageProps} />
        </Widgets>
      </AmauiThemeProvider>
    </AmauiStyleProvider>
  )
}
