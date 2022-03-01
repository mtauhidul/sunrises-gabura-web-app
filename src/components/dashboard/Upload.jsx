import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { GlobalContext } from '../../App';
import { addEbook, getData } from '../../utils/api';
import { firebaseConfig } from '../../utils/firebase.config';
import styles from './Upload.module.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

const Upload = () => {
  const [auth, setAuth] = useContext(GlobalContext);
  const [file, setFile] = useState('');
  const [writer, setWriter] = useState('');
  const [category, setCategory] = useState('');
  const { id } = useParams();

  const storeFile = async () => {
    if (file !== null) {
      const storageRef = ref(storage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      const response = await storage
        .ref(`/${file.name}`)
        .put(file)
        .on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            return progress;
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
                size: file.size,
                date: new Date().toISOString().slice(0, 10),
                url: downloadURL,
                id: uuid(),
              };

              const addBook = async () => {
                const authorId = window.sessionStorage.getItem('token');

                const response = await addEbook(id, authorId, ebookObj);

                console.log(response);
                const res = await getData('author', authorId);
                setAuth(res);
              };
              addBook();
            });
          }
        );

      console.log(response);
    }
  };

  return (
    <Container className={styles.upload} fluid>
      <div>
        <h2>Ebook Upload</h2>
        <br />
        <input
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
          id={styles.selectMenu}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          name='category'>
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
        </select>
        <br />
        <button onClick={() => storeFile()}>Upload</button>
      </div>
    </Container>
  );
};

export default Upload;
