import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLabResearchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabResearchW100'

      short_name='LabResearch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M345-333v-28h62q-2 7-3.5 13.5T401-333h-56Zm-7 201q-68.89 0-117.45-47Q172-226 172-294v-364h-62v-170h456v170h-63v158q-5 4-9.5 7.5T484-485H345v-28h130v-145H200v364q0 57 40.25 95.5T338-160q25 0 47-8t40-22q3 7 6.5 12.5T439-166q-21 16-46.5 25t-54.5 9ZM138-686h400v-114H138v114Zm505 502q48 0 82-34t34-82q0-48-34-82t-82-34q-48 0-82 34t-34 82q0 48 34 82t82 34ZM847-77 735-189q-20 16-43.35 24.5T643-156q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 25.3-8.5 48.65Q770-228 754-208L866-96l-19 19ZM138-686v-114 114Z"/>
    </Icon>
  );
});

IconMaterialLabResearchW100.displayName = 'OnesyIconMaterialLabResearchW100';

export default IconMaterialLabResearchW100;
