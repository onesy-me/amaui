import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMeasuringTapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeasuringTapeW100Filled'

      short_name='MeasuringTape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 844V556q0-120.282 83.801-204.141t204-83.859Q640 268 724 351.801q84 83.801 84 204T724.141 760Q640.282 844 520 844H232Zm288-174q48 0 81-33t33-81q0-48-33-81t-81-33q-48 0-81 33t-33 81q0 48 33 81t81 33Zm-.118-28Q484 642 459 616.882q-25-25.117-25-61Q434 520 459.118 495q25.117-25 61-25Q556 470 581 495.118q25 25.117 25 61Q606 592 580.882 617q-25.117 25-61 25ZM152 844V696h28v148h-28Z"/>
    </Icon>
  );
});

IconMaterialMeasuringTapeW100Filled.displayName = 'AmauiIconMaterialMeasuringTapeW100Filled';

export default IconMaterialMeasuringTapeW100Filled;
