import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBikeScooterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BikeScooterW100'

      short_name='BikeScooter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M12-226v-28h186q6-72 57-125t119-59l-67-308H158v-28h172l78 362h-8q-71.77 0-122.89 51.11Q226-309.77 226-238v12H12Zm388.12 82q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Zm-.12-28q27 0 46.5-19.5T466-238q0-27-19.5-46.5T400-304q-27 0-46.5 19.5T334-238q0 27 19.5 46.5T400-172Zm372-96q-69 0-117.5-43.5T598-426H486l-6-28h118q3-29 22.5-71.5T678-588H452l-6-28h246l-77-210h-97v-28h117l87 238h50q74 0 124 50t50 124q0 71-52.5 122.5T772-268Zm-.04-26Q834-294 876-337q42-43 42-103.4 0-61.6-41.97-103.6-41.98-42-104.03-42-11 0-21 .5t-19 3.5l42 112-26 10-40-112q-39 20-60.5 57T626-440q0 60 41.96 103 41.97 43 104 43ZM400-238Zm372-202Z"/>
    </Icon>
  );
});

IconMaterialBikeScooterW100.displayName = 'OnesyIconMaterialBikeScooterW100';

export default IconMaterialBikeScooterW100;
