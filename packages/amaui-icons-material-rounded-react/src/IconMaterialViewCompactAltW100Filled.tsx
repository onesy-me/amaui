import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewCompactAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewCompactAltW100Filled'

      short_name='ViewCompactAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.875 11.175h1.9q.175 0 .287-.113.113-.112.113-.287v-1.9q0-.175-.113-.288-.112-.112-.287-.112h-1.9q-.175 0-.287.112-.113.113-.113.288v1.9q0 .175.113.287.112.113.287.113Zm4.35 0h1.9q.175 0 .288-.113.112-.112.112-.287v-1.9q0-.175-.112-.288-.113-.112-.288-.112h-1.9q-.175 0-.287.112-.113.113-.113.288v1.9q0 .175.113.287.112.113.287.113Zm-4.35 4.35h1.9q.175 0 .287-.113.113-.112.113-.287v-1.9q0-.175-.113-.287-.112-.113-.287-.113h-1.9q-.175 0-.287.113-.113.112-.113.287v1.9q0 .175.113.287.112.113.287.113Zm4.35 0h1.9q.175 0 .288-.113.112-.112.112-.287v-1.9q0-.175-.112-.287-.113-.113-.288-.113h-1.9q-.175 0-.287.113-.113.112-.113.287v1.9q0 .175.113.287.112.113.287.113ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialViewCompactAltW100Filled.displayName = 'AmauiIconMaterialViewCompactAltW100Filled';

export default IconMaterialViewCompactAltW100Filled;
