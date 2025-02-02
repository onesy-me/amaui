import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialElectricCarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricCarW100'

      short_name='ElectricCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-412v80h-28v-300l83-236h450l83 236v300h-28v-80H200Zm12-248h536l-64-180H276l-64 180Zm-12 28v192-192Zm96.24 136q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm368 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM513-58l-194-98h128v-66l194 98H513v66ZM200-440h560v-192H200v192Z"/>
    </Icon>
  );
});

IconMaterialElectricCarW100.displayName = 'OnesyIconMaterialElectricCarW100';

export default IconMaterialElectricCarW100;
