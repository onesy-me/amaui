import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonPinCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinCircle'

      short_name='PersonPinCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.4 0 2.525-.688 1.125-.687 1.775-1.812-.875-.725-1.975-1.113Q13.225 11 12 11t-2.325.387q-1.1.388-1.975 1.113.65 1.125 1.775 1.812Q10.6 15 12 15Zm0-5q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0 9.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075ZM12 10.2Z"/>
    </Icon>
  );
});

IconMaterialPersonPinCircle.displayName = 'AmauiIconMaterialPersonPinCircle';

export default IconMaterialPersonPinCircle;
