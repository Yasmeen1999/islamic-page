import './Contact.css';

const Contact = ({ data, closePopup }) => {
    const renderedData = data && data.length && data.map((ele, i) => {
        return (
            <div className="contact-attr" key={ele.label}>
                <input type={ele.type} placeholder={ele.label} />
            </div>
        )
    })

    return (
        <div>
            {renderedData}
            <input type="submit" value="Send message" className="send-message" onClick={closePopup}/>
        </div>
    )
}

export default Contact;