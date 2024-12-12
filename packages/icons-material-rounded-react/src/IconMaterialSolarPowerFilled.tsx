import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSolarPowerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SolarPowerFilled'

      short_name='SolarPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-800q-17 0-28.5-11.5T120-840q0-17 11.5-28.5T160-880h40q17 0 28.5 11.5T240-840q0 17-11.5 28.5T200-800h-40Zm-48 560-13 64q-8 38 16.5 67T178-80h262v-160H112Zm105-432 28-28q11-11 27.5-11t28.5 11q12 12 12 28.5T301-643l-28 28q-11 11-27.5 11T217-615q-12-12-12-28.5t12-28.5Zm-89 352h312v-160H226q-29 0-51.5 18T147-416l-19 96Zm312-240v-40q0-17 11.5-28.5T480-640q17 0 28.5 11.5T520-600v40q0 17-11.5 28.5T480-520q-17 0-28.5-11.5T440-560Zm80 480h262q38 0 62.5-29t16.5-67l-13-64H520v160Zm0-240h312l-19-96q-5-28-27.5-46T734-480H520v160Zm167-296-28-28q-11-11-11.5-27.5T659-700q11-11 28-11t28 11l29 28q12 11 12 27.5T744-616q-12 12-28.5 12T687-616Zm113-184h-40q-17 0-28.5-11.5T720-840q0-17 11.5-28.5T760-880h40q17 0 28.5 11.5T840-840q0 17-11.5 28.5T800-800ZM480-680q-70 0-123.5-42.5T286-831q-5-19 8.5-34t33.5-15h304q20 0 33 15t9 34q-17 66-70.5 108.5T480-680Z"/>
    </Icon>
  );
});

IconMaterialSolarPowerFilled.displayName = 'OnesyIconMaterialSolarPowerFilled';

export default IconMaterialSolarPowerFilled;
