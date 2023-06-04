import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataBadgeFilled'

      short_name='HPlusMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936q-33 0-56.5-23.5T40 856V296q0-33 23.5-56.5T120 216h720q33 0 56.5 23.5T920 296v560q0 33-23.5 56.5T840 936H120Zm140-320h160v120q0 17 11.5 28.5T460 776q17 0 28.5-11.5T500 736V416q0-17-11.5-28.5T460 376q-17 0-28.5 11.5T420 416v120H260V416q0-17-11.5-28.5T220 376q-17 0-28.5 11.5T180 416v320q0 17 11.5 28.5T220 776q17 0 28.5-11.5T260 736V616Zm360 0v40q0 17 11.5 28.5T660 696q17 0 28.5-11.5T700 656v-40h40q17 0 28.5-11.5T780 576q0-17-11.5-28.5T740 536h-40v-40q0-17-11.5-28.5T660 456q-17 0-28.5 11.5T620 496v40h-40q-17 0-28.5 11.5T540 576q0 17 11.5 28.5T580 616h40Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataBadgeFilled.displayName = 'AmauiIconMaterialHPlusMobiledataBadgeFilled';

export default IconMaterialHPlusMobiledataBadgeFilled;
