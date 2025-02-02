import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastFilled'

      short_name='Cast'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-240q0 33-23.5 56.5T800-160H633q-14 0-23.5-10.5T599-195q-6-95-43.5-177.5t-98-146.5q-60.5-64-141-105T143-676q-26-3-44.5-20.5T80-740q0-26 18.5-43t44.5-17h657q33 0 56.5 23.5T880-720v480Zm-560 80q-16 0-28-9.5T277-195q-11-63-56.5-107T112-357q-15-2-23.5-14.5T80-400q0-17 11-28.5t26-9.5q94 12 160.5 79T357-198q2 16-9 27t-28 11Zm160 0q-17 0-28.5-11T438-199q-14-128-104.5-217T115-518q-16-2-25.5-14T80-560q0-17 10.5-29t25.5-10q161 13 274 125t128 273q2 17-9.5 29T480-160Zm-350 0q-21 0-35.5-14.5T80-210q0-21 14.5-35.5T130-260q21 0 35.5 14.5T180-210q0 21-14.5 35.5T130-160Z"/>
    </Icon>
  );
});

IconMaterialCastFilled.displayName = 'OnesyIconMaterialCastFilled';

export default IconMaterialCastFilled;
