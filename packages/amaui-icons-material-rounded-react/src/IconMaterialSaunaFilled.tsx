import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaunaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaunaFilled'

      short_name='Sauna'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 976q-33 0-56.5-23.5T80 896V256q0-33 23.5-56.5T160 176h640q33 0 56.5 23.5T880 256v640q0 33-23.5 56.5T800 976H160Zm0-240v160h80v-80h-20q-8 0-14-6t-6-14v-60h-40Zm0-80h40q0-17 11.5-28.5T240 616V516q0-25 17.5-42.5T300 456h80q25 0 42.5 17.5T440 516v100q17 0 28.5 11.5T480 656h320V256H160v400Zm180-240q-25 0-42.5-17.5T280 356q0-25 17.5-42.5T340 296q25 0 42.5 17.5T400 356q0 25-17.5 42.5T340 416Zm-20 480h40v-80h-40v80Zm120 0h360V736H480v60q0 8-6 14t-14 6h-20v80Zm30-481q-15-19-22.5-38t-7.5-39v-12q1-13 10.5-21.5T474 296q11 0 19 9t7 21v12q0 11 4.5 21.5T520 382q18 22 26 41.5t8 40.5q0 14-10 23t-24 9q-12 0-19.5-9.5T493 464q0-12-4.5-22T470 415Zm100 0q-15-19-22.5-38t-7.5-39v-12q1-13 10.5-21.5T574 296q11 0 19 9t7 21v12q0 11 4.5 21.5T620 382q18 22 26 41.5t8 40.5q0 14-10 23t-24 9q-12 0-19.5-9.5T593 464q0-12-4.5-22T570 415Zm102 0q-15-19-22.5-38t-7.5-39v-12q1-13 10.5-21.5T676 296q11 0 19 9t7 21v12q0 11 4.5 21.5T722 382q18 22 26 41.5t8 40.5q0 14-10 23t-24 9q-12 0-19.5-9.5T695 464q0-12-4.5-22T672 415Z"/>
    </Icon>
  );
});

IconMaterialSaunaFilled.displayName = 'AmauiIconMaterialSaunaFilled';

export default IconMaterialSaunaFilled;
