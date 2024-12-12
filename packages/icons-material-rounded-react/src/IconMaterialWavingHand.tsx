import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWavingHand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WavingHand'

      short_name='WavingHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-39q-17 0-28.5-12T640-80q0-17 11.5-28.5T680-120q66 0 113-47t47-113q0-17 12-29t29-12q17 0 28.5 12t11.5 29q0 100-70.5 170.5T680-39ZM80-640q-17 0-29-11.5T39-680q0-100 70.5-170.5T280-921q17 0 29 11.5t12 28.5q0 17-12 29t-29 12q-66 0-113 47t-47 113q0 17-11.5 28.5T80-640Zm689-143q12 12 12 28t-12 28L515-472q-11 12-27.5 11.5T459-472q-12-12-12-28.5t12-28.5l254-254q12-12 28-12t28 12Zm71 127q12 12 12 28.5T840-599L614-373q-11 11-27.5 11T558-373q-12-12-12.5-28.5T557-430l226-226q12-12 28.5-12t28.5 12ZM211-211q-91-91-91-219t91-219l92-92q12-12 28-12t28 12l31 31q7 7 12 14.5t10 15.5l148-149q12-12 28.5-12t28.5 12q12 12 12 28.5T617-772L444-599l-85 84 19 19q46 46 44 110t-49 111l-1 1q-11 11-27.5 11T316-274q-12-12-12-28.5t12-28.5q23-23 25.5-54.5T321-440l-47-46q-12-12-12-28.5t12-28.5l57-56q12-12 12-28.5T331-656l-64 64q-68 68-68 162.5T267-267q68 68 163 68t163-68l239-240q12-12 28.5-12t28.5 12q12 12 12 28.5T889-450L649-211q-91 91-219 91t-219-91Zm219-219Z"/>
    </Icon>
  );
});

IconMaterialWavingHand.displayName = 'OnesyIconMaterialWavingHand';

export default IconMaterialWavingHand;
