import { useEffect } from 'react';
import './App.css';
import { links } from '../data/data';
import { Helmet } from 'react-helmet';

function App() {
    /* const ids = window.location.pathname.split('/')[1]; */
    const ids = "onexbet"

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Replace 'https://example.com' with the external link you want to redirect to
            /* if (!links[ids]) {
                console.log('ERROR');
            } else {
                console.log('DEF');
                window.location.replace(links[ids].link);
            } */
            window.location.replace(links[ids].link);
        }, 600);

        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
    }, []);

/*     if (!links[ids])
        return (
            <div>
                <h3>Invalid Link ....</h3>
            </div>
        );
 */
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>One</title>
                <meta name="description" content="Linked to the moon" />
            </Helmet>
            <h1>Let's go!</h1>
            <h2>Philippines</h2>
            <h4>Sports Best</h4>
        </div>
    );
}

export default App;
