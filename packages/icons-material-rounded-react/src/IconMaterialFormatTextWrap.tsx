import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFormatTextWrap = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextWrap'

      short_name='FormatTextWrap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160q-17 0-28.5-11.5T160-200v-560q0-17 11.5-28.5T200-800q17 0 28.5 11.5T240-760v560q0 17-11.5 28.5T200-160Zm560 0q-17 0-28.5-11.5T720-200v-560q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v560q0 17-11.5 28.5T760-160ZM395-287l-85-85q-12-12-12-28t12-28l86-85q11-11 27.5-11.5T452-513q11 11 11 28t-11 28l-17 17h85q33 0 56.5-23.5T600-520q0-33-23.5-56.5T520-600H320q-17 0-28.5-11.5T280-640q0-17 11.5-28.5T320-680h200q66 0 113 47t47 113q0 66-47 113t-113 47h-85l17 17q11 11 11 27.5T452-287q-12 12-28.5 12T395-287Z"/>
    </Icon>
  );
});

IconMaterialFormatTextWrap.displayName = 'OnesyIconMaterialFormatTextWrap';

export default IconMaterialFormatTextWrap;
