import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightGroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightGroupW100'

      short_name='LightGroup'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-132v-28h268v28H146Zm534.36-38q-23.36 0-39.86-17T624-227H494v-25q0-62 52.5-103T666-401v-376h28v376q68 5 120.5 46T867-252v25H737q0 23-16.28 40-16.29 17-40.36 17ZM266-226v-294H96l68-256h233l68 256H294v294h-28Zm258-28h312q-5-56-51.21-88t-105.03-32Q622-374 575.5-342 529-310 524-254ZM132-548h296l-53-200H186l-54 200Zm148-100Zm400 334Z"/>
    </Icon>
  );
});

IconMaterialLightGroupW100.displayName = 'OnesyIconMaterialLightGroupW100';

export default IconMaterialLightGroupW100;
