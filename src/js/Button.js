import {useCallback} from 'react';

export function Button(props) {
    const {
        className,
        onClick,
        value,
    } = props;

    const onClickHandler = useCallback(
        () => {
            if (onClick) {
                onClick(value);
            }
        },
        [onClick]
    );

    return (
        <button
            className = {`button ${className}`}
            onClick = {onClickHandler}
        >
            {value}
        </button>
    );
}
