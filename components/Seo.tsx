import Head from 'next/head';
import React, { FC } from 'react';

const Seo: FC<{
    title?: string;
    description?: string;
}> = ({
    title = 'Damilare Adebayo',
    description = 'Portfolio website',
}) => {
        return (
            <Head>
                <title>{title ? `${title} | Portfolio` : `Damilare's Portfolio`}</title>
                <meta name='description' content={description} />
                <link rel='icon' href='favicon.ico' />
            </Head>
        );
    };

export default Seo;
