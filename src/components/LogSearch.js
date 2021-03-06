import Search from './Search';
import { getSearchText, updateSearchText } from '../store/logs';
import { connect } from './StateProvider';

const mapState = s => ({ searchText: getSearchText(s), updateSearchText });
export default connect(mapState)(Search);
