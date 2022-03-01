import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import toast from 'react-hot-toast';
import { firebaseConfig } from './firebase.config';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// Toast Functions
const success = () => toast.success('Success');
const errorToast = () => toast.error('Error');
const loading = () => toast.loading('Loading...');
const dismiss = () => toast.dismiss();

// Add Data to Collection
export const addData = async (coll, data) => {
  loading();
  const docRef = await addDoc(collection(db, coll), data);
  if (docRef.id !== undefined) {
    dismiss();
    success();
  } else {
    dismiss();
    errorToast();
  }
};

// Login with GET
export const login = async (coll, data) => {
  loading();
  let document = {};
  const querySnapshot = await getDocs(collection(db, coll));
  querySnapshot.forEach((doc) => {
    const checkingEmail = doc.data().Email;
    const checkingPass = doc.data().Password;
    console.log(doc.data());
    if (checkingEmail === data.Email && checkingPass === data.Password) {
      dismiss();
      success();
      window.sessionStorage.setItem('isAuthenticated', true);
      window.sessionStorage.setItem('token', doc.id);
      window.sessionStorage.setItem('type', coll);
      doc.data().id = doc.id;
      document = doc.data();
      return document;
    } else {
      dismiss();
      errorToast();
      return false;
    }
  });
  return document;
};

// Get Single Document
export const getData = async (coll, id) => {
  loading();
  const docRef = doc(db, coll, id);
  const docSnap = await getDoc(docRef);
  let document = {};
  if (docSnap.exists()) {
    dismiss();
    success();
    docSnap.data().id = docSnap.id;
    document = docSnap.data();
    return document;
  } else {
    dismiss();
    errorToast();
    console.log('No such document!');
  }
};

// Add a New Ebook
export const addEbook = async (coll, id, data) => {
  loading();
  console.log(coll, id, data);
  const arrayRef = doc(db, coll, id);

  const response = await updateDoc(arrayRef, {
    books: arrayUnion(data),
  });
  dismiss();
  success();
  return response;
};

// Remove a Ebook
export const removeEbook = async (coll, id, data) => {
  console.log(coll, id, data);

  const arrayRef = doc(db, coll, id);

  const response = await updateDoc(arrayRef, {
    books: arrayRemove(data),
  });
  dismiss();
  success();
  return response;
};

// Update Status
export const updateStatus = async (coll, id, data) => {
  loading();
  const statusRef = doc(db, coll, id);

  const response = await updateDoc(statusRef, {
    Status: 'Active',
  });
  dismiss();
  success();
  return response;
};

// Get All Data
export const getAllBooks = async () => {
  let ebooks = [];
  const querySnapshot = await getDocs(collection(db, 'author'));
  querySnapshot.forEach((doc) => {
    doc.data().books.map((book) => ebooks.push(book));
    return ebooks;
  });

  return ebooks;
};

// Get A Single document
export const getEbook = async (coll, id) => {
  loading();
  const docRef = doc(db, coll, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    dismiss();
    success();
    return docSnap.data();
  } else {
    dismiss();
    errorToast();
    return false;
  }
};

// Admin API's
export const getAllUsers = async () => {
  try {
    const snapshot = await firebase.firestore().collection('user').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

export const getAllAuthors = async () => {
  try {
    const snapshot = await firebase.firestore().collection('author').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

export const getAllVolunteers = async () => {
  try {
    const snapshot = await firebase.firestore().collection('volunteer').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

export const getAllMessages = async () => {
  try {
    const snapshot = await firebase.firestore().collection('contact').get();
    const documents = [];
    snapshot.forEach((doc) => {
      delete doc.data().Password;
      const data = doc.data();
      data.id = doc.id;
      documents.push(data);
      return documents;
    });
    return documents;
  } catch (error) {
    return error.message;
  }
};

// Delete doc from collection
export const deleteData = async (coll, id) => {
  loading();
  const response = await deleteDoc(doc(db, coll, id));
  dismiss();
  success();
  return response;
};
