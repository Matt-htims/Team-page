import Image from 'next/image';
import styles from '../styles/Person.module.scss';

const Person = ({ image, job, name }) => {
	return (
		<div className={styles.person}>
			<div>
				<Image
					layout="intrinsic"
					src={image}
					alt={`Image of ${name}`}
					width="238"
					height="341"
				/>
				<p>{job}</p>
			</div>
			<p>{name}</p>
		</div>
	);
};

export default Person;
