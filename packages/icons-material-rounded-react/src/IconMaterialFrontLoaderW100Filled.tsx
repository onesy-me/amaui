import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFrontLoaderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontLoaderW100Filled'

      short_name='FrontLoader'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M185-196q-39 0-66.5-27.5T91-290v-208q0-25 17.5-42.5T151-558h211v-169q0-13 8.5-21.5T392-757h121q39 0 66.5 27.5T607-663v169h56v-56q0-11 4-21t12-18l22-22q11-11 26-9t22 16l101 190q8 15-1 29.5T823-370H717q-22 0-37.5-15.5T663-424v-42h-56v95q22 13 34.5 34t12.5 47q0 39-27.5 66.5T560-196q-35 0-61.5-22T467-275H278q-5 35-31.5 57T185-196Zm0-28q27 0 46.5-19.5T251-290q0-27-19.5-46.5T185-356q-27 0-46.5 19.5T119-290q0 27 19.5 46.5T185-224Zm375 0q27 0 46.5-19.5T626-290q0-27-19.5-46.5T560-356q-27 0-46.5 19.5T494-290q0 27 19.5 46.5T560-224Zm267-174L723-594l-24 25q-4 4-6 9t-2 10v126q1 11 8 18.5t18 7.5h110Zm-437-96h189v-169q0-27-19.5-46.5T513-729H390v235Z"/>
    </Icon>
  );
});

IconMaterialFrontLoaderW100Filled.displayName = 'OnesyIconMaterialFrontLoaderW100Filled';

export default IconMaterialFrontLoaderW100Filled;
