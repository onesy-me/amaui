import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLuggageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LuggageW100Filled'

      short_name='Luggage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-172q-24.75 0-42.37-17.63Q244-207.25 244-232v-408q0-24.75 17.63-42.38Q279.25-700 304-700h88v-68q0-24.75 17.63-42.38Q427.25-828 452-828h56q24.75 0 42.38 17.62Q568-792.75 568-768v68h88q24.75 0 42.38 17.62Q716-664.75 716-640v408q0 24.75-17.62 42.37Q680.75-172 656-172v12q0 11-8.5 19.5T628-132q-11 0-19.5-8.5T600-160v-12H360v12q0 11-8.5 19.5T332-132q-11 0-19.5-8.5T304-160v-12Zm101.96-420q-5.96 0-9.96 4.03-4 4.02-4 9.97v284q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-284q0-5.95-4.04-9.97-4.03-4.03-10-4.03Zm148 0q-5.96 0-9.96 4.03-4 4.02-4 9.97v284q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-284q0-5.95-4.04-9.97-4.03-4.03-10-4.03ZM420-700h120v-68q0-14-9-23t-23-9h-56q-14 0-23 9t-9 23v68Z"/>
    </Icon>
  );
});

IconMaterialLuggageW100Filled.displayName = 'OnesyIconMaterialLuggageW100Filled';

export default IconMaterialLuggageW100Filled;
