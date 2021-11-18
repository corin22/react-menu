import Button from './Button'

function Word({ handleRemove, w}){
    const onRemove = (e) => {
        handleRemove(e)
    }
    return(
        <div key={id} style={wordStyle}>
            <h2>{w.word}</h2>
            <Button size="small" type="button" handleClick={(e) => onRemove(e)}>DELETE</Button>
        </div>
    )
}

export default Word