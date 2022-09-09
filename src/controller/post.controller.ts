import { Request, Response} from 'express';
import { get } from 'lodash';
import {createPost, findPost, findAndUpdate, deletePost,} from '../service/postservice';