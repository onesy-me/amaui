import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHls = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hls'

      short_name='Hls'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.75 15q-.325 0-.537-.213Q3 14.575 3 14.25v-4.5q0-.325.213-.538Q3.425 9 3.75 9q.325 0 .537.212.213.213.213.538V11h2V9.75q0-.325.213-.538Q6.925 9 7.25 9q.325 0 .537.212Q8 9.425 8 9.75v4.5q0 .325-.213.537Q7.575 15 7.25 15q-.325 0-.537-.213-.213-.212-.213-.537V12.5h-2v1.75q0 .325-.213.537Q4.075 15 3.75 15Zm12.75 0q-.425 0-.713-.288-.287-.287-.287-.712v-.25q0-.325.213-.538.212-.212.537-.212.25 0 .438.137.187.138.262.363H19v-1h-2.5q-.425 0-.713-.288-.287-.287-.287-.712V10q0-.425.287-.713Q16.075 9 16.5 9h3q.425 0 .712.287.288.288.288.713v.25q0 .325-.212.537-.213.213-.538.213-.25 0-.45-.137-.2-.138-.25-.363H17v1h2.5q.425 0 .712.287.288.288.288.713V14q0 .425-.288.712-.287.288-.712.288ZM11 15q-.425 0-.712-.288Q10 14.425 10 14V9.75q0-.325.213-.538Q10.425 9 10.75 9q.325 0 .538.212.212.213.212.538v3.75h1.75q.325 0 .538.212.212.213.212.538 0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialHls.displayName = 'AmauiIconMaterialHls';

export default IconMaterialHls;
