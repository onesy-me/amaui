import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseFilled'

      short_name='TabClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 816q-33 0-56.5-23.5T240 736V256q0-33 23.5-56.5T320 176h480q33 0 56.5 23.5T880 256v480q0 33-23.5 56.5T800 816H320ZM160 976q-33 0-56.5-23.5T80 896V376q0-17 11.5-28.5T120 336q17 0 28.5 11.5T160 376v520h520q17 0 28.5 11.5T720 936q0 17-11.5 28.5T680 976H160Zm344-368 56-56 56 56q11 11 28 11t28-11q11-11 11-28t-11-28l-56-56 56-56q11-11 11-28t-11-28q-11-11-28-11t-28 11l-56 56-56-56q-11-11-28-11t-28 11q-11 11-11 28t11 28l56 56-56 56q-11 11-11 28t11 28q11 11 28 11t28-11Z"/>
    </Icon>
  );
});

IconMaterialTabCloseFilled.displayName = 'AmauiIconMaterialTabCloseFilled';

export default IconMaterialTabCloseFilled;
