export type ColorClass =
    | 'black'
    | 'danger'
    | 'dark'
    | 'default'
    | 'info'
    | 'light'
    | 'link'
    | 'primary'
    | 'success'
    | 'text'
    | 'warning'
    | 'white';

export const getColorClass = (isLight: boolean = false, size: ColorClass) => {
    let className = '';

    const lightClass = 'is-light';

    switch (size) {
        case 'black':
            className += 'is-black';
            break;
        case 'danger':
            className += 'is-danger';
            break;
        case 'dark':
            className += 'is-dark';
            break;
        case 'info':
            className += 'is-info';
            break;
        case 'light':
            className += 'is-light';
            break;
        case 'link':
            className += 'is-link';
            break;
        case 'primary':
            className += 'is-primary';
            break;
        case 'success':
            className += 'is-success';
            break;
        case 'text':
            className += 'is-text';
            break;
        case 'warning':
            className += 'is-warning';
            break;
        case 'white':
            className += 'is-white';
            break;

        default:
    }

    if (isLight) {
        className += ' ' + lightClass;
    }

    return className.trim() + ' ';
};
