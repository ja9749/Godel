import {useEffect} from "react";
import {Results} from './Results';

export function TempNotice(props) {
    const {
        answer,
        children,
        setShowTempNotice,
        setNoticeContent,
        setNoticeTitle,
        setShowNotice,
        showResultsAfter,
    } = props;

    const results = (
        <Results
            game = {answer.game}
            img = {answer.img}
            url = {answer.url}
            word = {answer.word}
        />
    )

    useEffect(() => {
        setTimeout(function () {
            setShowTempNotice(false);

            console.log('showResultsAfter', showResultsAfter);
            if (showResultsAfter) {
                setShowNotice(true);
                setNoticeContent(results);
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
