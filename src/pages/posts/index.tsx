import Head from 'next/head';
import styles from './styles.module.scss';



export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                    <time>12 de março de 2021</time>
                    <strong>Creating a Monorepo wuith lerna e yarn workspace</strong>
                    <p>Nesse guia você vai aprender a criar um monorepo para gerenciar multiplos pacotes com ...</p>
                    </a>

                    <a href="#">
                    <time>12 de março de 2021</time>
                    <strong>Creating a Monorepo wuith lerna e yarn workspace</strong>
                    <p>Nesse guia você vai aprender a criar um monorepo para gerenciar multiplos pacotes com ...</p>
                    </a>

                    <a> href="#"
                    <time>12 de março de 2021</time>
                    <strong>Creating a Monorepo wuith lerna e yarn workspace</strong>
                    <p>Nesse guia você vai aprender a criar um monorepo para gerenciar multiplos pacotes com ...</p>
                    </a>
                </div>
            </main>
        </>
    );
}