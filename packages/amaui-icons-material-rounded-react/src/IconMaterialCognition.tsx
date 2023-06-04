import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCognition = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cognition'

      short_name='Cognition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M491 717q70 0 119-45t49-109q0-57-36.5-96.5T534 427q-47 0-79.5 30T422 531q0 19 6.5 37.5T451 601q16 14 32 11.5t26-13.5q10-11 11.5-26.5T508 544q-2-2-4-5t-2-7q0-11 9-17.5t23-6.5q20 0 33 16.5t13 39.5q0 31-25.5 52.5T492 638q-47 0-79.5-38T380 507q0-19 4.5-37t13.5-34q8-15 8-31.5T394 376q-12-12-29-11.5T339 379q-20 28-30 60t-10 67q0 88 56 149.5T491 717Zm-251 87q-57-52-88.5-121.5T120 536q0-150 105-255t255-105q125 0 221.5 73.5T827 441l52 205q5 19-7 34.5T840 696h-80v120q0 33-23.5 56.5T680 896h-80v40q0 17-11.5 28.5T560 976q-17 0-28.5-11.5T520 936v-80q0-17 11.5-28.5T560 816h120V656q0-17 11.5-28.5T720 616h68l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v168q0 17-11.5 28.5T280 976q-17 0-28.5-11.5T240 936V804Zm254-188Z"/>
    </Icon>
  );
});

IconMaterialCognition.displayName = 'AmauiIconMaterialCognition';

export default IconMaterialCognition;
