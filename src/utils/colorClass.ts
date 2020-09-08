export type ColorClass =
    | 'default'
    | 'white'
    | 'light'
    | 'dark'
    | 'black'
    | 'text'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';

export const getColorClass = (size: ColorClass, isLight: boolean = false) => {
    let className = '';

    const lightClass = 'is-light';

    switch (size) {
        case 'white':
            className += 'is-white';
            break;
        case 'light':
            className += 'is-light';
            break;
        case 'dark':
            className += 'is-dark';
            break;
        case 'black':
            className += 'is-black';
            break;
        case 'text':
            className += 'is-text';
            break;
        case 'primary':
            className += 'is-primary';
            break;
        case 'link':
            className += 'is-link';
            break;
        case 'info':
            className += 'is-info';
            break;
        case 'success':
            className += 'is-success';
            break;
        case 'warning':
            className += 'is-warning';
            break;
        case 'danger':
            className += 'is-danger';
            break;

        default:
    }

    if (isLight) {
        className += ' ' + lightClass;
    }

    return className.trim() + ' ';
};
