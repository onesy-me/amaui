import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignJustifyFlexEndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignJustifyFlexEndFilled'

      short_name='AlignJustifyFlexEnd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M840 976q-17 0-28.5-11.5T800 936V216q0-17 11.5-28.5T840 176q17 0 28.5 11.5T880 216v720q0 17-11.5 28.5T840 976ZM600 776q-17 0-28.5-11.5T560 736V416q0-17 11.5-28.5T600 376h40q17 0 28.5 11.5T680 416v320q0 17-11.5 28.5T640 776h-40Zm-240 0q-17 0-28.5-11.5T320 736V416q0-17 11.5-28.5T360 376h40q17 0 28.5 11.5T440 416v320q0 17-11.5 28.5T400 776h-40Z"/>
    </Icon>
  );
});

IconMaterialAlignJustifyFlexEndFilled.displayName = 'AmauiIconMaterialAlignJustifyFlexEndFilled';

export default IconMaterialAlignJustifyFlexEndFilled;
