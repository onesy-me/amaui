import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterPumpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpW100'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-401q-23 0-38.5-15.5T426-455q0-14 6.5-29t22.5-39l12-18q5-7 12.5-7t12.5 7l12 18q17.61 25.96 23.8 39.87Q534-469.22 534-455q0 23-15.5 38.5T480-401ZM146-280h224q-32-18-57.5-45T272-386H146v106Zm334 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm208-294h126v-106H590q32 18 57.5 45t40.5 61ZM146-252v14q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98v-190q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v14h116q-5-16-7.5-32.5T252-480q0-95.27 66.36-161.64Q384.73-708 480-708h334v-14q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v190q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-14H698q5 16 7.5 32.5T708-480q0 95.27-66.36 161.64Q575.27-252 480-252H146Zm0-28v-106 106Zm668-294v-106 106Zm-334 94Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpW100.displayName = 'OnesyIconMaterialWaterPumpW100';

export default IconMaterialWaterPumpW100;
