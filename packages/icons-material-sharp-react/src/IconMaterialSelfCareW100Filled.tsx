import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSelfCareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SelfCareW100Filled'

      short_name='SelfCare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M624-152q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-52H624q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-52H624q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-52H624q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-52H624q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-52H624q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h120q23 0 38.5 20.5T798-516v310q0 23-15.5 38.5T744-152H624ZM362-360q66 0 113-65t47-155q0-90-47-155t-113-65q-66 0-113 65t-47 155q0 90 47 155t113 65Zm0 208q-25 0-39-19t-12-42l14-124q-65-17-108-84.5T174-580q0-103.33 54.76-175.67 54.77-72.33 133-72.33Q440-828 495-755.67q55 72.34 55 175.67 0 91-43 158.5T399-337l14 124q3 23-12.22 42T362-152Z"/>
    </Icon>
  );
});

IconMaterialSelfCareW100Filled.displayName = 'OnesyIconMaterialSelfCareW100Filled';

export default IconMaterialSelfCareW100Filled;
