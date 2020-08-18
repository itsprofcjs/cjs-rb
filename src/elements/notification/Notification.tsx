import React, { HTMLAttributes } from 'react';

import { ColorClass, getColorClass } from '../utils/colorClass';
import Button from '../button/Button';

interface Props extends HTMLAttributes<HTMLDivElement> {
    isLight?: boolean;
    kind?: ColorClass;
}

const Notification = ({ children, className = '', isLight = false, kind = 'default' }: Props) => {
    let clsName = 'notification ';

    const colorClass = getColorClass(kind, isLight);

    clsName += colorClass;

    clsName += ' ' + className;

    clsName = clsName.trim();

    return (
        <section className={clsName}>
            <Button isDelete />
            {children}
        </section>
    );
};

export default Notification;
