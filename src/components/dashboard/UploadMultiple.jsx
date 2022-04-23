/* eslint-disable no-sparse-arrays */
/* eslint-disable array-callback-return */
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import React, { useContext, useState } from 'react';
import { Container, ProgressBar, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { GlobalContext } from '../../App';
import { addEbook, getData } from '../../utils/api';
import { firebaseConfig } from '../../utils/firebase.config';

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

const UploadMultiple = () => {
  const { id } = useParams();

  const [files, setFiles] = useState([]);
  const [auth, setAuth] = useContext(GlobalContext);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile['id'] = Math.random();
      setFiles((prevState) => [...prevState, newFile]);
    }
  };

  const handleUpload = () => {
    const promises = [];
    files.map((file, index) => {
      const uploadTask = storage.ref(`/${file.name}`).put(file);
      promises.push(uploadTask);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref(file.name)
            .getDownloadURL()
            .then((url) => {
              const ebookObj = {
                title: files[index].name,
                writer: files[index].writer,
                category: files[index].category,
                size: Math.round(files[index].size),
                date: new Date().toISOString().slice(0, 10),
                url: url,
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
    });

    Promise.all(promises)
      .then(() => alert('All files uploaded'))
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid>
      <div
        style={{
          width: '100%',
          height: '100px',
          padding: '30px 10px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <input type='file' multiple onChange={handleChange} />
        <button
          style={{
            width: '160px',
            height: '40px',
            border: 'none',
            backgroundColor: 'skyBlue',
            fontWeight: 'bold',
            borderRadius: '4px',
          }}
          onClick={handleUpload}>
          Upload
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Category</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, i) => {
            console.log(file);
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{file.name}</td>
                <td>
                  <input
                    resource='true'
                    placeholder='Writer name'
                    type='text'
                    name='writer'
                    id='writer'
                    onChange={(e) => {
                      const newArray = [...files];
                      newArray[i].writer = e.target.value;
                      setFiles(newArray);
                    }}
                  />
                </td>
                <td>
                  <select
                    className='selectMenu'
                    onChange={(e) => {
                      const newArray = [...files];
                      newArray[i].category = e.target.value;
                      setFiles(newArray);
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
                    <option value='Business and Economics'>
                      Business and Economics
                    </option>
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
                    <option value='Jurisprudence and Law'>
                      Jurisprudence and Law
                    </option>
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
                </td>
                <td>
                  <ProgressBar now={progress} label={`${progress}%`} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default UploadMultiple;
