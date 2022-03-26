export function Results(props) {
    const {game,img,url,word} = props;

    return (
        <div className={"results"}>
            <p>{'Today\'s Nintordle is '}<strong><a href={url}>{word}</a></strong></p>
            <p>{'From '}<strong>{game}</strong></p>
            <img src={`${process.env.PUBLIC_URL}/images/${word}.png`}  width = "100%"></img>
        </div>
    );
}
