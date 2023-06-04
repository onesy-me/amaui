import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCottage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cottage'

      short_name='Cottage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20v-8.375L3 12.4q-.35.25-.75.2-.4-.05-.65-.4-.25-.35-.2-.75.05-.4.375-.65L4 9.1V7q0-.425.287-.713Q4.575 6 5 6t.713.287Q6 6.575 6 7v.575l5.4-4.1q.125-.1.275-.163.15-.062.325-.062.175 0 .325.062.15.063.275.163l9.625 7.325q.325.25.375.65.05.4-.2.75-.25.325-.65.375-.4.05-.725-.2L20 11.625V20q0 .425-.288.712Q19.425 21 19 21Zm1-2h5v-3q0-.425.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16v3h5v-8.9l-6-4.575L6 10.1ZM5.3 5q-.55 0-.888-.463-.337-.462-.037-.987.4-.7 1.088-1.125Q6.15 2 7 2q.275 0 .525-.125t.375-.4q.125-.225.338-.35Q8.45 1 8.725 1q.575 0 .875.475.3.475.025.975-.4.7-1.088 1.125Q7.85 4 7 4q-.275 0-.525.137-.25.138-.375.388t-.35.362Q5.525 5 5.3 5ZM6 19h12H6Z"/>
    </Icon>
  );
});

IconMaterialCottage.displayName = 'AmauiIconMaterialCottage';

export default IconMaterialCottage;
