import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShareLocationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShareLocationFilled'

      short_name='ShareLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.975 21.95v-2q1.05-.15 2.037-.575.988-.425 1.863-1.075l1.45 1.45q-1.175.925-2.525 1.488-1.35.562-2.825.712Zm6.75-3.65-1.4-1.4q.65-.825 1.05-1.813.4-.987.55-2.087h2.05q-.2 1.55-.762 2.887-.563 1.338-1.488 2.413Zm.2-7.3q-.15-1.125-.55-2.113-.4-.987-1.05-1.787l1.4-1.4q.95 1.1 1.538 2.45.587 1.35.712 2.85Zm-8.95 10.95q-3.825-.45-6.387-3.287Q2.025 15.825 2.025 12q0-3.875 2.563-6.7 2.562-2.825 6.387-3.25v2q-3 .425-4.975 2.675Q4.025 8.975 4.025 12q0 3 1.975 5.25t4.975 2.7Zm5.95-16.25q-.9-.675-1.9-1.1-1-.425-2.05-.55v-2q1.475.125 2.825.687 1.35.563 2.525 1.513ZM12 17q-2.025-1.725-3.012-3.188Q8 12.35 8 11.1q0-1.875 1.213-2.987Q10.425 7 12 7t2.788 1.113Q16 9.225 16 11.1q0 1.25-.988 2.712Q14.025 15.275 12 17Zm0-5q.45 0 .763-.312.312-.313.312-.763 0-.425-.312-.75Q12.45 9.85 12 9.85t-.762.325q-.313.325-.313.75 0 .45.313.763Q11.55 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialShareLocationFilled.displayName = 'AmauiIconMaterialShareLocationFilled';

export default IconMaterialShareLocationFilled;
