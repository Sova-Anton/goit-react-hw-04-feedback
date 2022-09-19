export default function FeedbackOptions({handleButton} ) {
    return (
        <>
             <button type="button" onClick={() => handleButton('good')}>
            Good
          </button>
          <button type="button" onClick={() => handleButton('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => handleButton('bad')}>
            Bad
          </button>
        </>
    )
}