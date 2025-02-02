import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeAndGardenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGardenFilled'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-33 0-56.5-23.5T160-240v-295l-40 31q-13 10-29.5 8T64-512q-10-13-7.5-29T72-567l360-276q11-8 23.5-12t25.5-4q13 0 25 4t23 12l299 229q19 14 9.5 36T805-559q-26-3-52.5.5T700-545q-60-23-123.5-10.5T465-495q-48 48-60.5 111.5T415-260q-6 16-10 32t-5 33q-1 14-10.5 24.5T366-160H240Zm460 95q-42 29-92.5 24.5T521-81q-36-36-40.5-86.5T505-260q-29-42-24.5-92.5T521-439q36-36 86.5-40.5T700-455q42-29 92.5-24.5T879-439q36 36 40.5 86.5T895-260q29 42 24.5 92.5T879-81q-36 36-86.5 40.5T700-65Zm0-145q21 0 35.5-14.5T750-260q0-21-14.5-35.5T700-310q-21 0-35.5 14.5T650-260q0 21 14.5 35.5T700-210Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenFilled.displayName = 'OnesyIconMaterialHomeAndGardenFilled';

export default IconMaterialHomeAndGardenFilled;
