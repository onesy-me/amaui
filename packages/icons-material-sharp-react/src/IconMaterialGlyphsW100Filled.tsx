import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGlyphsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlyphsW100Filled'

      short_name='Glyphs'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-851h22l135 307h-27l-35-77H179l-35 77h-27l135-307Zm-23 401q31 0 52.5 21.5T303-376q0 15-5 28.5T282-323l-33 32 64 65 57-56 20 20-56 57 56 56-20 19-56-56-60 61q-11 11-25.5 16.5T198-103q-30 0-51-22t-21-53q0-15 5.5-28.5T148-231l61-61-33-32q-11-11-16.5-24t-5.5-27q0-31 22-53t53-22Zm0 179-61 61q-6 6-9.5 14.5T155-178q0 19 13 32.5t32 13.5q9 0 17-3.5t15-10.5l61-61-64-64Zm-1-151q-19 0-32 13.5T183-376q0 9 3.5 17.5T196-344l32 33 32-32q7-7 10.5-15t3.5-17q0-20-13-33.5T228-422Zm33-384-70 159h144l-70-159h-4Zm430-47q5 8 8 16t5 17l-29 9h159v28h-43q-9 41-31.5 76T705-645q29 20 60.5 34t65.5 22l-6 28q-38-9-73.5-26T684-628q-33 24-70.5 40T536-562l-7-26q36-8 70-22t64-35q-30-28-51-63t-30-75h-56v-28h139q-2-8-4-15t-6-14l36-13Zm112 429 20 19-274 274-20-19 274-274Zm-223 12q14 0 24 10t10 24q0 14-10 24t-24 10q-14 0-24-10t-10-24q0-14 10-24t24-10Zm30-371q8 36 27 67t47 55q29-24 49.5-55t29.5-67H610Zm170 571q14 0 24 10t10 24q0 14-10 24t-24 10q-14 0-24-10t-10-24q0-14 10-24t24-10Z"/>
    </Icon>
  );
});

IconMaterialGlyphsW100Filled.displayName = 'OnesyIconMaterialGlyphsW100Filled';

export default IconMaterialGlyphsW100Filled;
