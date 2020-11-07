import DataAccess from '../repository/DataAccess'
import { UserBaseDocument } from '../database/model/User';


class UserDal extends DataAccess<Object, UserBaseDocument>  {
}

export default UserDal;