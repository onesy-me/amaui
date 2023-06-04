import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStadiumW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StadiumW100'

      short_name='Stadium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.475 6.7q-.2.1-.387-.012Q4.9 6.575 4.9 6.35v-1.9q0-.225.188-.338.187-.112.387-.012l1.9.95q.125.05.175.137.05.088.05.213t-.05.212q-.05.088-.175.138Zm12 0q-.2.1-.387-.012-.188-.113-.188-.338v-1.9q0-.225.188-.338.187-.112.387-.012l1.9.95q.125.05.175.137.05.088.05.213t-.05.212q-.05.088-.175.138Zm-5.6-.8q-.2.1-.387-.013-.188-.112-.188-.337v-1.9q0-.225.188-.338.187-.112.387-.012l1.9.95q.125.05.175.137.05.088.05.213t-.05.212q-.05.088-.175.138ZM10.35 21.075q-1.675-.075-3-.287-1.325-.213-2.262-.526-.938-.312-1.438-.7-.5-.387-.5-.812v-8q0-.5.65-.925.65-.425 1.825-.738 1.175-.312 2.8-.5Q10.05 8.4 12 8.4q1.95 0 3.575.187 1.625.188 2.8.5 1.175.313 1.825.738.65.425.65.925v8q0 .425-.5.812-.5.388-1.437.7-.938.313-2.263.526-1.325.212-3 .287V17.1h-3.3ZM12 12.4q2.5 0 4.788-.425 2.287-.425 3.362-1.15-.425-.65-2.537-1.188Q15.5 9.1 12 9.1q-3.5 0-5.612.537-2.113.538-2.538 1.188 1.075.725 3.075 1.15 2 .425 5.075.425Zm-2.35 7.925V17.1q0-.275.213-.488.212-.212.487-.212h3.3q.275 0 .488.212.212.213.212.488v3.225q2.475-.175 3.962-.637 1.488-.463 1.838-.938V11.6q-1.725.825-3.725 1.162-2 .338-4.425.338t-4.425-.338q-2-.337-3.725-1.162v7.15q.35.475 1.687.938 1.338.462 4.113.637ZM12 15.95Z"/>
    </Icon>
  );
});

IconMaterialStadiumW100.displayName = 'AmauiIconMaterialStadiumW100';

export default IconMaterialStadiumW100;
