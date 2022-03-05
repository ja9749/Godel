export function Square(props) {
    const {
        className,
        value,
    } = props;

    return (
        <div className = {`square ${className}`}>
            <p>{value}</p>
        </div>
    );
}
