import React from 'react'
// import { Button } from 'ui'

const Home = () => {
    const [state, setState] = React.useState({});
    const [custom, setCustom] = React.useState(false);
    const defaultContent = require('./homeContent.js').default;
    const listACC = ['client-a', 'client-b'];
    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setState(user);
        if(listACC.includes(user.accountName)) {
            setCustom(true)
        } else {
            setCustom(false)
        }
    }, [])
    
    const Content = custom ? require(`ui/client-custom/${state.accountName}/home/index.js`).default : defaultContent;
    return (
        <div className="container">
            <Content />
        </div>
    )
}

export default Home