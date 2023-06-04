import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgHeartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeartFilled'

      short_name='EcgHeart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M645 216q100 0 167.5 74T880 466q0 18-2 35.5t-7 34.5H621l-67-102h-72l-54 172-47-70H89q-5-17-7-34.5T80 467q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19ZM479 974 148 641q-6-6-11-12t-10-13h211l69 103h71l54-173 46 70h254l-10 12-10 12-333 334Z"/>
    </Icon>
  );
});

IconMaterialEcgHeartFilled.displayName = 'AmauiIconMaterialEcgHeartFilled';

export default IconMaterialEcgHeartFilled;
