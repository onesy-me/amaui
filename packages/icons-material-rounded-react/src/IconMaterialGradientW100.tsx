import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGradientW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientW100'

      short_name='Gradient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Zm-320 0v-80h80v80h-80Zm-48 268q-25 0-42.5-17.5T172-232v-496q0-25 17.5-42.5T232-788h496q25 0 42.5 17.5T788-728v496q0 25-17.5 42.5T728-172H232Zm48-28h80v-80h-80v80Zm160 0h80v-80h-80v80Zm320 0v-80 80Zm-560-80h80v-80h80v80h80v-80h80v80h80v-80h80v80h80v-80h-80v-80h80v-288q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v288h80v80h-80v80Zm32 80h-32v-560h32q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm528-240v80-80ZM600-280v80h80v-80h-80Z"/>
    </Icon>
  );
});

IconMaterialGradientW100.displayName = 'OnesyIconMaterialGradientW100';

export default IconMaterialGradientW100;
