import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAgriculture = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Agriculture'

      short_name='Agriculture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680h120q33 0 56.5 23.5T360-600H160Zm80 360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm540 0q25 0 42.5-17.5T840-300q0-25-17.5-42.5T780-360q-25 0-42.5 17.5T720-300q0 25 17.5 42.5T780-240Zm-540-60q-25 0-42.5-17.5T180-360q0-25 17.5-42.5T240-420q25 0 42.5 17.5T300-360q0 25-17.5 42.5T240-300Zm560-139q26 5 43 13.5t37 27.5v-242q0-33-23.5-56.5T800-720H548l-42-44 56-56-28-28-142 142 30 28 56-56 42 42v92q0 33-23.5 56.5T440-520h-81q23 17 37 35t28 45h16q66 0 113-47t47-113v-40h200v201ZM641-320q6-27 14.5-43.5T682-400H436q4 23 4 40t-4 40h205Zm139 160q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm-540 0q-83 0-141.5-58.5T40-360q0-83 58.5-141.5T240-560q83 0 141.5 58.5T440-360q0 83-58.5 141.5T240-160Zm393-360Z"/>
    </Icon>
  );
});

IconMaterialAgriculture.displayName = 'OnesyIconMaterialAgriculture';

export default IconMaterialAgriculture;
