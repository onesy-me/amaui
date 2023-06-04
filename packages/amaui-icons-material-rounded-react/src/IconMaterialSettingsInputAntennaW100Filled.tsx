import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputAntennaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputAntennaW100Filled'

      short_name='SettingsInputAntenna'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 18.5-2.75 2.75q-.1.1-.238.113-.137.012-.262-.113T8.625 21q0-.125.125-.25l2.9-2.9v-3.975Q11 13.7 10.562 13.2q-.437-.5-.437-1.175 0-.775.55-1.325.55-.55 1.325-.55.775 0 1.325.55.55.55.55 1.325 0 .675-.437 1.175-.438.5-1.088.675v3.975l2.9 2.9q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125ZM12 7q-1.95 0-3.387 1.325Q7.175 9.65 7.025 11.6q-.025.175-.125.287-.1.113-.25.113t-.262-.113q-.113-.112-.088-.262.15-2.275 1.788-3.8Q9.725 6.3 12 6.3t3.913 1.525Q17.55 9.35 17.7 11.6q.025.175-.087.287Q17.5 12 17.35 12q-.15 0-.25-.113-.1-.112-.125-.287-.15-1.95-1.588-3.275Q13.95 7 12 7Zm0-4Q8.375 3 5.787 5.487 3.2 7.975 3 11.6q0 .175-.1.287-.1.113-.25.113t-.25-.113q-.1-.112-.1-.262.1-1.95.888-3.65.787-1.7 2.1-2.963Q6.6 3.75 8.325 3.025 10.05 2.3 12 2.3q1.95 0 3.663.725Q17.375 3.75 18.688 5 20 6.25 20.8 7.95q.8 1.7.9 3.65 0 .175-.1.287-.1.113-.25.113t-.25-.113q-.1-.112-.1-.287-.2-3.625-2.788-6.113Q15.625 3 12 3Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputAntennaW100Filled.displayName = 'AmauiIconMaterialSettingsInputAntennaW100Filled';

export default IconMaterialSettingsInputAntennaW100Filled;
