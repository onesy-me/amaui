import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsSuggestW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsSuggestW100Filled'

      short_name='SettingsSuggest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.9 7.6q-.125 0-.212-.05-.088-.05-.138-.175l-.5-1.025-1.025-.5q-.125-.05-.175-.137-.05-.088-.05-.213t.05-.213q.05-.087.175-.137l1.025-.5.5-1.025q.05-.125.138-.175.087-.05.212-.05t.213.05q.087.05.137.175l.5 1.025 1.025.5q.125.05.175.137.05.088.05.213t-.05.213q-.05.087-.175.137l-1.025.5-.5 1.025q-.05.125-.137.175-.088.05-.213.05Zm2 7.4q-.125 0-.225-.05t-.15-.175l-.275-.625-.625-.275q-.075-.05-.225-.375 0-.125.05-.225t.175-.15l.625-.275.275-.625q.05-.075.375-.225.125 0 .225.05t.15.175l.275.625.625.275q.075.025.225.375 0 .125-.05.225t-.175.15l-.625.275-.275.625q-.025.075-.375.225ZM8.7 20.7q-.275 0-.475-.188-.2-.187-.25-.462l-.175-1.3q-.425-.15-.937-.45-.513-.3-.813-.6l-1.175.525q-.275.125-.55.038-.275-.088-.4-.338l-.7-1.2q-.125-.25-.062-.525.062-.275.287-.45L4.5 15q-.125-.575-.125-1 0-.425.125-1l-1.05-.75q-.225-.175-.287-.45-.063-.275.062-.525l.7-1.2q.125-.25.4-.338.275-.087.55.038l1.175.525q.3-.3.813-.6.512-.3.937-.45l.175-1.3q.05-.275.25-.462.2-.188.475-.188h1.4q.275 0 .475.188.2.187.25.462L11 9.25q.425.15.938.45.512.3.812.6l1.175-.525q.275-.125.55-.038.275.088.4.338l.7 1.2q.125.25.063.525-.063.275-.288.45L14.3 13q.125.575.125 1 0 .425-.125 1l1.05.75q.225.175.288.45.062.275-.063.525l-.7 1.2q-.125.25-.4.338-.275.087-.55-.038L12.75 17.7q-.3.3-.812.6-.513.3-.938.45l-.175 1.3q-.05.275-.25.462-.2.188-.475.188Zm.7-4.4q.95 0 1.625-.675T11.7 14q0-.95-.675-1.625T9.4 11.7q-.95 0-1.625.675T7.1 14q0 .95.675 1.625T9.4 16.3Zm0-2.3Z"/>
    </Icon>
  );
});

IconMaterialSettingsSuggestW100Filled.displayName = 'AmauiIconMaterialSettingsSuggestW100Filled';

export default IconMaterialSettingsSuggestW100Filled;
