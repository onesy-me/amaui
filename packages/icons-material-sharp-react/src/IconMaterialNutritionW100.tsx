import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNutritionW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NutritionW100'

      short_name='Nutrition'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-172q-95 0-161.5-66.5T252-400q0-79 48-140.5T425-621q-27-5-48.5-20T341-679q-14-23-21.5-49.5T312-784q32 0 61 10.5t52 30.5q23 20 37.5 46t16.5 58q12-29 30.5-56.5T558-753l20 20q-29 29-46 54t-28 52q88 9 146 74t58 153q0 95-66.5 161.5T480-172Zm0-28q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-200Z"/>
    </Icon>
  );
});

IconMaterialNutritionW100.displayName = 'OnesyIconMaterialNutritionW100';

export default IconMaterialNutritionW100;
