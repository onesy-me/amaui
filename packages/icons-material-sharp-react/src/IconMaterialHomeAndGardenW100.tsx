import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeAndGardenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGardenW100'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-384l-103 76-17-22 388-286 389 286-17 22-372-273-240 177v376h143v28H212ZM700-97q-46 32-87 31.5T539-99q-33-33-33.5-74.5T537-260q-32-46-31.5-87t33.5-74q33-33 74.5-33.5T700-423q46-32 87-31.5t74 33.5q33 33 33.5 74.5T863-260q32 46 31.5 87T861-99q-33 33-74.5 33.5T700-97Zm0-34 31 21q26 18 57 15.5t53-24.5q22-22 25-53t-15-57l-22-31 21-31q18-26 15.5-57T841-401q-22-22-53-25t-57 15l-31 22-31-21q-26-18-57-15.5T559-401q-22 22-25 53t15 57l22 31-21 31q-18 26-15.5 57t24.5 53q22 22 53 25t57-15l31-22Zm0-103q11 0 18.5-7.5T726-260q0-11-7.5-18.5T700-286q-11 0-18.5 7.5T674-260q0 11 7.5 18.5T700-234ZM480-503Zm220 243Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenW100.displayName = 'OnesyIconMaterialHomeAndGardenW100';

export default IconMaterialHomeAndGardenW100;
