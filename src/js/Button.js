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
        <div
            className = {`button ${className}`}
            onClick = {onClickHandler}
        >
            <strong>{value}</strong>
        </div>
    );
}
