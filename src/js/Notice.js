
import {useCallback} from 'react';
import backSvg from '../resources/back-standard.svg';
import blankSvg from '../resources/blank.svg';

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
                <img src = {backSvg} onClick = {onClickHandler}/>
                <h1 className = {"notice-title"}>{title}</h1>
                <img src = {blankSvg}/>
            </header>
            {children}
        </div>
    );
}
