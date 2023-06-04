import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConnectedTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvW100Filled'

      short_name='ConnectedTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.4 15.6h1.2q-.125-.45-.437-.762-.313-.313-.763-.438Zm3.9 0q.15 0 .25-.112.1-.113.075-.238-.125-1.575-1.213-2.663Q7.325 11.5 5.75 11.375q-.125-.025-.237.075-.113.1-.113.25 0 .125.1.238.1.112.25.137 1.275.125 2.163 1.012.887.888 1.012 2.163.025.15.125.25t.25.1Zm3.05 0q.15 0 .25-.1t.1-.25q-.125-2.825-2.125-4.825T5.75 8.3q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1q2.55.125 4.338 1.912Q11.875 12.7 12 15.25q0 .15.1.25t.25.1Zm-2.3 4.1q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvW100Filled.displayName = 'AmauiIconMaterialConnectedTvW100Filled';

export default IconMaterialConnectedTvW100Filled;
