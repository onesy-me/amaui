import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMilitaryTechW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechW100Filled'

      short_name='MilitaryTech'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-230-48 37q-9 7-17.5.5T409-210l19-60-47-33q-9-6-5.5-16.5T390-330h56l30-96-134-78q-20-11-31-30.5T300-576v-214q0-25 17.5-42.5T360-850h240q25 0 42.5 17.5T660-790v214q0 21-12 39.5T616-506l-132 80 30 96h56q11 0 14.5 10.5T579-303l-47 33 19 60q3 11-5.5 17.5T528-193l-48-37Zm-14-592v358l14 8 14-8v-358h-28Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechW100Filled.displayName = 'OnesyIconMaterialMilitaryTechW100Filled';

export default IconMaterialMilitaryTechW100Filled;
