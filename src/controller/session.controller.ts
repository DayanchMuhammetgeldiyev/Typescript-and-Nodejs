import config from 'config';
import { get } from 'lodash';
import { Request, Response } from 'express';
import { validatePassword } from '../service/userservice';
import {
  createSession,
  createAccessToken,
  updateSession,
  findSessions
} from '../service/sessionservice';
import { sign } from '../utils/jwt.utils';
