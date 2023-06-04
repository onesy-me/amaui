import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial1xMobiledataBadgeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1xMobiledataBadgeFilled'

      short_name='1xMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M120 936q-33 0-56.5-23.5T40 856V296q0-33 23.5-56.5T120 216h720q33 0 56.5 23.5T920 296v560q0 33-23.5 56.5T840 936H120Zm160-480v280q0 17 11.5 28.5T320 776q17 0 28.5-11.5T360 736V416q0-17-11.5-28.5T320 376h-80q-17 0-28.5 11.5T200 416q0 17 11.5 28.5T240 456h40Zm330 193 60 109q5 8 13 13t18 5q20 0 30-17.5t0-34.5l-81-148 82-148q10-17-.5-34.5T701 376q-10 0-18 5t-13 13l-60 109-60-109q-5-8-13-13t-18-5q-20 0-30 17.5t0 34.5l81 148-82 148q-10 17 .5 34.5T519 776q10 0 18-5t13-13l60-109Z"/>
    </Icon>
  );
});

IconMaterial1xMobiledataBadgeFilled.displayName = 'AmauiIconMaterial1xMobiledataBadgeFilled';

export default IconMaterial1xMobiledataBadgeFilled;
