import React, { createContext, useEffect } from 'react'
import firebaseConfig from './firebaseConfig';
import app from 'firebase/app'
import 'firebase/database';
import { useDispatch } from 'react-redux';