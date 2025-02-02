import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSoapW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoapW100'

      short_name='Soap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640.16-649Q622-649 609-661.84t-13-31Q596-711 608.84-724t31-13Q658-737 671-724.16t13 31Q684-675 671.16-662t-31 13ZM789-640q-23 0-38.5-15.5T735-694q0-23 15.5-38.5T789-748q23 0 38.5 15.5T843-694q0 23-15.5 38.5T789-640Zm-88.88-148Q686-788 676-797.88q-10-9.88-10-24t9.88-24.12q9.88-10 24-10t24.12 9.88q10 9.88 10 24T724.12-798q-9.88 10-24 10ZM708-132H132v-365l366-237 27 31-95 159h318v28H381l106-178-327 212v322h548v28ZM532-388v-28h296v28H532Zm0 128v-28h256v28H532ZM346-427Z"/>
    </Icon>
  );
});

IconMaterialSoapW100.displayName = 'OnesyIconMaterialSoapW100';

export default IconMaterialSoapW100;
