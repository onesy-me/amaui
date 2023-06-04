import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCasinoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CasinoW100Filled'

      short_name='Casino'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.25 16.5q.325 0 .538-.225Q9 16.05 9 15.75q0-.325-.212-.538Q8.575 15 8.25 15q-.3 0-.525.212-.225.213-.225.538 0 .3.225.525.225.225.525.225Zm0-7.5q.325 0 .538-.225Q9 8.55 9 8.25q0-.325-.212-.537Q8.575 7.5 8.25 7.5q-.3 0-.525.213-.225.212-.225.537 0 .3.225.525Q7.95 9 8.25 9ZM12 12.75q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.538-.213-.212-.538-.212-.3 0-.525.212-.225.213-.225.538 0 .3.225.525.225.225.525.225Zm3.75 3.75q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.538Q16.075 15 15.75 15q-.3 0-.525.212-.225.213-.225.538 0 .3.225.525.225.225.525.225Zm0-7.5q.325 0 .538-.225.212-.225.212-.525 0-.325-.212-.537-.213-.213-.538-.213-.3 0-.525.213Q15 7.925 15 8.25q0 .3.225.525.225.225.525.225ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialCasinoW100Filled.displayName = 'AmauiIconMaterialCasinoW100Filled';

export default IconMaterialCasinoW100Filled;
