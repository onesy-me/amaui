import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusAlert'

      short_name='BusAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-720h234-234Zm62 280h-80 480-400ZM180-80q-25 0-42.5-17.5T120-140v-62q-20-21-30-46.5T80-300v-380q0-88 79.5-124T400-840q17 0 28.5 11.5T440-800q0 17-10.5 28.5T402-760q-96 0-150 11.5T178-720h182q17 0 28.5 11.5T400-680q0 17-11.5 28.5T360-640H160v120h321q17 0 28 11.5t11 28.5q0 17-11.5 28.5T480-440H160v120q0 33 23.5 56.5T240-240h320q33 0 56.5-23.5T640-320v-39q0-17 11.5-28.5T680-399q17 0 28.5 11.5T720-359v59q0 26-10 51.5T680-202v62q0 25-17.5 42.5T620-80q-25 0-42.5-17.5T560-140v-20H240v20q0 25-17.5 42.5T180-80Zm500-400q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-160q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM260-280q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm280 0q25 0 42.5-17.5T600-340q0-25-17.5-42.5T540-400q-25 0-42.5 17.5T480-340q0 25 17.5 42.5T540-280Z"/>
    </Icon>
  );
});

IconMaterialBusAlert.displayName = 'OnesyIconMaterialBusAlert';

export default IconMaterialBusAlert;
