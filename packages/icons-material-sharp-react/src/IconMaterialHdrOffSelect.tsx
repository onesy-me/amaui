import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHdrOffSelect = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOffSelect'

      short_name='HdrOffSelect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M820-80v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Zm-300 0v-240h200v156h-36l36 84h-60l-36-80h-44v80h-60Zm60-140h80v-40h-80v40ZM0-80v-240h60v80h80v-80h60v240h-60v-100H60v100H0Zm260 0v-240h170l30 30v180l-30 30H260Zm60-60h80v-120h-80v120Zm376-396-62-62q2-11 4-21t2-21q0-66-47-113t-113-47q-11 0-21 1.5t-19 4.5l-64-64q26-12 52-17t52-5q100 0 170 70t70 170q0 26-6 52t-18 52Zm-46 178-66-66q-23 12-50.5 18t-53.5 6q-100 0-170-70t-70-170q0-29 6-55t18-49l-66-66 56-56 452 452-56 56ZM522-486 326-682q-3 8-4.5 19.5T320-640q0 66 47 113t113 47q11 0 22.5-1.5T522-486Zm15-210ZM424-584Z"/>
    </Icon>
  );
});

IconMaterialHdrOffSelect.displayName = 'OnesyIconMaterialHdrOffSelect';

export default IconMaterialHdrOffSelect;
