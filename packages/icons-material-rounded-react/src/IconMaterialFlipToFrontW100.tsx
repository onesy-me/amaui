import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlipToFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontW100'

      short_name='FlipToFront'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-316q-26 0-43-17t-17-43v-352q0-26 17-43t43-17h352q26 0 43 17t17 43v352q0 26-17 43t-43 17H376Zm0-28h352q12 0 22-10t10-22v-352q0-12-10-22t-22-10H376q-12 0-22 10t-10 22v352q0 12 10 22t22 10ZM192-604q-8.5 0-14.25-5.75T172-624q0-8.5 5.75-14.25T192-644q8.5 0 14.25 5.75T212-624q0 8.5-5.75 14.25T192-604Zm0 144q-8.5 0-14.25-5.75T172-480q0-8.5 5.75-14.25T192-500q8.5 0 14.25 5.75T212-480q0 8.5-5.75 14.25T192-460Zm0 144q-8.5 0-14.25-5.75T172-336q0-8.5 5.75-14.25T192-356q8.5 0 14.25 5.75T212-336q0 8.5-5.75 14.25T192-316Zm0 144q-8.5 0-14.25-5.75T172-192q0-8.5 5.75-14.25T192-212q8.5 0 14.25 5.75T212-192q0 8.5-5.75 14.25T192-172Zm144 0q-8.5 0-14.25-5.75T316-192q0-8.5 5.75-14.25T336-212q8.5 0 14.25 5.75T356-192q0 8.5-5.75 14.25T336-172Zm144 0q-8.5 0-14.25-5.75T460-192q0-8.5 5.75-14.25T480-212q8.5 0 14.25 5.75T500-192q0 8.5-5.75 14.25T480-172Zm144 0q-8.5 0-14.25-5.75T604-192q0-8.5 5.75-14.25T624-212q8.5 0 14.25 5.75T644-192q0 8.5-5.75 14.25T624-172Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontW100.displayName = 'OnesyIconMaterialFlipToFrontW100';

export default IconMaterialFlipToFrontW100;
