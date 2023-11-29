import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-header-group'
  },

  sticky: {
    position: 'sticky',
    top: '0',
    zIndex: '11'
  }
}), { name: 'amaui-TableHead' });

export interface ITableHead extends ISurface {
  size?: TSize;

  sticky?: boolean;
}

const TableHead: React.FC<ITableHead> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableHead?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    sticky,

    Component = 'thead',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      role='rowgroup'

      Component={Component}

      className={classNames([
        staticClassName('TableHead', theme) && [
          `amaui-TableHead-root`
        ],

        className,
        classes.root,
        sticky && classes.sticky
      ])}

      {...other}
    >
      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          position: 'head'
        })
      ))}
    </Surface>
  );
});

TableHead.displayName = 'amaui-TableHead';

export default TableHead;
