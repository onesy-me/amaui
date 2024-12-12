import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSatelliteAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteAltFilled'

      short_name='SatelliteAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M561-32q-17 0-29-11.5T520-72q0-17 11.5-28.5T560-112q117 0 198.5-81.5T840-392q0-17 11.5-28.5T880-432q17 0 28.5 11.5T920-392q0 74-28.5 139.5t-77 114.5q-48.5 49-114 77.5T561-32Zm0-160q-17 0-29-11.5T520-232q0-17 11.5-28.5T560-272q50 0 85-35t35-85q0-17 11.5-28.5T720-432q17 0 28.5 11.5T760-392q-1 83-58.5 141T561-192ZM222-57q-15 0-30-6t-27-17L23-222q-11-12-17-27t-6-30q0-16 6-30.5T23-335l127-127q23-23 57-23.5t57 22.5l50 50 28-28-50-50q-23-23-23-56t23-56l57-57q23-23 56.5-23t56.5 23l50 50 28-28-50-50q-23-23-23-56.5t23-56.5l127-127q12-12 27-18t30-6q15 0 29.5 6t26.5 18l142 142q12 11 17.5 25.5T895-730q0 15-5.5 30T872-673L745-546q-23 23-56.5 23T632-546l-50-50-28 28 50 50q23 23 22.5 56.5T603-405l-56 56q-23 23-56.5 23T434-349l-50-50-28 28 50 50q23 23 22.5 57T405-207L278-80q-11 11-25.5 17T222-57Zm0-79 42-42-142-142-42 42 142 142Zm85-85 42-42-142-142-42 42 142 142Zm382-382 42-42-142-142-42 42 142 142Zm85-85 42-42-142-142-42 42 142 142Z"/>
    </Icon>
  );
});

IconMaterialSatelliteAltFilled.displayName = 'OnesyIconMaterialSatelliteAltFilled';

export default IconMaterialSatelliteAltFilled;
