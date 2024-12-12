import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPersonalInjury = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonalInjury'

      short_name='PersonalInjury'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-560q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-720q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720q0 33 23.5 56.5T480-640ZM160-80v-271q0-34 17-62.5t47-44.5q51-26 115.5-44T480-520q76 0 140.5 18T736-458q30 16 47 44.5t17 62.5v191q0 33-23.5 56.5T720-80H390q-46 0-78-32t-32-78q0-46 32-78t78-32h113l62-132q-20-4-41-6t-44-2q-72 0-128 17.5T261-386q-10 5-15.5 14.5T240-351v271h-80Zm230-80h48l28-60h-76q-12 0-21 9t-9 21q0 12 9 21t21 9Zm136 0h194v-191q0-11-5.5-20.5T700-386q-12-6-26-12.5T644-411L526-160Zm-46-560Zm0 426Z"/>
    </Icon>
  );
});

IconMaterialPersonalInjury.displayName = 'OnesyIconMaterialPersonalInjury';

export default IconMaterialPersonalInjury;
