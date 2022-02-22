
import {useCallback} from 'react';

export function Notice(props) {
    const {
        children,
        title,
        setShowNotice,
    } = props;

    const onClickHandler = useCallback(
        () => {
            if (setShowNotice) {
                setShowNotice(false);
            }
        },
        [setShowNotice]
    );

    return (
        <div class="notice">
            <header className = "header">
                <button onClick={onClickHandler}>X</button>
                <div className = {'title'}>
                    <h1>{title}</h1>
                </div>
                <button onClick={onClickHandler}>X</button>
            </header>
            {children}
        </div>
    );
}
