import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDrawAbstractFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DrawAbstractFilled'

      short_name='DrawAbstract'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-8 0-15.5-3.5T92-132q-12-11-12-27.5T91-188q19-20 45.5-24t53.5 1q8 2 15 4t12-3q6-6 4.5-15t-3.5-17q-4-27-1-53.5t22-46.5q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-1-53.5t22-46.5q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-.5-53.5T536-650q19-20 45.5-24t53.5 1q8 2 15.5 4t12.5-3q6-6 4-15t-4-17q-4-27-.5-53.5T685-804q19-20 45.5-24t53.5 1q8 2 15.5 3.5T812-827q11-12 27.5-12t28.5 11q12 11 12 27.5T869-772q-19 20-45.5 24.5T770-748q-8-2-15.5-4t-12.5 3q-6 6-4 15t4 17q4 27 .5 53.5T720-617q-19 20-45.5 24t-53.5-1q-8-2-15-4t-12 3q-6 6-4.5 15t3.5 17q4 27 1 53.5T572-463q-19 19-45.5 23.5T473-440q-8-2-15-3.5t-12 3.5q-6 6-4.5 14.5T445-409q4 27 1 53.5T424-309q-19 20-46 24t-54-1q-8-2-15-3.5t-12 3.5q-6 6-4 14.5t4 16.5q4 27 .5 53.5T275-155q-19 20-45.5 24t-53.5-1q-8-2-15-3.5t-12 3.5q-6 6-13.5 9t-15.5 3Zm120-400q-83 0-141.5-58.5T40-720q0-84 58.5-142T240-920q84 0 142 58t58 142q0 83-58 141.5T240-520ZM640-40q-33 0-56.5-23.5T560-120v-200q0-33 23.5-56.5T640-400h200q33 0 56.5 23.5T920-320v200q0 33-23.5 56.5T840-40H640Z"/>
    </Icon>
  );
});

IconMaterialDrawAbstractFilled.displayName = 'OnesyIconMaterialDrawAbstractFilled';

export default IconMaterialDrawAbstractFilled;
