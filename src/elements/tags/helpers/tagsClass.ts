import { getSizeClass, SizeClass } from '../../../utils/sizeClass';

/* 
Tags : These are container class for tag elements
*/
export interface TagsConfig {
    className?: string;
    hasAddons?: boolean;
    prefix?: string;
    scale?: SizeClass;
}
export const getTagsClass = ({
    className = '',
    hasAddons = false,
    prefix = 'tags',
    scale = 'default',
    ...restPayload
}: TagsConfig) => {
    let name = prefix + ' ';

    name += getSizeClass(true, scale);

    if (hasAddons) {
        name += 'has-addons ';
    }

    name = name.trim();

    name += ' ' + className;

    return { className: name.trim(), restPayload };
};
