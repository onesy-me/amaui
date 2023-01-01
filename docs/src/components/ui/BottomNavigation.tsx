import { useRouter } from 'next/router';

import { classNames, style } from '@amaui/style-react';
import { Interaction, Line, Surface, Type } from '@amaui/ui-react';

import IconMaterialWestRounded from '@amaui/icons-material-react/IconMaterialWestRounded';
import IconMaterialEastRounded from '@amaui/icons-material-react/IconMaterialEastRounded';

const useStyle = style(theme => ({
  root: {
    marginTop: 100,
    width: '100%'
  },

  item: {
    position: 'relative',
    cursor: 'pointer',
    flex: '1 1 auto',
    padding: 24,
    borderRadius: 32,
    width: '100%',
    transition: theme.methods.transitions.make('box-shadow'),

    '&:focus-visible': {
      boxShadow: `0px 0px 0px 1px ${theme.palette.text.default.primary}`
    }
  },

  [`@media only screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
    $item: {
      maxWidth: '50%'
    }
  },

  itemPrevious: {
    textAlign: 'start'
  },

  itemNext: {
    textAlign: 'end'
  }
}), { name: 'BottomNavigation' });

export default function BottomNavigation(props: any) {
  const { classes } = useStyle();
  const router = useRouter();

  const {
    previous,
    next
  } = props;

  return (
    <Line
      gap={1}

      direction={{
        xs: 'column',
        sm: 'row',
        md: 'row',
        lg: 'row',
        xl: 'row'
      }}

      align='unset'

      justify='center'

      className={classNames([
        classes.root
      ])}
    >
      {previous && (
        <Surface
          gap={0.5}

          version='filled'

          color='secondary'

          tonal

          onClick={() => router.push(previous.to)}

          Component={Line}

          AdditionalProps={{
            Component: 'button'
          }}

          direction='column'

          align='flex-start'

          justify='center'

          className={classNames([
            classes.item,
            classes.itemPrevious
          ])}
        >
          <Interaction />

          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <IconMaterialWestRounded size='small' />

            <Type
              version='b2'
            >
              Previous
            </Type>
          </Line>

          <Type
            version='t1'
          >
            {previous.label}
          </Type>
        </Surface>
      )}

      {next && (
        <Surface
          gap={0.5}

          version='filled'

          color='secondary'

          tonal

          onClick={() => router.push(next.to)}

          Component={Line}

          AdditionalProps={{
            Component: 'button'
          }}

          direction='column'

          align='flex-end'

          justify='center'

          className={classNames([
            classes.item,
            classes.itemNext
          ])}
        >
          <Interaction />

          <Line
            gap={1}

            direction='row'

            align='center'
          >
            <Type
              version='b2'
            >
              Up next
            </Type>

            <IconMaterialEastRounded size='small' />
          </Line>

          <Type
            version='t1'
          >
            {next.label}
          </Type>
        </Surface>
      )}
    </Line>
  );
}
