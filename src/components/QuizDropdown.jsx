

//creates props that can be passed through to create dropdown options
const QuizDropdown = (props) => {

    //maps each option
    const selectOptions = props.data.map(option => (
        <option className="text-gray-900 p-3" key={option} value={option}>

            {option}

        </option>
    ))

    return (
        <>
            <select className="w-11/12 p-3 border-b-2 border-gray-300 focus:outline-0 focus:border-blue-500 bg-transparent">
                <option></option>
                {selectOptions}
            </select>
        </>
    ) 
}

export default QuizDropdown;