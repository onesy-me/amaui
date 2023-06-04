import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealingW100'

      short_name='Healing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.875 21 3 17.125l5.175-5.175L3.05 6.825 6.875 3 12 8.125 17.125 3 21 6.875l-5.15 5.15 5.15 5.15L17.175 21l-5.15-5.15Zm5.15-9.75q.325 0 .537-.213.213-.212.213-.537 0-.325-.213-.538-.212-.212-.537-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm-3.375.225 2.85-2.85L6.875 4l-2.85 2.85Zm1.875 1.275q.325 0 .537-.213.213-.212.213-.537 0-.325-.213-.538-.212-.212-.537-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm1.5 1.5q.325 0 .537-.213.213-.212.213-.537 0-.325-.213-.538-.212-.212-.537-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm1.5-1.5q.325 0 .537-.213.213-.212.213-.537 0-.325-.213-.538-.212-.212-.537-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm3.65 7.25 2.85-2.85-4.65-4.65-2.85 2.85ZM9.6 9.525Zm4.85 4.9Z"/>
    </Icon>
  );
});

IconMaterialHealingW100.displayName = 'AmauiIconMaterialHealingW100';

export default IconMaterialHealingW100;
