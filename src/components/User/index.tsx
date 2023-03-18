import styles from './user.module.scss'

export interface IUser {
  user: UserObjectDTO
}

export interface UserObjectDTO {
  id: string;
  name: string;
  age: number;
  status: string;
  nacionality: string;
  profession?: string;
  color: string;
}

export function User({ user }: IUser) {
  return (
    <div className={`${styles.userContainer} ${styles[user.color]}`}>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.status}</p>
      <p>{user.nacionality}</p>
      <p>{user.profession}</p>
    </div>
  )
}
