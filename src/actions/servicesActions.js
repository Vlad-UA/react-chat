import history from '../utils/history';
import * as redirectConst from "../constants/redirectConstants";

export function redirect(to) {
  return (dispatch) => {
    history.push(`${process.env.PUBLIC_URL}${to}`);

    dispatch({
      type: redirectConst.REDIRECT,
      payload: {to},
    })
  };
}
