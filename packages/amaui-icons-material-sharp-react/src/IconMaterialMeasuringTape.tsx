import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMeasuringTape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MeasuringTape'

      short_name='MeasuringTape'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 896V556q0-142 99-241t241-99q142 0 241 99t99 241q0 142-99 241t-241 99H200Zm80-80h260q108 0 184-76t76-184q0-108-76-184t-184-76q-108 0-184 76t-76 184v260Zm260-120q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-80q-25 0-42.5-17.5T480 556q0-25 17.5-42.5T540 496q25 0 42.5 17.5T600 556q0 25-17.5 42.5T540 616ZM80 896V696h80v200H80Zm460-340Z"/>
    </Icon>
  );
});

IconMaterialMeasuringTape.displayName = 'AmauiIconMaterialMeasuringTape';

export default IconMaterialMeasuringTape;
