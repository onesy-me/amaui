import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEvMobiledataBadge = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EvMobiledataBadge'

      short_name='EvMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936q-33 0-56.5-23.5T40 856V296q0-33 23.5-56.5T120 216h720q33 0 56.5 23.5T920 296v560q0 33-23.5 56.5T840 936H120Zm0-80h720V296H120v560Zm0 0V296v560Zm280-80q17 0 28.5-11.5T440 736q0-17-11.5-28.5T400 696H280v-80h80q17 0 28.5-11.5T400 576q0-17-11.5-28.5T360 536h-80v-80h120q17 0 28.5-11.5T440 416q0-17-11.5-28.5T400 376H240q-17 0-28.5 11.5T200 416v320q0 17 11.5 28.5T240 776h160Zm220-160-53-211q-3-13-13-21t-24-8q-19 0-31 15t-7 33l81 323q3 13 13 21t24 8h20q14 0 24-8t13-21l81-323q5-18-7-33t-31-15q-14 0-24 8t-13 21l-53 211Z"/>
    </Icon>
  );
});

IconMaterialEvMobiledataBadge.displayName = 'AmauiIconMaterialEvMobiledataBadge';

export default IconMaterialEvMobiledataBadge;
