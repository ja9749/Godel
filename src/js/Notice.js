
import {useCallback} from 'react';
import back from '../resources/back-standard.svg';
import blank from '../resources/blank.svg';

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
        <div className = {"notice"}>
            <header className = {"header"}>
                <img src = {back} onClick = {onClickHandler}/>
                <h1 className = {"notice-title"}>{title}</h1>
                <img src = {blank}/>
            </header>
            {children}
        </div>
    );
}
