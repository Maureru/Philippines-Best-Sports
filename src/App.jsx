import { useEffect } from 'react';
import './App.css';
import { links } from '../data/data';
import { Helmet } from 'react-helmet';

function App() {
    const ids = window.location.pathname.split('/')[1];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            // Replace 'https://example.com' with the external link you want to redirect to
            if (!links[ids]) {
                console.log('ERROR');
            } else {
                console.log('DEF');
                window.location.replace(links[ids].link);
            }
        }, 600);

        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
    }, []);

    if (!links[ids])
        return (
            <div>
                <h3>Invalid Link ....</h3>
            </div>
        );

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ids.toUpperCase()}</title>
                <meta name="description" content={`${links[ids].name}`} />
            </Helmet>
            <h1>{ids}</h1>
            <h3>Please Wait</h3>
        </div>
    );
}

export default App;
