import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMistFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MistFilled'

      short_name='Mist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h400q17 0 28.5 11.5T600-240q0 17-11.5 28.5T560-200H160Zm560 0q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280h80q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200h-80ZM160-360q-17 0-28.5-11.5T120-400q0-17 11.5-28.5T160-440h80q17 0 28.5 11.5T280-400q0 17-11.5 28.5T240-360h-80Zm240 0q-17 0-28.5-11.5T360-400q0-17 11.5-28.5T400-440h400q17 0 28.5 11.5T840-400q0 17-11.5 28.5T800-360H400ZM160-520q-17 0-28.5-11.5T120-560q0-17 11.5-28.5T160-600h440q17 0 28.5 11.5T640-560q0 17-11.5 28.5T600-520H160Zm600 0q-17 0-28.5-11.5T720-560q0-17 11.5-28.5T760-600h40q17 0 28.5 11.5T840-560q0 17-11.5 28.5T800-520h-40ZM160-680q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h200q17 0 28.5 11.5T400-720q0 17-11.5 28.5T360-680H160Zm360 0q-17 0-28.5-11.5T480-720q0-17 11.5-28.5T520-760h280q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H520Z"/>
    </Icon>
  );
});

IconMaterialMistFilled.displayName = 'OnesyIconMaterialMistFilled';

export default IconMaterialMistFilled;
