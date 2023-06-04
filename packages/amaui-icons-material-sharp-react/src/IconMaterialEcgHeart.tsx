import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEcgHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EcgHeart'

      short_name='EcgHeart'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M148 641q-35-35-51.5-80T80 467q0-103 67-177t167-74q48 0 90.5 19t75.5 53q32-34 74.5-53t90.5-19q100 0 167.5 74T880 466q0 49-17 94t-51 80L479 974 148 641Zm166-345q-66 0-110 50.5T160 466q0 18 3 35.5t10 34.5h208l47 70 54-172h71l68 102h166q7-17 10.5-34.5T801 466q-2-69-46-118.5T645 298q-31 0-59.5 12T536 345l-42 45h-29l-42-45q-21-23-49-36t-60-13Zm166 564 243-244H578l-46-70-54 173h-72l-68-103H236l244 244Zm0-282Z"/>
    </Icon>
  );
});

IconMaterialEcgHeart.displayName = 'AmauiIconMaterialEcgHeart';

export default IconMaterialEcgHeart;
