import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartMinusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartMinusW100'

      short_name='HeartMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-501Zm0 311-22-20q-97-89-160.5-152t-100-110.5Q121-520 106.5-558T92-634q0-71 48.5-119.5T260-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q67 0 118 47t51 120q0 19-4.5 39.5T771-554h-31q10-23 14.5-43.5T759-636q0-69-47-103.5T620-774q-48 0-88.5 27.5T454-660h-28q-38-60-78-87t-88-27q-59 0-99.5 40T120-634q0 34 14 69t50 80.5q36 45.5 98 107T440-228q32-29 60-55t52-49l3 3 7 7 7 7 3 3q-24 23-51.5 48T462-210l-22 20Zm146-236v-28h268v28H586Z"/>
    </Icon>
  );
});

IconMaterialHeartMinusW100.displayName = 'OnesyIconMaterialHeartMinusW100';

export default IconMaterialHeartMinusW100;
