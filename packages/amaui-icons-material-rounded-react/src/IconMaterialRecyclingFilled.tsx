import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecyclingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecyclingFilled'

      short_name='Recycling'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.775 8.95q.175.125.363.062.187-.062.312-.237l1.975-3.25-1.475-2.45q-.3-.5-.862-.5-.563 0-.863.5l-2.2 3.65q-.125.175-.062.362.062.188.237.313Zm10.1 7.05-1.95-3.275q-.1-.2-.05-.388.05-.187.225-.287l2.6-1.5q.175-.1.362-.05.188.05.313.225l1.35 2.25q.275.425.288.963.012.537-.213.962-.25.5-.738.8-.487.3-1.062.3Zm-3.725 6.15-2.8-2.8q-.15-.15-.15-.35 0-.2.15-.35l2.8-2.8q.25-.25.55-.125.3.125.3.475v.8h4.75l-1.45 2.9q-.275.5-.75.8-.475.3-1.05.3H16v.8q0 .35-.3.475t-.55-.125ZM6.325 21q-.5 0-.913-.262Q5 20.475 4.8 20.05q-.2-.4-.187-.838.012-.437.237-.812L5.7 17h3.8q.2 0 .35.15.15.15.15.35v3q0 .2-.15.35-.15.15-.35.15ZM3.85 18.15 2.225 14.9q-.225-.45-.212-.962.012-.513.287-.963l.4-.675-.675-.4q-.275-.175-.225-.513.05-.337.375-.412L6 10.025q.2-.05.375.05t.225.3l.95 3.85q.05.175-.012.312-.063.138-.175.225-.113.088-.263.101-.15.012-.3-.088l-.675-.425Zm13.025-8.675-3.825-.95q-.325-.075-.362-.413-.038-.337.237-.512l.675-.4L10.475 2H14q.525 0 .988.262.462.263.737.713l1.3 2.175.65-.4q.15-.1.3-.088.15.013.263.1.112.088.175.225.062.138.012.313l-.95 3.825q-.05.2-.225.3-.175.1-.375.05Z"/>
    </Icon>
  );
});

IconMaterialRecyclingFilled.displayName = 'AmauiIconMaterialRecyclingFilled';

export default IconMaterialRecyclingFilled;
