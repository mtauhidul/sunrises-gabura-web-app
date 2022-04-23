/* eslint-disable no-sparse-arrays */
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext, useState } from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { GlobalContext } from '../../App';
import { addEbook, getData } from '../../utils/api';
import { firebaseConfig } from '../../utils/firebase.config';
import styles from './Upload.module.css';

const depts = [
  'Accounting',
  'Agricultural Credit',
  'Agricultural Economics',
  'Agricultural Products',
  'Agriculture',
  'America',
  'Animals',
  'Anthropology',
  ,
  'Arabic History',
  ,
  'Architecture',
  ,
  'Art and Photography',
  ,
  'Astronomy',
  ,
  'Auditing',
  ,
  'Autobiography',
  ,
  'Automobile mechanics',
  ,
  'Bangabandhu',
  ,
  'Bangla Encyclopedia',
  ,
  'Bangla Folk-Literature',
  ,
  'Bangla Language',
  ,
  'Bangla Literature',
  ,
  'Bangla Rachanabali',
  ,
  'Bangla Story',
  ,
  'Bangla Upanyas samagra',
  ,
  'Bangla-Child Literature',
  ,
  'Bangla-Detective Fiction',
  ,
  'Bangla-Kabita',
  ,
  'Bangla-Natok',
  ,
  'Bangla-Prabandha',
  ,
  'Bangla-Science Fiction',
  ,
  'Bangla-Translated Literature',
  ,
  'Bangla-Upanyas Samagra',
  ,
  'Bangladesh',
  ,
  'Bangladesh Bank',
  ,
  'Bangladesh Economics',
  ,
  'Bangladesh service Rules',
  ,
  'Bangladeshi Jurnal',
  ,
  'Bangladeshi Jurnel',
  ,
  'Banking Diploma',
  ,
  'Banking Law',
  ,
  'Banks and Banking',
  ,
  'Banks and banking, International',
  ,
  'Bibliographies of works from specific subjects',
  ,
  'Biochemistry',
  ,
  'Biography',
  ,
  'Biography-Bangla Sahityik',
  ,
  'Biology',
  ,
  'Botany',
  ,
  'Budgeting - Public',
  ,
  'Business',
  ,
  'Business Communication',
  ,
  'Business enterprises',
  ,
  'Business Law',
  ,
  'Business Statistics',
  ,
  'Calculus',
  ,
  'Central Banking and Reports',
  ,
  'CFA - Chartered Financial Analyst',
  ,
  'Chemistry',
  ,
  'Children Literature',
  ,
  'Civil Service',
  ,
  'Coins',
  ,
  'Commercial Bank',
  ,
  'Computer Programming',
  ,
  'Computer Science',
  ,
  'Constitutional law',
  ,
  'Cooking',
  ,
  'Corporate Governance',
  ,
  'Cost Accounting',
  ,
  'Credit',
  ,
  'Criminal Law',
  ,
  'Criminology',
  ,
  'Debt Management',
  ,
  'Decective, mystery, spy fiction',
  ,
  'Development',
  ,
  'Dictionary - Encyclopedia',
  ,
  'Drama',
  ,
  'e-Books',
  ,
  'E-Commerce',
  ,
  'Earth Sciences',
  ,
  'Ecology',
  ,
  'Econometrics',
  ,
  'Economic Development and Growth',
  ,
  'Economics',
  ,
  'Education',
  ,
  'Education',
  ,
  'Engineering',
  ,
  'English Language',
  ,
  'English Story',
  ,
  'English Story',
  ,
  'Entertainment and Recreation',
  ,
  'Entrepreneurship',
  ,
  'Environment',
  ,
  'Ethics and morality',
  ,
  'Film',
  ,
  'Finance',
  ,
  'Financial Economics',
  ,
  'Financial Management',
  ,
  'First World War',
  ,
  'Food',
  ,
  'Food',
  ,
  'Foreign exchange',
  ,
  'Foreign Trade and Foreign Remittance',
  ,
  'Galpa-Bangla',
  ,
  'Game',
  ,
  'General encyclopedic works in other languages',
  ,
  'General Knowledge',
  ,
  'Generalities',
  ,
  'Geography and Travel',
  ,
  'Geology',
  ,
  'Geophysics',
  ,
  'Geopraphy Of Bangladesh',
  ,
  'Globalization',
  ,
  'Grantha',
  ,
  'Hadith',
  ,
  'Hindu Religion',
  ,
  'History and Culture',
  ,
  'History of Ancient World',
  ,
  'History of Dhaka',
  ,
  'Home economics and family living',
  ,
  'Human Resource Management',
  ,
  'Hunting, fishing, conservation',
  ,
  'India',
  ,
  'Industry',
  ,
  'Insurance',
  ,
  'International development and growth',
  ,
  'International Economics',
  ,
  'International Politics and Relations',
  ,
  'International trade',
  ,
  'International Trade and Foreign Exchange',
  ,
  'Investment and Market',
  ,
  'IR Collections',
  ,
  'Islam',
  ,
  'Islam and Economics',
  ,
  'Islami Banking',
  ,
  'Jokes Bangla',
  ,
  'Journalism',
  ,
  'Kabita',
  ,
  'Knowledge',
  ,
  'Labour Economics',
  ,
  'Land economics',
  ,
  'Language',
  ,
  'Language Movement',
  ,
  'Law',
  ,
  'Lecture of Political Leaders',
  ,
  'Letters',
  ,
  'Liberation war - Bangladesh',
  ,
  'Library operations',
  ,
  'Library Science',
  ,
  'Literary Criticism - Bangla',
  ,
  'Literature',
  ,
  'Macroeconomics',
  ,
  'Management',
  ,
  'Managerial economics',
  ,
  'Map Atlas',
  ,
  'Marketing',
  ,
  'Married Life',
  ,
  'Mathematical Economics',
  ,
  'Mathematical Statistics',
  ,
  'Mathematics',
  ,
  'Media',
  ,
  'Medical Science',
  ,
  'Merchant Banking',
  ,
  'Microeconomics',
  ,
  'Mobile Banking',
  ,
  'Money',
  ,
  'Muhammad (S.) -',
  ,
  'Music',
  ,
  ,
  ,
  'Nari Andolon',
  ,
  'Natural Science',
  ,
  'Non-profit organization',
  ,
  'Novel',
  ,
  'Online Banking',
  ,
  'Online Database',
  ,
  'Personal Names',
  ,
  'Personnel administration',
  ,
  'Philosophy and philosophical History',
  ,
  'Physics',
  ,
  'Poem',
  ,
  'Political Science: Politics and Government',
  ,
  'Politics: Bangladesh and foreign Policy',
  ,
  'Population',
  ,
  'Poverty',
  ,
  'Probabilities and applied mathematics',
  ,
  'Production',
  ,
  'Programming Language',
  ,
  'Project Management',
  ,
  'Psychology',
  ,
  'Public Administration',
  ,
  'Public Expenditure',
  ,
  'Public Finance',
  ,
  'Quran',
  ,
  'Rabindranath',
  ,
  'Rachanabali Bangla',
  ,
  'Religion',
  ,
  'Research',
  ,
  'Risk Management',
  ,
  'River and Port',
  ,
  'Sampling Techniques',
  ,
  'Science',
  ,
  'Science and Technology',
  ,
  'Science Fiction',
  ,
  'Short Stories',
  ,
  'Small Medium Entrepreneurs',
  ,
  'Social Economics',
  ,
  'Social Group',
  ,
  'Social Problems and Services; Associations',
  ,
  'Social Science',
  ,
  'Social Speech',
  ,
  'Sociology and Anthropology',
  ,
  'Song bangla',
  ,
  'Space and Astronomy',
  ,
  'Specialised Bank',
  ,
  'Statistics',
  ,
  'Sylhet History',
  ,
  'Systems',
  ,
  'Technology',
  ,
  'Theology and Ethics',
  ,
  'Tourism',
  ,
  'Trade',
  ,
  'Translated Literature-Bangla',
  ,
  'Travel',
  ,
  'Travel and Tours-Bangladesh',
  ,
  'Travels and Tours - India',
  ,
  'Upanyas-Bangla',
  ,
  'Women Empowerment',
  ,
  'Zoology and Animal Science',
];

