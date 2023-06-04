import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatColorFillW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatColorFillW100Filled'

      short_name='FormatColorFill'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 16.675q-.275 0-.55-.113-.275-.112-.5-.312l-3.65-3.7q-.225-.225-.337-.513-.113-.287-.113-.562 0-.3.113-.575.112-.275.337-.5l4.225-4.175L6.95 3.15q-.1-.1-.1-.238 0-.137.125-.262.1-.125.225-.125t.25.125l7.75 7.75q.225.225.338.5.112.275.112.575 0 .275-.112.562-.113.288-.338.513l-3.65 3.7q-.2.2-.488.312-.287.113-.562.113Zm.025-9.95L6.25 10.95q-.125.125-.162.262-.038.138-.038.288h8.9q0-.15-.037-.288-.038-.137-.163-.262ZM18.45 17.9q-.575 0-.962-.388-.388-.387-.388-.962 0-.425.212-.812.213-.388.438-.738.175-.25.35-.475.175-.225.35-.475.175.25.35.475.175.225.35.475.225.35.437.738.213.387.213.812 0 .575-.387.962-.388.388-.963.388ZM2.7 24q-.275 0-.487-.212Q2 23.575 2 23.3t.213-.488q.212-.212.487-.212h18.6q.275 0 .488.212.212.213.212.488t-.212.488Q21.575 24 21.3 24Z"/>
    </Icon>
  );
});

IconMaterialFormatColorFillW100Filled.displayName = 'AmauiIconMaterialFormatColorFillW100Filled';

export default IconMaterialFormatColorFillW100Filled;
