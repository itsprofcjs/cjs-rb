export type AlignmentClass = 'centered' | 'default' | 'left' | 'right';

export const getAlignmentClass = (size: AlignmentClass) => {
    let className = '';

    switch (size) {
        case 'centered':
            className += 'is-centered';
            break;
        case 'right':
            className += 'is-right';
            break;
        default:
    }

    return className.trim() + ' ';
};
