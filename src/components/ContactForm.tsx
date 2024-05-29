import { useState } from 'react'

const ContactForm = () => {
    const [result, setResult] = useState<string | undefined>(undefined)
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append('access_key', 'YOUR_ACCESS_KEY_HERE')

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        if (data.success) {
            setResult('Votre message a bien été envoyé !')
            event.target.reset()
        } else {
            setResult("Une erreur s'est produit, merci de réessayer.")
        }
    }

    return (
        <div className="contact-form">
            <span>{result}</span>
            <form onSubmit={handleSubmit} data-astro-reload noValidate>
                <input type="checkbox" className="hidden" name="botcheck" />
                <fieldset>
                    <div>
                        <label htmlFor="firstname">
                            Prénom <span>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Prénom"
                            required
                            name="firstname"
                            id="firstname"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastname">
                            Nom <span>*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Nom"
                            required
                            name="lastname"
                            id="lastname"
                        />
                    </div>
                </fieldset>
                <div>
                    <label htmlFor="email">
                        Addresse email <span>*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="email@email.fr"
                        name="email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject">
                        Sujet <span>*</span>
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Sujet"
                        name="subject"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">
                        Votre message <span>*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Message..."></textarea>
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default ContactForm

// ---

// <style>
//   .invalid-feedback,
//   .empty-feedback {
//     display: none;
//   }

//   .was-validated :placeholder-shown:invalid ~ .empty-feedback {
//     display: block;
//   }

//   .was-validated :not(:placeholder-shown):invalid ~ .invalid-feedback {
//     display: block;
//   }

//   .is-invalid,
//   .was-validated :invalid {
//     border-color: #dc3545;
//   }
// </style>
