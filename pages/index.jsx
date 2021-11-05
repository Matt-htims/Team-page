import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

//Components
import Person from '../components/Person';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Team Page</title>
				<meta
					name="description"
					content="My Team Page challenge from devChallenges.io completed by Matt-htims"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.topSection}>
					<h1>The creative crew</h1>
					<div>
						<h4>WHO WE ARE</h4>
						<p>
							We are team of creatively diverse. driven. innovative individuals
							working in various locations from the world.
						</p>
					</div>
				</div>
				<div className={styles.peopleContainer}>
					<div>
						<Person
							name="Bill Mahoney"
							job="PRODUCT OWNER"
							image="/photo1.png"
						/>
					</div>
					<div>
						<Person
							name="Saba Cabrera"
							job="ART DIRECTOR"
							image="/photo2.png"
						/>
					</div>
					<div>
						<Person name="Shae Le" job="TECH LEAD" image="/photo3.png" />
					</div>
					<div>
						<Person name="Sklah Lu" job="UX DESIGNER" image="/photo4.png" />
					</div>
					<div>
						<Person name="Griff Richards" job="DEVELOPER" image="/photo5.png" />
					</div>
					<div>
						<Person name="Stan John" job="DEVELOPER" image="/photo6.png" />
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				<p>
					created by <a href="https://github.com/Matt-htims">Matt-htims</a> -
					devChallenges.io
				</p>
			</footer>
		</div>
	);
}
