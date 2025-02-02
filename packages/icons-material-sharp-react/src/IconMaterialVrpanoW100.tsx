import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVrpanoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VrpanoW100'

      short_name='Vrpano'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-254q78-23 158.5-34.47Q399-299.94 480-299.94t161.5 11.47Q722-277 800-254v-450q-78 23-158.5 33.5T480-660q-81 0-161.5-10.5T160-704v450Zm-28 36v-522q81 23 161.5 38.5T480-686q106 0 186.5-15.5T828-740v522q-81-23-161.5-37.5T480-270q-106 0-186.5 14.5T132-218Zm348-261ZM272-372q52.27-5 104.13-7.5Q428-382 480-382q52 0 103.87 2.5Q635.73-377 688-372L560-526 455-401l-80-96-103 125Z"/>
    </Icon>
  );
});

IconMaterialVrpanoW100.displayName = 'OnesyIconMaterialVrpanoW100';

export default IconMaterialVrpanoW100;
