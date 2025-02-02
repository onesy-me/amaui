import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPillOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PillOffW100'

      short_name='PillOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M788-614.67q0 34.67-13.5 66.17T737-492l-71 70q-4 4-9 3.5t-9-4.5q-4-4-4-9.67 0-5.66 4-9.33l70-70q20-20 31-47t11-56q0-60-42.5-102.5T615-760q-29 0-56 11t-47 31l-71 71q-4 4-9.5 3.5T422-648q-4-4-4-9t4-9l70-71q25-24 56.54-37.5t66.15-13.5q72.31 0 122.81 50.46T788-614.67ZM345-200q29 0 56-11t47-31l113-113-206-206-113 113q-20 20-31 47t-11 56q0 60 42.5 102.5T345-200Zm235-136L468-223q-24 24-55.96 37.5T345-172q-72.28 0-122.64-50.46T172-345.33Q172-380 185.5-412t37.5-56l113-112-194-194q-4-4-4.5-9.5T142-794q5-5 10-5t10 5l636 636q4 4 4.5 9.5T798-138q-5 5-10 5t-10-5L580-336ZM458-458Zm77-77Z"/>
    </Icon>
  );
});

IconMaterialPillOffW100.displayName = 'OnesyIconMaterialPillOffW100';

export default IconMaterialPillOffW100;
