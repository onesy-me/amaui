import React from 'react';
import LinkNext from 'next/link';

import Head from 'next/head';

import { Avatar, Divider, IconButton, Line, Link, List, ListItem, ListSubheader, MenuDesktop, NavigationDrawer, SpeedDial, SpeedDialItem, Surface, Switch, Tooltip, TopAppBar, Type, useMediaQuery, useScroll } from '@amaui/ui-react';
import { classNames, colors, style as styleMethod, useAmauiTheme } from '@amaui/style-react';
import AmauiStorage from '@amaui/storage';

import IconMaterialTempPreferencesCustomRounded from '@amaui/icons-material-react/IconMaterialTempPreferencesCustomRounded';
import IconMaterialLightModeRounded from '@amaui/icons-material-react/IconMaterialLightModeRounded';
import IconMaterialDarkModeRounded from '@amaui/icons-material-react/IconMaterialDarkModeRounded';
import IconMaterialFormatTextdirectionLToRRounded from '@amaui/icons-material-react/IconMaterialFormatTextdirectionLToRRounded';
import IconMaterialFormatTextdirectionRToLRounded from '@amaui/icons-material-react/IconMaterialFormatTextdirectionRToLRounded';
import IconMaterialAutoAwesomeRounded from '@amaui/icons-material-react/IconMaterialAutoAwesomeRounded';
import IconMaterialMenuRounded from '@amaui/icons-material-react/IconMaterialMenuRounded';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/IconMaterialPottedPlantRounded';

import Logo from '../../public/assets/svg/logo.svg';
import IconGithub from '../../public/assets/svg/github.svg';

import Home from '../components/pages/Home';
import Library from '../components/pages/Library';

import { images, libraries as all_libraries, themeImageSub } from '../utils';

const useStyle = styleMethod(theme => ({
  '@p': {
    body: {
      fontFamily: theme.typography.font_family.secondary,
      color: theme.palette.text.default.primary,
      backgroundColor: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.primary.secondary
    }
  },

  root: {
    minHeight: '100vh',
    background: 'transparent'
  },

  wrapper: {
    width: '100%'
  },

  wrapper_library: {
    marginInlineStart: '370px'
  },

  navigationDrawer: {
    '&.amaui-Modal-root': {
      position: 'fixed',
      top: 0,
      insetInlineStart: 0,
      height: '100vh',
      width: 370,
      zIndex: 1
    }
  },

  navigationDrawer_mobile: {
    '&.amaui-Modal-root': {
      zIndex: theme.z_index.tooltip + 2
    }
  },

  header: {
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)',

    '&.amaui-TopAppBar-root': {
      width: `calc(100% - 48px)`,
      maxWidth: theme.breakpoints.values.lg,
      padding: 0,
      background: 'transparent',
      borderRadius: theme.methods.shape.radius.value('xxl', 'px'),
      transition: [
        theme.methods.transitions.make(['transform', 'left'], { duration: 'rg' }),
        theme.methods.transitions.make(['background', 'max-width', 'box-shadow'], { duration: 'complex' })
      ].join(', '),
      zIndex: theme.z_index.tooltip + 1
    },

    '& .amaui-TopAppBar-wrapper': {
      height: 'unset',
      padding: '12px 24px'
    }
  },

  header_withNavigationDrawer: {
    left: 'calc(50% + 170px)',

    '&.amaui-TopAppBar-root': {
      width: `calc(100% - 370px)`,
    }
  },

  header_not_top: {
    '&.amaui-TopAppBar-root': {
      background: theme.methods.palette.color.colorToRgb(theme.palette.color.primary[theme.palette.light ? 99 : 10] as string, 0.97),
      maxWidth: theme.breakpoints.values.md,
      boxShadow: theme.shadows.values.default['2']
    }
  },

  header_down: {
    transform: 'translate(-50%, calc(-100% - 16px))'
  },

  logo: {
    height: '44px',
    width: 'auto',
    cursor: 'pointer',
    userSelect: 'none',

    '& path:nth-child(1)': {
      fill: theme.palette.light ? 'hsl(60deg 100% 49%)' : 'hsl(60deg 100% 15%)'
    }
  },

  icon: {
    width: 'auto',
    height: '24px',
    fill: 'currentColor'
  },

  main: {
    width: '100%',
    marginTop: '76px',
    flex: '1 1 auto',
    minHeight: '140vh',

    '& > *': {
      display: 'flex',
      width: '100%',
      flex: '1 1 auto'
    }
  },

  footer: {
    width: '100%',
    padding: '64px 24px 24px',
    flex: '0 0 auto'
  },

  image_option: {
    transition: theme.methods.transitions.make(['box-shadow', 'transform'], { duration: 'sm' }),

    '&:focus-visible': {
      boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
    },

    '&:active': {
      transform: 'scale(0.91)'
    },

    '&.amaui-Avatar-root': {
      cursor: 'pointer'
    }
  },

  image_option_selected: {
    boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
  }
}), { name: 'root' });

