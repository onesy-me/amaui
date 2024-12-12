import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckroomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomFilled'

      short_name='Checkroom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160q-17 0-28.5-11.5T80-200q0-10 4-18.5T96-232l344-258v-70q0-17 12-28.5t29-11.5q25 0 42-18t17-43q0-25-17.5-42T480-720q-25 0-42.5 17.5T420-660h-80q0-58 41-99t99-41q58 0 99 40.5t41 98.5q0 47-27.5 84T520-526v36l344 258q8 5 12 13.5t4 18.5q0 17-11.5 28.5T840-160H120Zm120-80h480L480-420 240-240Z"/>
    </Icon>
  );
});

IconMaterialCheckroomFilled.displayName = 'OnesyIconMaterialCheckroomFilled';

export default IconMaterialCheckroomFilled;
