import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInterpreterModeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InterpreterModeFilled'

      short_name='InterpreterMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-300q-25 0-42.5-17.5T760-360v-100q0-25 17.5-42.5T820-520q25 0 42.5 17.5T880-460v100q0 25-17.5 42.5T820-300Zm-20 140v-62q-51-8-85.5-46.5T680-360h40q0 42 29 71t71 29q42 0 71-29t29-71h40q0 53-34.5 91.5T840-222v62h-40ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q14 0 27.5 2t26.5 7q-26 31-40 69.5T360-640q0 43 14 81.5t40 69.5q-13 5-26.5 7t-27.5 2ZM40-160v-111q0-34 17-63t47-44q38-20 82.5-34.5T284-435q-40 28-62 71t-22 93v111H40Zm560-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM280-160v-111q0-34 17-63t47-44q51-26 115.5-44T600-440q12 0 23.5.5T646-438q-42 76-16 158t103 120H280Z"/>
    </Icon>
  );
});

IconMaterialInterpreterModeFilled.displayName = 'OnesyIconMaterialInterpreterModeFilled';

export default IconMaterialInterpreterModeFilled;
