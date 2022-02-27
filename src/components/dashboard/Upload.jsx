import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';
import { GlobalContext } from '../../App';
import { updateData } from '../../utils/api';
import { firebaseConfig } from '../../utils/firebase.config';
import styles from './Upload.module.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

const Upload = () => {
  const [auth, setAuth] = useContext(GlobalContext);
  const [file, setFile] = useState('');
  const [url, setUrl] = useState('');
  const [writer, setWriter] = useState('');
  const [category, setCategory] = useState('');
  const { id } = useParams();

  const addEbook = async (data) => {
    console.log(data);
    const response = await updateData(id, data);
    console.log(response);
  };

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
              const newObject = { ...auth };
              newObject.books.push(ebookObj);
              setAuth(newObject);
            });
          }
        );

      addEbook(auth);
      return response;
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
        <input
          resource='true'
          placeholder='Category name'
          type='text'
          name='category'
          id='category'
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <br />
        <button onClick={() => storeFile()}>Upload</button>
      </div>
    </Container>
  );
};

export default Upload;
