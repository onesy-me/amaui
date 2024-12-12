import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFitPageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitPageW100Filled'

      short_name='FitPage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-192v-576q0-8.5 5.75-14.25T192-788q8.5 0 14.25 5.75T212-768v576q0 8.5-5.75 14.25T192-172q-8.5 0-14.25-5.75T172-192Zm576 0v-576q0-8.5 5.75-14.25T768-788q8.5 0 14.25 5.75T788-768v576q0 8.5-5.75 14.25T768-172q-8.5 0-14.25-5.75T748-192ZM480-604q-8.5 0-14.25-5.75T460-624q0-8.5 5.75-14.25T480-644q8.5 0 14.25 5.75T500-624q0 8.5-5.75 14.25T480-604ZM336-460q-8.5 0-14.25-5.75T316-480q0-8.5 5.75-14.25T336-500q8.5 0 14.25 5.75T356-480q0 8.5-5.75 14.25T336-460Zm144 0q-8.5 0-14.25-5.75T460-480q0-8.5 5.75-14.25T480-500q8.5 0 14.25 5.75T500-480q0 8.5-5.75 14.25T480-460Zm144 0q-8.5 0-14.25-5.75T604-480q0-8.5 5.75-14.25T624-500q8.5 0 14.25 5.75T644-480q0 8.5-5.75 14.25T624-460ZM480-316q-8.5 0-14.25-5.75T460-336q0-8.5 5.75-14.25T480-356q8.5 0 14.25 5.75T500-336q0 8.5-5.75 14.25T480-316Zm0-432q-8.5 0-14.25-5.75T460-768q0-8.5 5.75-14.25T480-788q8.5 0 14.25 5.75T500-768q0 8.5-5.75 14.25T480-748Zm0 576q-8.5 0-14.25-5.75T460-192q0-8.5 5.75-14.25T480-212q8.5 0 14.25 5.75T500-192q0 8.5-5.75 14.25T480-172Z"/>
    </Icon>
  );
});

IconMaterialFitPageW100Filled.displayName = 'OnesyIconMaterialFitPageW100Filled';

export default IconMaterialFitPageW100Filled;
