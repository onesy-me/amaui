import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMaxDotsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxDotsRoundedW100Filled'
      short_name='HomeMaxDots'

      {...props}
    >
      <path d="M8.3 18.4v-.7H5.65q-1.4 0-2.375-.975Q2.3 15.75 2.3 14.35v-4.7q0-1.4.975-2.375Q4.25 6.3 5.65 6.3h12.7q1.4 0 2.375.975.975.975.975 2.375v4.7q0 1.4-.975 2.375-.975.975-2.375.975H15.7v.7Zm2.2-5.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212Q9.8 11.725 9.8 12t.213.487q.212.213.487.213Zm-3 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.775 11.3 7.5 11.3t-.487.212Q6.8 11.725 6.8 12t.213.487q.212.213.487.213Zm6 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Zm3 0q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.487.212q-.213.213-.213.488t.213.487q.212.213.487.213Z"/>
    </Icon>
  );
});

IconMaterialHomeMaxDotsRoundedW100Filled.displayName = 'AmauiIconMaterialHomeMaxDotsRoundedW100Filled';

export default IconMaterialHomeMaxDotsRoundedW100Filled;
