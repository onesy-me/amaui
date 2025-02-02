import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNoFoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFoodFilled'

      short_name='NoFood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M791-57 487-360H89q-19 0-31.5-14.5T49-408q10-51 39-87.5t69-60q40-23.5 87.5-34T340-600q5 0 11 .5t11 .5v113L55-792q-12-12-12-28.5T55-849q12-12 28.5-12t28.5 12l736 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57ZM80-200q-17 0-28.5-11.5T40-240q0-17 11.5-28.5T80-280h520q17 0 28.5 11.5T640-240q0 17-11.5 28.5T600-200H80Zm0 160q-17 0-28.5-11.5T40-80q0-17 11.5-28.5T80-120h520q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H80Zm767-220q-11 4-22 2t-20-11L478-596q-10-10-15.5-21.5T455-643l-9-72q-2-18 9.5-31.5T485-760h155v-120q0-17 11.5-28.5T680-920q17 0 28.5 11.5T720-880v120h156q18 0 30 13t10 31l-43 422q-2 13-8.5 21.5T847-260Z"/>
    </Icon>
  );
});

IconMaterialNoFoodFilled.displayName = 'OnesyIconMaterialNoFoodFilled';

export default IconMaterialNoFoodFilled;
