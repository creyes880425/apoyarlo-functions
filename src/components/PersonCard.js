const PersonCard = (props) => {
    return (
        <ul>
            <li><h1>{ props.lastName }, { props.firstName }</h1></li>
            <li><p>Age: { props.age }</p></li>
            <li><p>Hair Color: { props.hairColor }</p></li>
        </ul>
    );
}

export default PersonCard