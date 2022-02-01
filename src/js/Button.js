import {useCallback} from 'react';

export function Button(props) {
    const {
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
            className = "button"
            onClick = {onClickHandler}
        >
            {value}
        </button>
    );
}
