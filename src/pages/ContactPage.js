import { useEffect, useState } from 'react';
import Contact from '../components/Contact/Contact';
import { Link, useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsOpen(true)
    }, [])

    const data = [
        {label: 'Name', type: 'text'},
        {label: 'Email', type: 'email'},
        {label: 'Message', type: 'text'}
    ];

    const closePopup = () => {
        navigate('/');
        setIsOpen(false)
    }

    return (
        <div>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <Link className="close" to="/">
                            &times;
                        </Link>
                        <h2>Contact</h2>
                        <p>Pineapple salsa golden cayenne pepper coconut Chili scotch bonne salted walnut pesto flakes.</p>
                        <Contact data={data} closePopup={closePopup} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactPage;