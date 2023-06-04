import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGroupRemove = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GroupRemove'

      short_name='GroupRemove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 11.95q.725-.8 1.113-1.825Q14 9.1 14 8t-.387-2.125Q13.225 4.85 12.5 4.05q1.5.2 2.5 1.325T16 8q0 1.5-1 2.625t-2.5 1.325ZM18 20v-3q0-.9-.4-1.712-.4-.813-1.05-1.438 1.275.45 2.363 1.162Q20 15.725 20 17v3Zm6-9h-6V9h6ZM8 12q-1.65 0-2.825-1.175Q4 9.65 4 8q0-1.65 1.175-2.825Q6.35 4 8 4q1.65 0 2.825 1.175Q12 6.35 12 8q0 1.65-1.175 2.825Q9.65 12 8 12Zm-8 8v-2.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q6.35 13 8 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q16 16.35 16 17.2V20Zm8-10q.825 0 1.413-.588Q10 8.825 10 8t-.587-1.412Q8.825 6 8 6q-.825 0-1.412.588Q6 7.175 6 8t.588 1.412Q7.175 10 8 10Zm-6 8h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q9.4 15 8 15t-2.775.337Q3.85 15.675 2.5 16.35q-.225.125-.362.35-.138.225-.138.5ZM8 8Zm0 10Z"/>
    </Icon>
  );
});

IconMaterialGroupRemove.displayName = 'AmauiIconMaterialGroupRemove';

export default IconMaterialGroupRemove;
