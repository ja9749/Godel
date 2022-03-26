import {useEffect} from "react";

export function TempNotice(props) {
    const {
        answer,
        children,
        setShowTempNotice,
        setNoticeTitle,
        setShowNotice,
        showResultsAfter,
    } = props;

    useEffect(() => {
        setTimeout(function () {
            setShowTempNotice(false);

            console.log('showResultsAfter', showResultsAfter);
            if (showResultsAfter) {
                setShowNotice(true);
                setNoticeTitle('Results');
            }
        }, 2000);
    }, []);

    return (
        <div className={'temp-notice'}>
            {children}
        </div>
    );
};