const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

const Upload = () => {
  const [auth, setAuth] = useContext(GlobalContext);
  const [file, setFile] = useState('');
  const [writer, setWriter] = useState('');
  const [category, setCategory] = useState('');
  const { id } = useParams();
  const [uploaded, setUploaded] = useState('');

  const storeFile = async () => {
    if (file !== null) {
      const storageRef = ref(storage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      await storage
        .ref(`/${file.name}`)
        .put(file)
        .on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploaded(Math.round(progress));
            console.log(progress);
            if (progress === 100) {
              setFile('');
              setWriter('');
              setCategory('');
              document.getElementById('writer').value = '';
              document.getElementById('ebookFile').value = '';
            }
          },
          (error) => {
            return error;
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              const ebookObj = {
                title: file.name,
                writer: writer,
                category: category,
                size: Math.round(file.size),
                date: new Date().toISOString().slice(0, 10),
                url: downloadURL,
                id: uuid(),
              };

              const addBook = async () => {
                const authorId = window.sessionStorage.getItem('token');

                await addEbook(id, authorId, ebookObj);

                const res = await getData('author', authorId);
                setAuth(res);
              };
              addBook();
            });
          }
        );
    }
  };

  return (
    <Container className={styles.upload} fluid>
      <div>
        <h2>Ebook Upload</h2>
        {uploaded && (
          <ProgressBar
            className={styles.ProgressBar}
            now={uploaded}
            label={`${uploaded}%`}
          />
        )}

        <input
          id='ebookFile'
          resource='true'
          className={styles.uploadBtnWrapper}
          type='file'
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <br />
        <input
          resource='true'
          placeholder='Writer name'
          type='text'
          name='writer'
          id='writer'
          onChange={(e) => {
            setWriter(e.target.value);
          }}
        />
        <br />
        <select
          className='selectMenu'
          id={styles.selectMenu}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          name='category'>
          <option value='none' selected disabled hidden>
            Select a category
          </option>

          <option value='Arts'>Arts</option>
          <option value='Astronomy'>Astronomy</option>
          <option value='Biography & Autobiography'>
            Biography & Autobiography
          </option>
          <option value='Biology and Other Natural Sciences'>
            Biology and Other Natural Sciences
          </option>
          <option value='Business and Economics'>Business and Economics</option>
          <option value='Chemistry'>Chemistry</option>
          <option value="Children's Books">Children's Books</option>
          <option value='Comics and Graphic Novels'>
            Comics and Graphic Novels
          </option>
          <option value='Computers'>Computers</option>
          <option value='Crime, Thrillers and Mystery'>
            Crime, Thrillers and Mystery
          </option>
          <option value='Education Studies and Teaching'>
            Education Studies and Teaching
          </option>
          <option value='Engineering'>Engineering</option>
          <option value='Fiction'>Fiction</option>
          <option value='Earth Sciences'>Earth Sciences</option>
          <option value='History'>History</option>
          <option value='Housekeeping and Leisure'>
            Housekeeping and Leisure
          </option>
          <option value='Jurisprudence and Law'>Jurisprudence and Law</option>
          <option value='Languages'>Languages</option>
          <option value='Linguistics'>Linguistics</option>
          <option value='Mathematics'>Mathematics</option>
          <option value='Medicine'>Medicine</option>
          <option value='Nature, Animal and Pets'>
            Nature, Animal and Pets
          </option>
          <option value='Others'>Others</option>
          <option value='Physics'>Physics</option>
          <option value='Poetry'>Poetry</option>
          <option value='Psychology'>Psychology</option>
          <option value='Reference'>Reference</option>
          <option value='Science'>Science</option>
          <option value='Science Fiction and Fantasy'>
            Science Fiction and Fantasy
          </option>
          <option value='Self-help, Relationships & Lifestyle'>
            Self-help, Relationships & Lifestyle
          </option>
          <option value='Society, Politics & Philosophy'>
            'Society, Politics & Philosophy
          </option>
          <option value='Sports, Hobbies & Games'>
            'Sports, Hobbies & Games
          </option>
          <option value='Technique'>Technique</option>
          <option value='Travel'>Travel</option>
          {depts.map((dept, index) => {
            return (
              <option key={index} value={dept}>
                {dept}
              </option>
            );
          })}
        </select>
        <br />
        <button onClick={() => storeFile()}>Upload</button>
      </div>
    </Container>
  );
};

export default Upload;
