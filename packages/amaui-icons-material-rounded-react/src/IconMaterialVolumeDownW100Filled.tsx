import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolumeDownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeDownW100Filled'

      short_name='VolumeDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.05 13.7q-.325 0-.537-.213-.213-.212-.213-.537v-1.9q0-.325.213-.538.212-.212.537-.212h2.5l1.875-1.875q.35-.35.813-.163.462.188.462.688v6.1q0 .5-.462.687-.463.188-.813-.162L9.55 13.7Zm8.65 1.4V8.85q.725.525 1.112 1.362.388.838.388 1.788 0 .95-.388 1.762-.387.813-1.112 1.338Z"/>
    </Icon>
  );
});

IconMaterialVolumeDownW100Filled.displayName = 'AmauiIconMaterialVolumeDownW100Filled';

export default IconMaterialVolumeDownW100Filled;
