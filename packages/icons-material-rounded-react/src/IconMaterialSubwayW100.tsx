import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubwayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubwayW100'

      short_name='Subway'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-192v-414q0-66 36.5-117t99.5-77q47-18 104-23t108-5q51 0 108 5t104 23q63 26 99.5 77T828-606v414q0 25-17.5 42.5T768-132H192q-25 0-42.5-17.5T132-192Zm168-236v-172h360v172H300Zm298 120q-13 0-21.5-8.5T568-338q0-13 8.5-21.5T598-368q13 0 21.5 8.5T628-338q0 13-8.5 21.5T598-308Zm-236 0q-13 0-21.5-8.5T332-338q0-13 8.5-21.5T362-368q13 0 21.5 8.5T392-338q0 13-8.5 21.5T362-308ZM192-160h576q14 0 23-9t9-23v-414q0-60-29.5-102.5T682-774q-44-17-97.5-21.5T480-800q-51 0-104.5 4.5T278-774q-59 23-88.5 65.5T160-606v414q0 14 9 23t23 9Zm214-68h148l55 62q2 3 5 4.5t7 1.5q11 0 15.5-9.5T634-187l-38-43q45-6 68.5-35.5T688-340v-260q0-51-54-70.5T480-690q-91 0-149.5 19.5T272-600v260q0 45 23.5 75t68.5 35l-38 43q-7 8-2.5 17.5T339-160q4 0 7-2t5-4l55-62Zm-214 68q-14 0-23-9t-9-23v-414q0-60 29.5-102.5T278-774q44-17 97.5-21.5T480-800q51 0 104.5 4.5T682-774q59 23 88.5 65.5T800-606v414q0 14-9 23t-23 9H192Z"/>
    </Icon>
  );
});

IconMaterialSubwayW100.displayName = 'OnesyIconMaterialSubwayW100';

export default IconMaterialSubwayW100;
