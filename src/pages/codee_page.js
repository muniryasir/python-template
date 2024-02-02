import React, {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Codee from '../components/Codee';





export default function CodeePage() {

    return (
        <Layout title="Python IDE">
            <main>
                <Codee />
            </main>
            
        </Layout>
    );
}
