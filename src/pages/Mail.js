import qs from 'qs';
import { Linking } from 'react-native';

async function sendEmail(to, subject, body, options = {}) {
    const { cc, bcc } = options;

    let url = `mailto:${to}`;
    console.log(to, subject, body);

    // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: bcc
    });

    console.log(query);

    if (query.length) {
        url += `?${query}`;
    }

    // check if we can use this link
    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }

    return Linking.openURL(url);
}
const Mail = () => {


    // onSubmit function
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let subject = e.target.subject.value;
        let body = e.target.body.value;

        sendEmail('info@envrac.net', subject, body);
    };

    return (
        <section className='content'>
            <form onSubmit={handleFormSubmit} id='mailtoForm'>
                <h1>Envoi de mail</h1>
                <input
                    type='text'
                    name='subject'
                    style={{ margin: "1rem 0" }}
                    placeholder="Objet"
                />
                <input
                    type='text'
                    name='body'
                    style={{ margin: "1rem 0" }}
                    placeholder="Texte de l'email"
                />
                <br />
                <input type='submit' />
            </form>
        </section>
    );

}

export default Mail