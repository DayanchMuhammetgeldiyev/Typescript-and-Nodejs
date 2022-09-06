import { LeanDocument, FilterQuery, UpdateQuery } from 'mongoose';
import config from 'config';
import { get } from 'lodash';
import { UserDocument } from '../model/user.model';
import Session, { SessionDocument } from '../model/session.model';
import { sign, decode } from '../utils/jwt.utils';
import { findUser } from './userservice';

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent });
  return session.toJSON();
}

export function createAccessToken({
  user,
  session
}: {
  user:
    | Omit<UserDocument, 'password'>
    | LeanDocument<Omit<UserDocument, 'password'>>;
  session:
    | Omit<SessionDocument, 'password'>
    | LeanDocument<Omit<UserDocument, 'password'>>;
}) {
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get('accessTokentl') }
  );
  return accessToken;
}

export async function reIssueAccessToken({
          refreshToken,
})