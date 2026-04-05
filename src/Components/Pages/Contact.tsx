import '../Styles/Contact.css';
import { useState, ChangeEvent, FormEvent} from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        subject: "",
        message: ""
    });
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault();
        console.log("Form submitted", formData);
        setFormData({
            subject: "",
            message: ""
        });
    }
    return(
        <>
            <div className="Contact-Container">
                <form className='Contact-Form' onSubmit={handleSubmit}>
                    <div className="Contact-Me">Contact Me</div>
                    <label className="Contact-Subject">Subject: </label>
                    <input className='Contact-Subject-Value' 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    />
                    <br></br>
                    <label className="Contact-TextArea">Message: </label>
                    <textarea className='Contact-TextArea-Value' 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    />
                    <button className="Contact-Verzenden-Submit"
                        type="submit"
                        disabled={
                            !formData.subject ||
                            !formData.message
                        }
                    >
                        Verzenden.
                    </button>
                </form>
            </div>
        </>
    );

}
export default Contact;