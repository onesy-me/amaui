import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPartlyCloudyDay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PartlyCloudyDay'

      short_name='PartlyCloudyDay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm198 82q-11-11-11-28t11-28l56-57q12-12 28.5-12t28.5 12q11 11 11 28t-11 28l-57 57q-11 11-28 11t-28-11Zm122 238q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80Zm-66 271-56-57q-11-11-11-28t11-28q11-11 28-11t28 11l57 56q12 12 12 28.5T791-169q-12 12-28.5 12T734-169ZM226-678l-57-57q-11-11-11-28t11-28q12-12 28.5-12t28.5 12l56 57q11 11 11 28t-11 28q-11 11-28 11t-28-11Zm14 478h180q25 0 42.5-17.5T480-260q0-25-17-42.5T421-320h-51l-20-48q-14-33-44-52.5T240-440q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q60 0 109.5 32.5T423-400q58 0 97.5 43T560-254q-2 57-42.5 95.5T420-120H240Zm320-134q-5-20-10-39t-10-39q45-19 72.5-59t27.5-89q0-66-47-113t-113-47q-60 0-105 39t-53 99q-20-5-41-9t-41-9q14-88 82.5-144T480-720q100 0 170 70t70 170q0 77-44 138.5T560-254Zm-79-226Z"/>
    </Icon>
  );
});

IconMaterialPartlyCloudyDay.displayName = 'OnesyIconMaterialPartlyCloudyDay';

export default IconMaterialPartlyCloudyDay;
