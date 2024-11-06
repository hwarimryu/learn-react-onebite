import {useState, useRef} from "react"

const Register = () => {
    const countRef = useRef(0);
    const inputRef = useRef();

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    });

    const onChange = (e) => {
        // countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if(input.name === "") {
            inputRef.current.focus();
        }

        if(input.birth === "") {
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
            <input 
                ref = {inputRef}
                name = "name"
                value = {input.name} 
                onChange={onChange} 
                placeholder={"이름"}/>
            </div>
            <div>
            <input 
                ref = {inputRef}
                name = "birth"
                type = "date"
                value = {input.birth} 
                onChange={onChange} />
            </div>
            <div>
            <select
                ref = {inputRef}
                name="country"
                value={input.country}
                onChange={onChange}>
                <option></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="ch">중국</option>
            </select>
            </div>
            <div>
            <textarea 
            name="bio"
            value={input.bio}
            onChange={onChange}/>
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;