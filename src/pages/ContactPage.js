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
                        <p>Pineapple salsa golden cayenne pepper coconut chocolate spiced pumpkin chili ghost pepper citrusy sesame soba noodles extra crispy green onions almond milk. Chili scotch bonnet pepper balsamic vinaigrette tart bananas Caribbean red habanero cherries blueberries salted walnut pesto flakes.</p>
                        <Contact data={data} closePopup={closePopup} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactPage;