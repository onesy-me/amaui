import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLayersClearW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LayersClearW100Filled'

      short_name='LayersClear'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M695-638q23 18 23 47.5T695-543l-84 65q-9 7-20.5 6.5T571-480L372-678q-10-10-9-23.5t12-21.5l68-53q17-13 37-13t37 13l178 138ZM800-98 582-316l-65 50q-17 13-37 13t-37-13L218-441q-5-4-5.5-10.5T217-463q4-3 9-3t9 3l225 174q9 7 20 7t20-7l61-48-69-69h28l-3 3q-17 12-37 12t-36-13L262-545q-23-17-22.5-45.5T262-636L84-814q-4-4-4.5-9.5T84-834q5-5 10-5t10 5l716 716q4 4 4.5 9.5T820-98q-5 5-10 5t-10-5Zm-57-365q5 5 4.5 11t-5.5 11l-64 50q-5 3-10 2.5t-9-4.5q-5-5-4-11t6-10l64-49q4-3 9-3t9 3Z"/>
    </Icon>
  );
});

IconMaterialLayersClearW100Filled.displayName = 'OnesyIconMaterialLayersClearW100Filled';

export default IconMaterialLayersClearW100Filled;
