import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterOrpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterOrpW100'

      short_name='WaterOrp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 13.8q0-1.35.625-2.7t1.563-2.613Q6.425 7.225 7.5 6.112 8.575 5 9.475 4.175q.125-.1.263-.15.137-.05.262-.05t.25.05q.125.05.25.15.9.85 1.95 1.912 1.05 1.063 1.975 2.275.925 1.213 1.563 2.513.637 1.3.712 2.625H16q-.125-1.8-1.625-4.025Q12.875 7.25 10 4.65 7.025 7.375 5.513 9.675 4 11.975 4 13.8q0 .95.238 1.8.237.85.662 1.575v1.175q-.75-.9-1.175-2.05-.425-1.15-.425-2.5Zm6.7-2.875ZM7.6 20.7q-.275 0-.487-.213Q6.9 20.275 6.9 20v-3.8q0-.275.213-.488.212-.212.487-.212h2.3q.275 0 .488.212.212.213.212.488V20q0 .275-.212.487-.213.213-.488.213Zm0-.7h2.3v-3.8H7.6Zm5.5-1.3v1.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.3q0-.225.175-.388.175-.162.4-.162h2.475q.475 0 .813.338.337.337.337.812v.95q0 .425-.312.737-.313.313-.763.363l.65 1.5q.075.175-.025.338-.1.162-.3.162-.125 0-.2-.063-.075-.062-.125-.162l-.75-1.775Zm6 0v1.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-4.3q0-.225.175-.388.175-.162.4-.162h2.475q.475 0 .813.338.337.337.337.812v.9q0 .475-.337.812-.338.338-.813.338Zm-6-.7h2.35q.2 0 .325-.113.125-.112.125-.287v-.95q0-.2-.125-.325t-.325-.125H13.1Zm6 0h2.35q.2 0 .325-.125t.125-.325v-.9q0-.2-.125-.325t-.325-.125H19.1Z"/>
    </Icon>
  );
});

IconMaterialWaterOrpW100.displayName = 'AmauiIconMaterialWaterOrpW100';

export default IconMaterialWaterOrpW100;
