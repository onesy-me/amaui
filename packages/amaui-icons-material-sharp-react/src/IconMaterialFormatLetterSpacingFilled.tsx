import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatLetterSpacingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLetterSpacingFilled'

      short_name='FormatLetterSpacing'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 976 160 816l160-160 57 56-64 64h334l-63-64 56-56 160 160-160 160-57-56 64-64H313l63 64-56 56ZM200 576V176h80v400h-80Zm240 0V176h80v400h-80Zm240 0V176h80v400h-80Z"/>
    </Icon>
  );
});

IconMaterialFormatLetterSpacingFilled.displayName = 'AmauiIconMaterialFormatLetterSpacingFilled';

export default IconMaterialFormatLetterSpacingFilled;
