import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontLoader = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontLoader'

      short_name='FrontLoader'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.975 19.775q-1.25 0-2.112-.875Q1 18.025 1 16.775v-8h7v-5h5l3 3-.025 4h1v-2l2.525-2.5 4.475 8.5h-7v-2h-1v1.75q.5.425.763 1.012.262.588.262 1.238 0 1.25-.875 2.125T14 19.775q-.95 0-1.725-.55-.775-.55-1.125-1.45H6.825q-.35.9-1.125 1.45-.775.55-1.725.55Zm0-2q.425 0 .725-.288.3-.287.3-.712t-.287-.713q-.288-.287-.713-.287t-.712.287Q3 16.35 3 16.775t.275.712q.275.288.7.288Zm10.025 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713q-.288-.287-.713-.287t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm-6-2v-5H3v3.175q.25-.1.487-.138.238-.037.513-.037.95 0 1.725.55.775.55 1.1 1.45Zm2 0h1.15q.325-.9 1.113-1.45.787-.55 1.737-.55v-1h-4Zm10.675-3L19 9.6v3.175Zm-10.675-2h4V7.6l-1.85-1.825H10Zm-2 5v-2V13.95v-3.175Zm2 0v-3 3Z"/>
    </Icon>
  );
});

IconMaterialFrontLoader.displayName = 'AmauiIconMaterialFrontLoader';

export default IconMaterialFrontLoader;
