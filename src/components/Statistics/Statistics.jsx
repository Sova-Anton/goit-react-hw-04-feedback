export default function Statistics({good, neutral, bad, total, percentage }) {
    return (
        <ul>
             <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {percentage} %</li>
        </ul>
    )
}