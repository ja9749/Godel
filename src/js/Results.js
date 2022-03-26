export function Results(props) {
    const {
        game,
        img,
        url,
        word,
        finished,
    } = props;

    const answerDisplay = (
        <>
            <p>{'Today\'s Nintordle is '}<strong><a href={url}>{word}</a></strong></p>
            <p>{'From '}<strong>{game}</strong></p>
            <img src={`${process.env.PUBLIC_URL}/images/${word}.png`}  width = "100%"></img>
        </>
    );

    return (
        <div className={"results"}>
            {finished && answerDisplay}
        </div>
    );
}
