import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEda = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Eda'

      short_name='Eda'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M280 576V176h80v400h-80Zm160 0V136h80v440h-80Zm160 163V216h80v476l-80 47ZM200 936h363l194-194-287 167-130-173H200v200Zm-80 80V656h260l110 147 190-111 136-78 105 78-324 324H120Zm80-360h-80V256h80v400Zm0-80h400-400Zm0 360h363-363Z"/>
    </Icon>
  );
});

IconMaterialEda.displayName = 'AmauiIconMaterialEda';

export default IconMaterialEda;
