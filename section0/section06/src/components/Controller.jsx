
const Controller = ({onClickButton}) => {
    return(
        <div>
            <button onClick={() => onClickButton(-1)}>-1</button>
            <button onClick={() => onClickButton(-10)} value={-10}>-10</button>
            <button onClick={() => onClickButton(-100)} value={-100}>-100</button>
            <button onClick={() => onClickButton(100)} value={100}>+100</button>
            <button onClick={() => onClickButton(10)} value={10}>+10</button>
            <button onClick={() => onClickButton(1)} value={1}>+1</button>
        </div>
    )
}

export default Controller;