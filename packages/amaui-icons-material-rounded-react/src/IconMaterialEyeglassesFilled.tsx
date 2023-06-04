import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEyeglassesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EyeglassesFilled'

      short_name='Eyeglasses'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M274 696q31 0 55.5-18t34.5-47l15-46q16-48-8-88.5T302 456H161l19 157q5 35 31.5 59t62.5 24Zm412 0q36 0 62.5-24t31.5-59l19-157H659q-45 0-69 41t-8 89l14 45q10 29 34.5 47t55.5 18Zm-412 80q-66 0-115.5-43.5T101 623L80 456q-17 0-28.5-11.5T40 416q0-17 11.5-28.5T80 376h222q44 0 80.5 21.5T440 456h81q21-37 57.5-58.5T659 376h221q17 0 28.5 11.5T920 416q0 17-11.5 28.5T880 456l-21 167q-8 66-57.5 109.5T686 776q-57 0-102.5-32.5T520 657l-15-45q-2-7-4-14.5t-4-21.5h-34q-2 12-4 19.5t-4 14.5l-15 46q-18 54-63.5 87T274 776Z"/>
    </Icon>
  );
});

IconMaterialEyeglassesFilled.displayName = 'AmauiIconMaterialEyeglassesFilled';

export default IconMaterialEyeglassesFilled;
