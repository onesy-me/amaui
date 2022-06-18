import React from 'react';

import { merge } from '@amaui/utils';
import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject } from '@amaui/style';

import AmauiStyleContext from './AmauiStyleContext';

function makeAmauiStyle(element?: Element) {
  const amauiStyle = new AmauiStyle(element);

  // Add all the plugins
  amauiStyle.plugins.add = [
    makeClassName,
    unit,
    rtl,
    sort,
    valueObject
  ];

  return amauiStyle;
}

export default function AmauiStyleProvider(props) {
  const { children, value: value_, ...other } = props;

  const ref = React.useRef();

  const [value, setValue] = React.useState(() => {
    if (value_ === undefined || !(value_ instanceof AmauiStyle)) return makeAmauiStyle();

    return value_ as AmauiStyle;
  });
  const setId = React.useState(undefined)[1];

  React.useEffect(() => {
    if (ref.current) {
      value.element = ref.current;

      // Init
      value.init();

      setId(value.hash);
    }
  }, []);

  const update = (updateValue: any, override = false) => {
    if (updateValue !== undefined) {
      const valueNew = override ? updateValue : merge(updateValue, value);

      setValue(valueNew);

      return valueNew;
    }
  };

  return (
    <AmauiStyleContext.Provider value={[value, update]} >
      <div ref={ref} {...other}>
        {children}
      </div>
    </AmauiStyleContext.Provider>
  );
}