const ListItemNext = (props: any) => {
  const {
    href,

    children,

    ...other
  } = props;

  return (
    <LinkNext
      href={href}
    >
      {React.cloneElement(children, {
        ...other
      })}
    </LinkNext>
  );
};

function Root(props: any) {
  const theme = useAmauiTheme();

  const smallerScreen = useMediaQuery('(max-width: 1100px)');
  const mediumScreen = useMediaQuery('((max-width: 1540px)');
  const mobile = useMediaQuery('(pointer: coarse)');

  const scrollNotTop = useScroll({ offset: 1 });
  const scrollDown = useScroll({ direction: 'down', offset: smallerScreen ? 40 : mediumScreen ? 100 : 200 });

  const light = useMediaQuery('(prefers-color-scheme: light)');

  const [init, setInit] = React.useState(false);
  const [imageSelected, setImageSelected] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const refs = {
    storage: new AmauiStorage({ namespace: 'amaui-docs' }),
    imageSelected: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.imageSelected.current = imageSelected;

  const updateImageSelected = (value: string) => {
    setImageSelected(value);

    themeImageSub.emit(value);
  };

  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-color-scheme: dark)')?.matches) update('light', false);

    const imageSelected_ = refs.storage.get('image-selected');

    if (imageSelected_ !== null) {
      update('image', imageSelected_);
    }

    const direction = refs.storage.get('direction');

    if (direction !== null) update('direction', direction);

    const imageSub = themeImageSub.subscribe((value: string) => {
      if (value !== refs.imageSelected.current) setImageSelected(value);
    });

    // Clean up
    const elements = window.document.querySelectorAll('#amaui-initial-css');

    elements.forEach(element => element.remove());

    // Service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => console.log('Service worker registered: ', registration))
        .catch(error => console.log('Service worker registration failed: ', error));
    }

    setInit(true);

    return () => {
      imageSub.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (init) {
      update('light', light);
    }
  }, [light]);

  const update = async (version = 'light', value: any = true) => {
    let values_ = {};

    switch (version) {
      case 'light':
        theme.updateWithRerender({
          palette: {
            light: value
          }
        });

        refs.storage.add('light', value);

        break;

      case 'direction':
        window.document.body.dir = value ? 'ltr' : 'rtl';

        theme.updateWithRerender({
          direction: value ? 'ltr' : 'rtl'
        });

        refs.storage.add('direction', value);

        break;

      case 'image':
        switch (value) {
          case 'primary':
            values_ = {
              palette: {
                color: {
                  primary: {
                    light: colors.yellow[300],
                    main: colors.yellow[500],
                    dark: colors.yellow[700],
                  },
                  secondary: {
                    light: colors.lightgreen[300],
                    main: colors.lightgreen[500],
                    dark: colors.lightgreen[700],
                  },
                  tertiary: {
                    light: colors.amber[300],
                    main: colors.amber[500],
                    dark: colors.amber[700],
                  },
                  quaternary: {
                    light: colors.cyan[300],
                    main: colors.cyan[500],
                    dark: colors.cyan[700],
                  }
                }
              }
            };

            break;

          case 'image-green':
            await theme.image('/assets/image/image-green.jpg');

            break;

          case 'image-orange':
            await theme.image('/assets/image/image-orange.jpg');

            break;

          case 'image-pink':
            await theme.image('/assets/image/image-pink.jpg');

            break;

          default:
            break;
        }

        theme.updateWithRerender(values_);

        updateImageSelected(value);

        refs.storage.add('image-selected', value);

        break;

      default:
        break;
    }
  };

  const libraries = React.useMemo(() => {
    return all_libraries;
  }, []);

  const isLibrary = libraries.find(item => props.url?.indexOf(item.url) === 0);

  const Page = !isLibrary ? Home : Library;

  const withNavigationDrawer = !!(isLibrary) && !smallerScreen;

  const NavigationDrawerProps: any = {};

  if (isLibrary && smallerScreen) {
    NavigationDrawerProps.color = 'primary';
    NavigationDrawerProps.tonal = true;
  }

  return <>
    <Head>
      <title>amaui</title>

      <meta property='description' content='Make Modern Web &amp; Mobile Apps Quickly 100+ UI elements' />

      <meta property='og:description' content='Make Modern Web &amp; Mobile Apps Quickly 100+ UI elements' />

      {theme.palette.light ? <>
        <link rel='manifest' href='/assets/favicon/light/site.webmanifest' />
        <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/light/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/light/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/light/favicon-16x16.png' />
        <link rel='mask-icon' href='/assets/favicon/light/safari-pinned-tab.svg' color='#fafa00' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#fafa00' />
      </> :
        <>
          <link rel='manifest' href='/assets/favicon/dark/site.webmanifest' />
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/dark/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/dark/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/dark/favicon-16x16.png' />
          <link rel='mask-icon' href='/assets/favicon/dark/safari-pinned-tab.svg' color='#4d4c00' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#4d4c00' />
        </>}
    </Head>

    <Surface
      tonal

      color='primary'

      gap={0}

      direction='row'

      Component={Line}

      className={classNames([
        classes.root
      ])}
    >
      {isLibrary && (
        <NavigationDrawer
          open={smallerScreen ? open : true}

          openDefault={(isLibrary && !smallerScreen)}

          version={smallerScreen ? 'modal' : 'standard'}

          onClose={() => setOpen(false)}

          tonal={false}

          color='default'

          {...NavigationDrawerProps}

          className={classNames([
            smallerScreen ? classes.navigationDrawer_mobile : classes.navigationDrawer
          ])}
        >
          <List
            tonal={false}

            color='default'

            shapePosition='both'

            paddingHorizontal='both'

            {...NavigationDrawerProps}

            style={{ width: 340 }}
          >
            <ListSubheader>
              Mail
            </ListSubheader>

            <ListItem
              primary='Inbox'

              start={(
                <IconMaterialPottedPlantRounded />
              )}

              end={(
                <Type
                  version='l2'
                >
                  114
                </Type>
              )}

              button

              selected
            />

            <ListItem
              primary='Outbox'

              start={(
                <IconMaterialPottedPlantRounded />
              )}

              end={(
                <Type
                  version='l2'
                >
                  114
                </Type>
              )}

              button
            />

            <ListItem
              primary='Favourites'

              start={(
                <IconMaterialPottedPlantRounded />
              )}

              button
            />

            <ListItem
              primary='Trash'

              start={(
                <IconMaterialPottedPlantRounded />
              )}

              button
            />

            <Divider
              Component='li'

              padding

              color='inherit'
            />

            <ListItem
              primary='Label'

              button
            />

            <ListItem
              primary='Label 114'

              button
            />
          </List>
        </NavigationDrawer>
      )}

      <Line
        gap={0}

        direction='column'

        className={classNames([
          classes.wrapper,
          (isLibrary && !smallerScreen) && classes.wrapper_library
        ])}
      >
        {/* Header */}
        <TopAppBar
          start={[
            ...((smallerScreen && isLibrary) ? [(
              <IconButton
                color='inherit'

                onClick={() => setOpen(true)}

                style={{
                  marginInlineEnd: 16
                }}
              >
                <IconMaterialMenuRounded />
              </IconButton>
            )] : []),

            <LinkNext
              href='/'
            >
              <span>
                <Logo
                  className={classNames([
                    classes.logo
                  ])}
                />
              </span>
            </LinkNext>
          ]}

          end={[
            <MenuDesktop
              key={0}

              items={[
                {
                  label: 'Libraries',

                  value: 'libraries',

                  menu: (
                    <List
                      tonal

                      color='primary'

                      size='regular'

                      menu

                      style={{
                        maxHeight: 400,
                        overflowY: 'auto'
                      }}
                    >
                      {libraries.map((item: any, index: number) => {

                        return (
                          <ListItemNext
                            key={index}

                            href={item.url}

                            menuCloseOnClick
                          >
                            <ListItem
                              primary={item.name}

                              selected={item.url === props.url}

                              {...(item.version !== undefined ? {
                                ...(item.version === 'primary' ? {
                                  start: (
                                    <IconMaterialAutoAwesomeRounded
                                      color={item.version}

                                      size='small'
                                    />
                                  ),

                                  startAlign: 'center'
                                } : {
                                  start: (
                                    <IconMaterialAutoAwesomeRounded
                                      color={item.version}

                                      size='small'
                                    />
                                  ),

                                  startAlign: 'center'
                                })
                              } : undefined)}

                              button

                              style={{
                                minWidth: 247
                              }}
                            />
                          </ListItemNext>
                        );
                      })}
                    </List>
                  )
                }
              ]}

              AppendProps={{
                alignment: !mobile ? 'end' : 'center'
              }}
            />,

            <Tooltip
              key={1}

              label='amaui org'

              color='inverted'
            >
              <IconButton
                color='inherit'

                Component='a'

                href='https://github.com/amaui-org/amaui'

                target='_blank'
              >
                <IconGithub
                  className={classNames([
                    classes.icon
                  ])}
                />
              </IconButton>
            </Tooltip>
          ]}

          position='fixed'

          Component='header'

          className={classNames([
            classes.header,
            withNavigationDrawer && classes.header_withNavigationDrawer,
            scrollNotTop && classes.header_not_top,
            scrollDown && classes.header_down
          ])}
        />

        {/* Main */}
        <Line
          Component='main'

          className={classNames([
            classes.main
          ])}
        >
          <Page {...props} />
        </Line>

        {/* Footer */}
        <Line
          align='center'

          Component='footer'

          className={classNames([
            classes.footer
          ])}
        >
          <Line
            gap={1}

            direction='row'

            align='center'

            justify='center'

            wrap='wrap'

            style={{
              marginBottom: 24
            }}
          >
            <Line
              gap={0.5}

              direction='row'

              align='center'

              justify='center'
            >
              <Type
                version='m3'
              >
                100% Open source,
              </Type>

              <Link
                version='m3'

                href='https://github.com/amaui-org/amaui/blob/main/LICENSE'

                target='_blank'

                color={theme.palette.color.secondary[50]}
              >
                MIT license
              </Link>
            </Line>

            <Type>·</Type>

            <Type
              version='m3'
            >
              Modern code
            </Type>

            <Type>·</Type>

            <Type
              version='m3'
            >
              Alpha version
            </Type>

            <Type>·</Type>

            <Type
              version='m3'
            >
              Browser & Nodejs
            </Type>
          </Line>

          <Type
            version='b3'

            priority='secondary'

            style={{
              textAlign: 'center'
            }}
          >
            Disclaimer: This is an independent open source project, and is not in any way affiliated with Alphabet Inc., Google Inc. or any of their projects.
          </Type>

          <Type
            version='b3'
          >
            Copyright © 2022 Lazar Eric
          </Type>

          <Line
            gap={0.5}

            direction='row'
          >
            <Type
              version='b3'

              priority='secondary'
            >
              Made with
            </Type>

            <Type
              version='b3'
            >
              💛
            </Type>
          </Line>
        </Line>
      </Line>

      {/* SpeedDial */}
      <SpeedDial
        direction='bottom'

        alignment='end'

        Icon={IconMaterialTempPreferencesCustomRounded}
      >
        {[...images].reverse().map((item: any, index: number) => (
          <SpeedDialItem
            key={index}

            render={({ onBlur, onFocus, TooltipProps, ...otherItem }: any) => (
              <Tooltip
                label={item.label}

                portal={false}

                nowrap

                {...TooltipProps}
              >
                <Avatar
                  {...otherItem}

                  tonal={false}

                  {...(item.color ? {
                    color: item.color
                  } : {
                    image: item.image,

                    alt: item.alt
                  })}

                  onBlur={onBlur}

                  onFocus={onFocus}

                  onClick={() => update('image', item.version)}

                  className={classNames([
                    otherItem?.className,
                    classes.image_option,
                    refs.imageSelected.current === item.version && classes.image_option_selected
                  ])}
                />
              </Tooltip>
            )}
          />
        ))}

        <SpeedDialItem
          render={({ onBlur, onFocus, TooltipProps, ...otherItem }: any) => (
            <Tooltip
              label={theme.direction === 'ltr' ? 'Left to right' : 'Right to left'}

              portal={false}

              nowrap

              {...TooltipProps}
            >
              <Switch
                {...otherItem}

                version='text'

                onBlur={onBlur}

                onFocus={onFocus}

                color='primary'

                OnIcon={<IconMaterialFormatTextdirectionLToRRounded />}

                OffIcon={<IconMaterialFormatTextdirectionRToLRounded />}

                checked={theme.direction === 'ltr'}

                onChange={(value: boolean) => update('direction', value)}
              />
            </Tooltip>
          )}
        />

        <SpeedDialItem
          render={({ onBlur, onFocus, TooltipProps, ...otherItem }: any) => (
            <Tooltip
              label={theme.palette.light ? 'Light theme' : 'Dark theme'}

              portal={false}

              nowrap

              {...TooltipProps}
            >
              <Switch
                {...otherItem}

                onBlur={onBlur}

                onFocus={onFocus}

                color='primary'

                OnIcon={<IconMaterialLightModeRounded />}

                OffIcon={<IconMaterialDarkModeRounded />}

                checked={theme.palette.light}

                onChange={(value: boolean) => update('light', value)}
              />
            </Tooltip>
          )}
        />
      </SpeedDial>
    </Surface>
  </>;
}

export default Root;
