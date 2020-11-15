import React from 'react'
import { Helmet } from 'react-helmet'

function PageNonexistant() {
    return (
        <main>
            <Helmet>
                <title>??? We Can't Find It ???</title>
            </Helmet>
            <p>Yeah, this page is nonexistant</p>
        </main>
    )
}

export default PageNonexistant
