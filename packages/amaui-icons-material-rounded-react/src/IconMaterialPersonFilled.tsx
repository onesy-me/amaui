import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonFilled'

      short_name='Person'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm-6 8q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialPersonFilled.displayName = 'AmauiIconMaterialPersonFilled';

export default IconMaterialPersonFilled;
